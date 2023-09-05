[hass-sidecar](../README.md) / [Modules](../modules.md) / [lib/websocketConnection](../modules/lib_websocketConnection.md) / default

# Class: default

[lib/websocketConnection](../modules/lib_websocketConnection.md).default

Class to manage the websocket connection with Home Assistant

## Table of contents

### Constructors

- [constructor](lib_websocketConnection.default.md#constructor)

### Properties

- [\_conn](lib_websocketConnection.default.md#_conn)
- [\_eventSubscribers](lib_websocketConnection.default.md#_eventsubscribers)
- [\_id](lib_websocketConnection.default.md#_id)
- [\_listeners](lib_websocketConnection.default.md#_listeners)
- [\_onCloseEvents](lib_websocketConnection.default.md#_oncloseevents)
- [\_promises](lib_websocketConnection.default.md#_promises)
- [\_token](lib_websocketConnection.default.md#_token)
- [\_uri](lib_websocketConnection.default.md#_uri)

### Methods

- [\_createConnection](lib_websocketConnection.default.md#_createconnection)
- [\_handleMessages](lib_websocketConnection.default.md#_handlemessages)
- [\_responseEvent](lib_websocketConnection.default.md#_responseevent)
- [\_responsePromise](lib_websocketConnection.default.md#_responsepromise)
- [addEventListener](lib_websocketConnection.default.md#addeventlistener)
- [callService](lib_websocketConnection.default.md#callservice)
- [getStates](lib_websocketConnection.default.md#getstates)
- [onClose](lib_websocketConnection.default.md#onclose)
- [removeEventListener](lib_websocketConnection.default.md#removeeventlistener)
- [subscribeEvent](lib_websocketConnection.default.md#subscribeevent)

## Constructors

### constructor

• **new default**(`host`, `token`)

Constructor. Initializes the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `host` | `string` | Home assistant host or ip:port |
| `token` | `string` | Token provided by Home Assistant |

#### Defined in

[lib/websocketConnection.ts:33](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L33)

## Properties

### \_conn

• `Private` **\_conn**: `WebSocket`

#### Defined in

[lib/websocketConnection.ts:15](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L15)

___

### \_eventSubscribers

• `Private` **\_eventSubscribers**: `Map`<`number`, (`message`: `any`) => `void`\>

#### Defined in

[lib/websocketConnection.ts:22](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L22)

___

### \_id

• `Private` **\_id**: `number` = `0`

#### Defined in

[lib/websocketConnection.ts:17](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L17)

___

### \_listeners

• `Private` **\_listeners**: `EventEmitter`

#### Defined in

[lib/websocketConnection.ts:16](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L16)

___

### \_onCloseEvents

• `Private` **\_onCloseEvents**: `ICloseCallback`[] = `[]`

#### Defined in

[lib/websocketConnection.ts:23](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L23)

___

### \_promises

• `Private` **\_promises**: `Map`<`number`, { `reject`: (`error`: `Error`) => `void` ; `resolve`: (`message`: `any`) => `void`  }\>

#### Defined in

[lib/websocketConnection.ts:18](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L18)

___

### \_token

• `Private` **\_token**: `string`

#### Defined in

[lib/websocketConnection.ts:14](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L14)

___

### \_uri

• `Private` **\_uri**: `string`

#### Defined in

[lib/websocketConnection.ts:13](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L13)

## Methods

### \_createConnection

▸ `Private` **_createConnection**(): `void`

Creates the websocket connection and stores it in the _conn property

#### Returns

`void`

#### Defined in

[lib/websocketConnection.ts:50](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L50)

___

### \_handleMessages

▸ `Private` **_handleMessages**(`data`): `void`

Handles every message from Home Assistant

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | Data received in string format (has to be parsed as JSON) |

#### Returns

`void`

#### Defined in

[lib/websocketConnection.ts:240](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L240)

___

### \_responseEvent

▸ `Private` **_responseEvent**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[lib/websocketConnection.ts:303](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L303)

___

### \_responsePromise

▸ `Private` **_responsePromise**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[lib/websocketConnection.ts:281](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L281)

___

### addEventListener

▸ **addEventListener**(`event`, `callback`): [`default`](lib_websocketConnection.default.md)

Subscribe listener to an event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Name of the event to subscribe |
| `callback` | (`message`: `any`) => `void` | Callback function |

#### Returns

[`default`](lib_websocketConnection.default.md)

Returns instance

#### Defined in

[lib/websocketConnection.ts:125](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L125)

___

### callService

▸ **callService**(`domain`, `service`, `attributes`): `Promise`<`any`\>

Call a Home Assistant service

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Domain of the service, for example: "light" |
| `service` | `string` | Service to call in that domain, for example: "turn_on" |
| `attributes` | `any` | JSON object with attributes (each service has his owns), for example: {transition: 3} |

#### Returns

`Promise`<`any`\>

Promise with the result

#### Defined in

[lib/websocketConnection.ts:206](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L206)

___

### getStates

▸ **getStates**(): `Promise`<[`IState`](../interfaces/interfaces_IState.IState.md)[]\>

Get all entities states
Tells to Home Assistant to send all the states updated

#### Returns

`Promise`<[`IState`](../interfaces/interfaces_IState.IState.md)[]\>

Returns a promise resolved with an array os IState

#### Defined in

[lib/websocketConnection.ts:155](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L155)

___

### onClose

▸ **onClose**(`callback`): [`default`](lib_websocketConnection.default.md)

Subscribe to the close connection event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `ICloseCallback` | Callback function when closed |

#### Returns

[`default`](lib_websocketConnection.default.md)

Instance

#### Defined in

[lib/websocketConnection.ts:228](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L228)

___

### removeEventListener

▸ **removeEventListener**(`event`, `callback`): [`default`](lib_websocketConnection.default.md)

Remove listener from event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event to unsubscribe |
| `callback` | (`message`: `any`) => `void` | Callback function |

#### Returns

[`default`](lib_websocketConnection.default.md)

Instance

#### Defined in

[lib/websocketConnection.ts:141](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L141)

___

### subscribeEvent

▸ **subscribeEvent**(`event`, `callback`): `Promise`<`any`\>

Subscribe to Home Assistant event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event to subscribe, for example "state_changed" |
| `callback` | (`message`: `any`) => `void` | Callback function |

#### Returns

`Promise`<`any`\>

Promise with the result of subscription

#### Defined in

[lib/websocketConnection.ts:175](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/websocketConnection.ts#L175)
