[hass-sidecar](../README.md) / [Modules](../modules.md) / [lib/API](../modules/lib_API.md) / default

# Class: default

[lib/API](../modules/lib_API.md).default

Class to manage all interactions with the backend

## Table of contents

### Constructors

- [constructor](lib_API.default.md#constructor)

### Properties

- [\_automations](lib_API.default.md#_automations)
- [\_connection](lib_API.default.md#_connection)
- [\_stateListeners](lib_API.default.md#_statelisteners)
- [\_states](lib_API.default.md#_states)
- [\_instance](lib_API.default.md#_instance)

### Methods

- [\_bootstrap](lib_API.default.md#_bootstrap)
- [\_loadAutomation](lib_API.default.md#_loadautomation)
- [\_modifiedFile](lib_API.default.md#_modifiedfile)
- [\_onStateChange](lib_API.default.md#_onstatechange)
- [\_syncStates](lib_API.default.md#_syncstates)
- [\_unload](lib_API.default.md#_unload)
- [callService](lib_API.default.md#callservice)
- [clearOnState](lib_API.default.md#clearonstate)
- [getState](lib_API.default.md#getstate)
- [onState](lib_API.default.md#onstate)
- [searchEntities](lib_API.default.md#searchentities)
- [getInstance](lib_API.default.md#getinstance)

## Constructors

### constructor

• **new default**()

Creates an instance of API.

**`Memberof`**

API

#### Defined in

[lib/API.ts:31](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L31)

## Properties

### \_automations

• `Private` **\_automations**: `Map`<`string`, [`Automation`](interfaces_Automation.Automation.md)\>

#### Defined in

[lib/API.ts:16](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L16)

___

### \_connection

• `Private` **\_connection**: [`default`](lib_websocketConnection.default.md)

#### Defined in

[lib/API.ts:17](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L17)

___

### \_stateListeners

• `Private` **\_stateListeners**: `Map`<`string`, { `callback`: [`IStateCallback`](../modules/interfaces_IState.md#istatecallback) ; `id`: `number`  }[]\>

#### Defined in

[lib/API.ts:19](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L19)

___

### \_states

• `Private` **\_states**: `Map`<`string`, [`IState`](../interfaces/interfaces_IState.IState.md)\>

#### Defined in

[lib/API.ts:18](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L18)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`default`](lib_API.default.md)

#### Defined in

[lib/API.ts:24](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L24)

## Methods

### \_bootstrap

▸ `Private` **_bootstrap**(): `Promise`<`void`\>

Load all automations and watch for changes
When automation file changes, it will be unloaded
and loaded on the fly

#### Returns

`Promise`<`void`\>

**`Memberof`**

API

#### Defined in

[lib/API.ts:289](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L289)

___

### \_loadAutomation

▸ `Private` **_loadAutomation**(`filename`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`void`

#### Defined in

[lib/API.ts:338](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L338)

___

### \_modifiedFile

▸ `Private` **_modifiedFile**(`ev`, `filename`): `void`

Handle modified automation file
If automation has previously loaded, unloads it an reloads.
It the automation is new, loads it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ev` | `string` | Event fired (change or add) |
| `filename` | `string` | File path that has changed |

#### Returns

`void`

**`Memberof`**

API

#### Defined in

[lib/API.ts:316](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L316)

___

### \_onStateChange

▸ `Private` **_onStateChange**(): `void`

Initiates subscription to all states changes.
Logs any change to the console, stores the new state in the states map
and call all callback functions from listeners.

#### Returns

`void`

**`Memberof`**

API

#### Defined in

[lib/API.ts:249](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L249)

___

### \_syncStates

▸ `Private` **_syncStates**(): `Promise`<`void`\>

Get all states and stores their values in the map

#### Returns

`Promise`<`void`\>

Promise

**`Memberof`**

API

#### Defined in

[lib/API.ts:217](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L217)

___

### \_unload

▸ `Private` **_unload**(): `void`

Unloads automation class

#### Returns

`void`

**`Memberof`**

API

#### Defined in

[lib/API.ts:354](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L354)

___

### callService

▸ **callService**(`domain`, `service`, `entityId`, `data`): `Promise`<`any`\>

Call a Home Assistant service

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | Domain, for example: light |
| `service` | `string` | Service, for example: turn_on |
| `entityId` | ``null`` \| `string` | Entity id |
| `data` | `any` | Attributes (optional) |

#### Returns

`Promise`<`any`\>

Promise with the result

**`Memberof`**

API

#### Defined in

[lib/API.ts:173](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L173)

___

### clearOnState

▸ **clearOnState**(`entityId`, `id`): `void`

Unsubscribe from state change.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityId` | `string` | entity to unsubscribe |
| `id` | `number` | id subscription |

#### Returns

`void`

**`Memberof`**

API

#### Defined in

[lib/API.ts:117](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L117)

___

### getState

▸ **getState**(`entityId`): `Promise`<[`IState`](../interfaces/interfaces_IState.IState.md)\>

Get current state of one entity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityId` | `string` | entity_id to get state |

#### Returns

`Promise`<[`IState`](../interfaces/interfaces_IState.IState.md)\>

Promise with the state

**`Memberof`**

API

#### Defined in

[lib/API.ts:138](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L138)

___

### onState

▸ **onState**(`entityId`, `callback`): `Object`

Subscribe to state changes on entity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityId` | `string` | entity_id to watch for changes |
| `callback` | [`IStateCallback`](../modules/interfaces_IState.md#istatecallback) | callback function |

#### Returns

`Object`

listenerInfo  Object with the listener information

| Name | Type |
| :------ | :------ |
| `entityId` | `string` |
| `id` | `number` |

**`Memberof`**

API

#### Defined in

[lib/API.ts:87](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L87)

___

### searchEntities

▸ **searchEntities**(`filter`): `Promise`<[`IState`](../interfaces/interfaces_IState.IState.md)[]\>

Search entities based on a RegExp or string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `string` \| `RegExp` | String or RegExp to search for |

#### Returns

`Promise`<[`IState`](../interfaces/interfaces_IState.IState.md)[]\>

IState[] Array of states

#### Defined in

[lib/API.ts:151](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L151)

___

### getInstance

▸ `Static` **getInstance**(): [`default`](lib_API.default.md)

Singleton

#### Returns

[`default`](lib_API.default.md)

Instance

**`Static`**

**`Memberof`**

API

#### Defined in

[lib/API.ts:71](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/lib/API.ts#L71)
