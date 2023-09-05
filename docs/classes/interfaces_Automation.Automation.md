[hass-sidecar](../README.md) / [Modules](../modules.md) / [interfaces/Automation](../modules/interfaces_Automation.md) / Automation

# Class: Automation

[interfaces/Automation](../modules/interfaces_Automation.md).Automation

Automation class
Interacts with Home Assistant websocket connection and
with the mqtt server.

Provides methods for easy manage the devices and get their states

**`Abstract`**

## Table of contents

### Constructors

- [constructor](interfaces_Automation.Automation.md#constructor)

### Properties

- [\_api](interfaces_Automation.Automation.md#_api)
- [\_eachMinutes](interfaces_Automation.Automation.md#_eachminutes)
- [\_intervals](interfaces_Automation.Automation.md#_intervals)
- [\_lastMinute](interfaces_Automation.Automation.md#_lastminute)
- [\_mqtt](interfaces_Automation.Automation.md#_mqtt)
- [\_mqttSubscriptions](interfaces_Automation.Automation.md#_mqttsubscriptions)
- [\_queue](interfaces_Automation.Automation.md#_queue)
- [\_stateSubscriptions](interfaces_Automation.Automation.md#_statesubscriptions)
- [\_timeouts](interfaces_Automation.Automation.md#_timeouts)
- [description](interfaces_Automation.Automation.md#description)
- [title](interfaces_Automation.Automation.md#title)

### Methods

- [\_checkEachMinute](interfaces_Automation.Automation.md#_checkeachminute)
- [\_checkQueue](interfaces_Automation.Automation.md#_checkqueue)
- [callService](interfaces_Automation.Automation.md#callservice)
- [clearEachMinute](interfaces_Automation.Automation.md#cleareachminute)
- [clearInterval](interfaces_Automation.Automation.md#clearinterval)
- [clearRunAt](interfaces_Automation.Automation.md#clearrunat)
- [clearTimeout](interfaces_Automation.Automation.md#cleartimeout)
- [destroy](interfaces_Automation.Automation.md#destroy)
- [getState](interfaces_Automation.Automation.md#getstate)
- [lightToggle](interfaces_Automation.Automation.md#lighttoggle)
- [lightTurnOff](interfaces_Automation.Automation.md#lightturnoff)
- [lightTurnOn](interfaces_Automation.Automation.md#lightturnon)
- [mqttPublish](interfaces_Automation.Automation.md#mqttpublish)
- [mqttSubscribe](interfaces_Automation.Automation.md#mqttsubscribe)
- [onConnectState](interfaces_Automation.Automation.md#onconnectstate)
- [onStateChange](interfaces_Automation.Automation.md#onstatechange)
- [runAt](interfaces_Automation.Automation.md#runat)
- [searchEntities](interfaces_Automation.Automation.md#searchentities)
- [setEachMinute](interfaces_Automation.Automation.md#seteachminute)
- [setInterval](interfaces_Automation.Automation.md#setinterval)
- [setTimeout](interfaces_Automation.Automation.md#settimeout)
- [switchToggle](interfaces_Automation.Automation.md#switchtoggle)
- [switchTurnOff](interfaces_Automation.Automation.md#switchturnoff)
- [switchTurnOn](interfaces_Automation.Automation.md#switchturnon)

## Constructors

### constructor

• **new Automation**(`title?`, `description?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title?` | `string` |
| `description?` | `string` |

#### Defined in

[interfaces/Automation.ts:52](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L52)

## Properties

### \_api

• `Private` **\_api**: [`default`](lib_API.default.md)

#### Defined in

[interfaces/Automation.ts:49](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L49)

___

### \_eachMinutes

• `Private` **\_eachMinutes**: `IEachMinute`[] = `[]`

#### Defined in

[interfaces/Automation.ts:39](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L39)

___

### \_intervals

• `Private` **\_intervals**: `Timeout`[] = `[]`

#### Defined in

[interfaces/Automation.ts:36](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L36)

___

### \_lastMinute

• `Private` **\_lastMinute**: `number`

#### Defined in

[interfaces/Automation.ts:40](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L40)

___

### \_mqtt

• `Private` **\_mqtt**: [`default`](lib_mqtt.default.md)

#### Defined in

[interfaces/Automation.ts:50](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L50)

___

### \_mqttSubscriptions

• `Private` **\_mqttSubscriptions**: `Map`<`string`, `number`\>

#### Defined in

[interfaces/Automation.ts:42](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L42)

___

### \_queue

• `Private` **\_queue**: `IQueue`[] = `[]`

#### Defined in

[interfaces/Automation.ts:44](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L44)

___

### \_stateSubscriptions

• `Private` **\_stateSubscriptions**: { `entityId`: `string` ; `id`: `number`  }[] = `[]`

#### Defined in

[interfaces/Automation.ts:43](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L43)

___

### \_timeouts

• `Private` **\_timeouts**: `Timeout`[] = `[]`

#### Defined in

[interfaces/Automation.ts:35](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L35)

___

### description

• `Readonly` **description**: `string` = `''`

#### Defined in

[interfaces/Automation.ts:47](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L47)

___

### title

• `Readonly` **title**: `string` = `''`

#### Defined in

[interfaces/Automation.ts:46](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L46)

## Methods

### \_checkEachMinute

▸ `Private` **_checkEachMinute**(): `void`

Verify if minute has changed and fires callbacks

#### Returns

`void`

Void

#### Defined in

[interfaces/Automation.ts:235](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L235)

___

### \_checkQueue

▸ `Private` **_checkQueue**(): `Promise`<`void`\>

Check if any queue have to be execute at this time

#### Returns

`Promise`<`void`\>

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:215](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L215)

___

### callService

▸ `Protected` **callService**(`domain`, `service`, `entityId`, `data`): `Promise`<`any`\>

Call service

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Domain, for example: light |
| `service` | `string` | Service, for example: turn_on |
| `entityId` | ``null`` \| `string` | Entity id |
| `data` | `any` | Attributes (optional) |

#### Returns

`Promise`<`any`\>

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:281](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L281)

___

### clearEachMinute

▸ `Protected` **clearEachMinute**(`id`): `void`

Clear each minute callback by id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Callback id |

#### Returns

`void`

void

#### Defined in

[interfaces/Automation.ts:205](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L205)

___

### clearInterval

▸ `Protected` **clearInterval**(`id`): `void`

Clear interval

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `Timeout` | ID of the interval |

#### Returns

`void`

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:420](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L420)

___

### clearRunAt

▸ `Protected` **clearRunAt**(`id`): `void`

Clear run at queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | queue id |

#### Returns

`void`

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:178](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L178)

___

### clearTimeout

▸ `Protected` **clearTimeout**(`id`): `void`

Clear a timeout

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `Timeout` | Timeout id |

#### Returns

`void`

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:389](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L389)

___

### destroy

▸ **destroy**(): `void`

Destroy method
All timeout, intervals, queues and subscriptions are deleted

#### Returns

`void`

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:432](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L432)

___

### getState

▸ `Protected` **getState**(`entityId`): `Promise`<[`IState`](../interfaces/interfaces_IState.IState.md)\>

Get entity state

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `string` |

#### Returns

`Promise`<[`IState`](../interfaces/interfaces_IState.IState.md)\>

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:256](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L256)

___

### lightToggle

▸ `Protected` **lightToggle**(`entityId`): `Promise`<`any`\>

Toggle a light state

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `string` |

#### Returns

`Promise`<`any`\>

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:324](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L324)

___

### lightTurnOff

▸ `Protected` **lightTurnOff**(`entityId`, `data`): `Promise`<`any`\>

Turns off a light

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `string` |
| `data` | `any` |

#### Returns

`Promise`<`any`\>

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:312](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L312)

___

### lightTurnOn

▸ `Protected` **lightTurnOn**(`entityId`, `data`): `Promise`<`any`\>

Turns on a light

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `string` |
| `data` | `any` |

#### Returns

`Promise`<`any`\>

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:299](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L299)

___

### mqttPublish

▸ `Protected` **mqttPublish**(`topic`, `payload`, `options?`): `void`

Publish to an mqtt topic

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `payload` | `string` |
| `options?` | `IClientPublishOptions` |

#### Returns

`void`

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:86](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L86)

___

### mqttSubscribe

▸ `Protected` **mqttSubscribe**(`topic`, `options`, `callback`): `void`

Subscribe to an mqtt topic

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `options` | `IClientSubscribeOptions` |
| `callback` | [`ISubscriptionCallback`](../modules/lib_mqtt.md#isubscriptioncallback) |

#### Returns

`void`

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:102](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L102)

___

### onConnectState

▸ `Protected` **onConnectState**(`entityId`, `state`, `callback`): `void`

Subscribe to a specific state on entity

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `string` |
| `state` | `string` |
| `callback` | [`IStateCallback`](../modules/interfaces_IState.md#istatecallback) |

#### Returns

`void`

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:135](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L135)

___

### onStateChange

▸ `Protected` **onStateChange**(`entityId`, `callback`): `void`

Subscribe to an entity_id state change

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `string` |
| `callback` | [`IStateCallback`](../modules/interfaces_IState.md#istatecallback) |

#### Returns

`void`

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:122](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L122)

___

### runAt

▸ `Protected` **runAt**(`date`, `callback`): `string`

Run a function at specific time

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | Date when execute |
| `callback` | () => `void` \| `Promise`<`void`\> | Callback |

#### Returns

`string`

Queue id

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:161](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L161)

___

### searchEntities

▸ `Protected` **searchEntities**(`exp`): `Promise`<[`IState`](../interfaces/interfaces_IState.IState.md)[]\>

Search for entities

#### Parameters

| Name | Type |
| :------ | :------ |
| `exp` | `string` \| `RegExp` |

#### Returns

`Promise`<[`IState`](../interfaces/interfaces_IState.IState.md)[]\>

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:266](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L266)

___

### setEachMinute

▸ `Protected` **setEachMinute**(`callback`): `string`

Set each minute callback

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `IPromiseCallback`<`void`\> | Promise callback |

#### Returns

`string`

Return id of the interval

#### Defined in

[interfaces/Automation.ts:189](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L189)

___

### setInterval

▸ `Protected` **setInterval**(`callback`, `milliseconds`): `Timeout`

Creates a interval to execute a function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `ICallback` | Callback function |
| `milliseconds` | `number` | Milliseconds of the interval |

#### Returns

`Timeout`

ID of the interval

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:404](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L404)

___

### setTimeout

▸ `Protected` **setTimeout**(`callback`, `milliseconds`): `Timeout`

Creates a timeout to run a function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `ICallback` | Callback function |
| `milliseconds` | `number` | Milliseconds to wait until run |

#### Returns

`Timeout`

ID if the timer

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:373](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L373)

___

### switchToggle

▸ `Protected` **switchToggle**(`entityId`): `Promise`<`any`\>

Toggle a switch

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `string` |

#### Returns

`Promise`<`any`\>

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:360](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L360)

___

### switchTurnOff

▸ `Protected` **switchTurnOff**(`entityId`): `Promise`<`any`\>

Turn off a switch

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `string` |

#### Returns

`Promise`<`any`\>

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:348](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L348)

___

### switchTurnOn

▸ `Protected` **switchTurnOn**(`entityId`): `Promise`<`any`\>

Turn on a switch

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `string` |

#### Returns

`Promise`<`any`\>

**`Memberof`**

Automation

#### Defined in

[interfaces/Automation.ts:336](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/Automation.ts#L336)
