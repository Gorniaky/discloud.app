[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTPutApiAppAllStartResult

# Interface: RESTPutApiAppAllStartResult

Defined in: [packages/api-types/rest/v2/app.ts:269](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L269)

## Extends

- [`RESTApiAppManagerResult`](RESTApiAppManagerResult.md)

## Properties

### apps

> **apps**: [`ApiAppManagerStartedAll`](ApiAppManagerStartedAll.md)

Defined in: [packages/api-types/rest/v2/app.ts:270](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L270)

#### Overrides

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`apps`](RESTApiAppManagerResult.md#apps)

***

### message

> **message**: `string`

Defined in: [packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`message`](RESTApiAppManagerResult.md#message)

***

### status

> **status**: [`RESTApiStatusResponse`](../type-aliases/RESTApiStatusResponse.md)

Defined in: [packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiAppManagerResult`](RESTApiAppManagerResult.md).[`status`](RESTApiAppManagerResult.md#status)
