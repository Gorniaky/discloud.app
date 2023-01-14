import { RESTApiBaseResult } from "./base";

export interface RESTPostApiUploadResult extends RESTApiBaseResult {
  /**
   * Status code from API
   */
  statusCode: number
  /**
   * Your uploaded app
   */
  app: ApiUploadApp
  /**
   * API logs in case your app fails on launch
   */
  logs?: string
}

export interface ApiUploadApp {
  /**
   * Your app id
   */
  id: string,
  /**
   * Your app's type
   */
  type: string,
  /**
   * Your app's name
   */
  name: string,
  /**
   * Your app's avatar url
   */
  avatarURL: string,
  /**
   * RAM quantity for your app
   */
  ram: number,
  /**
   * The main file path of your app
   */
  mainFile: string,
  /**
   * The programming language of your app
   */
  lang: string,
  /**
   * The version of the package
   */
  version: string,
  /**
   * The timestamp of the upload of your application
   */
  addedAtTimestamp: number,
  /**
   * If your application has auto-restart enabled
   */
  autoRestart: boolean
}