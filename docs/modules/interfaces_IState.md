[hass-sidecar](../README.md) / [Modules](../modules.md) / interfaces/IState

# Module: interfaces/IState

## Table of contents

### Interfaces

- [IState](../interfaces/interfaces_IState.IState.md)

### Type Aliases

- [IStateCallback](interfaces_IState.md#istatecallback)

## Type Aliases

### IStateCallback

Ƭ **IStateCallback**: (`newState`: [`IState`](../interfaces/interfaces_IState.IState.md), `oldState`: [`IState`](../interfaces/interfaces_IState.IState.md) \| ``null``) => `void`

#### Type declaration

▸ (`newState`, `oldState`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`IState`](../interfaces/interfaces_IState.IState.md) |
| `oldState` | [`IState`](../interfaces/interfaces_IState.IState.md) \| ``null`` |

##### Returns

`void`

#### Defined in

[interfaces/IState.ts:14](https://github.com/abogaart/hass-sidecar/blob/2fe9bd4/src/interfaces/IState.ts#L14)
