[hass-sidecar](../README.md) / [Modules](../modules.md) / [lib/mqtt](../modules/lib_mqtt.md) / default

# Class: default

[lib/mqtt](../modules/lib_mqtt.md).default

Manage the MQTT connection with the server

## Table of contents

### Constructors

- [constructor](lib_mqtt.default.md#constructor)

### Properties

- [client](lib_mqtt.default.md#client)
- [subscriptions](lib_mqtt.default.md#subscriptions)
- [instance](lib_mqtt.default.md#instance)

### Methods

- [handleMessage](lib_mqtt.default.md#handlemessage)
- [publish](lib_mqtt.default.md#publish)
- [subscribe](lib_mqtt.default.md#subscribe)
- [unsubscribe](lib_mqtt.default.md#unsubscribe)
- [getInstance](lib_mqtt.default.md#getinstance)

## Constructors

### constructor

• **new default**()

Initialize the connection

#### Defined in

[lib/mqtt.ts:29](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/mqtt.ts#L29)

## Properties

### client

• `Private` **client**: `default`

#### Defined in

[lib/mqtt.ts:20](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/mqtt.ts#L20)

___

### subscriptions

• `Private` **subscriptions**: `Map`<`string`, `ISubscription`[]\>

#### Defined in

[lib/mqtt.ts:21](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/mqtt.ts#L21)

___

### instance

▪ `Static` **instance**: [`default`](lib_mqtt.default.md)

#### Defined in

[lib/mqtt.ts:22](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/mqtt.ts#L22)

## Methods

### handleMessage

▸ `Private` **handleMessage**(`topic`, `message`): `void`

Handle mqtt received message.
Checks if has any subscription to this topic an invoke callback functions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | topic |
| `message` | `any` | message |

#### Returns

`void`

[return description]

#### Defined in

[lib/mqtt.ts:54](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/mqtt.ts#L54)

___

### publish

▸ **publish**(`topic`, `payload`, `options?`): `void`

Publish message into topic

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | topic |
| `payload` | `string` | message to send |
| `options?` | `IClientPublishOptions` | publish options |

#### Returns

`void`

**`Memberof`**

MQTT

#### Defined in

[lib/mqtt.ts:138](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/mqtt.ts#L138)

___

### subscribe

▸ **subscribe**(`topic`, `options`, `callback`): `INewSubscription`

Subscribe to topic

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | Topic to subscribe |
| `options` | `IClientSubscribeOptions` | Subscribe options |
| `callback` | [`ISubscriptionCallback`](../modules/lib_mqtt.md#isubscriptioncallback) | Callback function |

#### Returns

`INewSubscription`

New subscription identity

#### Defined in

[lib/mqtt.ts:92](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/mqtt.ts#L92)

___

### unsubscribe

▸ **unsubscribe**(`topic`, `id`): `void`

Unsubscribe to topic

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | topic to unsubscribe |
| `id` | `number` | id of the subscription |

#### Returns

`void`

**`Memberof`**

MQTT

#### Defined in

[lib/mqtt.ts:154](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/mqtt.ts#L154)

___

### getInstance

▸ `Static` **getInstance**(): [`default`](lib_mqtt.default.md)

Singleton

#### Returns

[`default`](lib_mqtt.default.md)

Instance of MQTT connection

#### Defined in

[lib/mqtt.ts:74](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/mqtt.ts#L74)
