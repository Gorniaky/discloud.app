import { ApiUser } from "@discloudapp/api-types/v2";
import { REST } from "@discloudapp/rest";
import { env } from "node:process";
import { DiscloudAppOptions } from "../@types";
import AppManager from "../managers/AppManager";
import TeamManager from "../managers/TeamManager";
import User from "../structures/User";
import { DefaultDiscloudAppOptions } from "../util";

export default class DiscloudApp {
  #token?: string;
  #apps = new AppManager(this);
  #team = new TeamManager(this);
  #user = new User(this, <ApiUser>{});
  #rest = new REST();
  options: Omit<DiscloudAppOptions, "token">;

  constructor(options: DiscloudAppOptions = {}) {
    options = { ...DefaultDiscloudAppOptions, ...options };

    if (options.token) {
      this.#setToken(options.token);
      delete options.token;
    }

    this.options = options;
  }

  get apps() {
    return this.#apps;
  }

  get rest() {
    return this.#rest;
  }

  get team() {
    return this.#team;
  }

  get user() {
    return this.#user;
  }

  #setToken(token: string) {
    if (!env.DISCLOUD_TOKEN && token) env.DISCLOUD_TOKEN = token;
    this.rest.setToken(this.#token = token);
    return this;
  }

  get token() {
    return this.#token;
  }

  async login(token = this.token ?? env.DISCLOUD_TOKEN) {
    if (typeof token !== "string") throw new Error("[DISCLOUD API] Missing token.");

    this.#setToken(token);

    await this.user.fetch();

    return "[DISCLOUD API] Logged.";
  }
}