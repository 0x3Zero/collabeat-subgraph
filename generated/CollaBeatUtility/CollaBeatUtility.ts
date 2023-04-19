// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Forked extends ethereum.Event {
  get params(): Forked__Params {
    return new Forked__Params(this);
  }
}

export class Forked__Params {
  _event: Forked;

  constructor(event: Forked) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get dataKey(): string {
    return this._event.parameters[2].value.toString();
  }

  get cid(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class Minted extends ethereum.Event {
  get params(): Minted__Params {
    return new Minted__Params(this);
  }
}

export class Minted__Params {
  _event: Minted;

  constructor(event: Minted) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class CollaBeatUtility extends ethereum.SmartContract {
  static bind(address: Address): CollaBeatUtility {
    return new CollaBeatUtility("CollaBeatUtility", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  chainId(): string {
    let result = super.call("chainId", "chainId():(string)", []);

    return result[0].toString();
  }

  try_chainId(): ethereum.CallResult<string> {
    let result = super.tryCall("chainId", "chainId():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  feeReceiver(): Address {
    let result = super.call("feeReceiver", "feeReceiver():(address)", []);

    return result[0].toAddress();
  }

  try_feeReceiver(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeReceiver", "feeReceiver():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mintPrice(): BigInt {
    let result = super.call("mintPrice", "mintPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_mintPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mintPrice", "mintPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftAddress(): Address {
    let result = super.call("nftAddress", "nftAddress():(address)", []);

    return result[0].toAddress();
  }

  try_nftAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("nftAddress", "nftAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  nonce(): i32 {
    let result = super.call("nonce", "nonce():(uint8)", []);

    return result[0].toI32();
  }

  try_nonce(): ethereum.CallResult<i32> {
    let result = super.tryCall("nonce", "nonce():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _mintPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _feeReceiver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _nonce(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _chainId(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ForkCall extends ethereum.Call {
  get inputs(): ForkCall__Inputs {
    return new ForkCall__Inputs(this);
  }

  get outputs(): ForkCall__Outputs {
    return new ForkCall__Outputs(this);
  }
}

export class ForkCall__Inputs {
  _call: ForkCall;

  constructor(call: ForkCall) {
    this._call = call;
  }

  get cid(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ForkCall__Outputs {
  _call: ForkCall;

  constructor(call: ForkCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetChainIdCall extends ethereum.Call {
  get inputs(): SetChainIdCall__Inputs {
    return new SetChainIdCall__Inputs(this);
  }

  get outputs(): SetChainIdCall__Outputs {
    return new SetChainIdCall__Outputs(this);
  }
}

export class SetChainIdCall__Inputs {
  _call: SetChainIdCall;

  constructor(call: SetChainIdCall) {
    this._call = call;
  }

  get _chainId(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetChainIdCall__Outputs {
  _call: SetChainIdCall;

  constructor(call: SetChainIdCall) {
    this._call = call;
  }
}

export class SetFeeReceiverCall extends ethereum.Call {
  get inputs(): SetFeeReceiverCall__Inputs {
    return new SetFeeReceiverCall__Inputs(this);
  }

  get outputs(): SetFeeReceiverCall__Outputs {
    return new SetFeeReceiverCall__Outputs(this);
  }
}

export class SetFeeReceiverCall__Inputs {
  _call: SetFeeReceiverCall;

  constructor(call: SetFeeReceiverCall) {
    this._call = call;
  }

  get _feeReceiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeReceiverCall__Outputs {
  _call: SetFeeReceiverCall;

  constructor(call: SetFeeReceiverCall) {
    this._call = call;
  }
}

export class SetMintPriceCall extends ethereum.Call {
  get inputs(): SetMintPriceCall__Inputs {
    return new SetMintPriceCall__Inputs(this);
  }

  get outputs(): SetMintPriceCall__Outputs {
    return new SetMintPriceCall__Outputs(this);
  }
}

export class SetMintPriceCall__Inputs {
  _call: SetMintPriceCall;

  constructor(call: SetMintPriceCall) {
    this._call = call;
  }

  get price(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMintPriceCall__Outputs {
  _call: SetMintPriceCall;

  constructor(call: SetMintPriceCall) {
    this._call = call;
  }
}

export class SetNftAddressCall extends ethereum.Call {
  get inputs(): SetNftAddressCall__Inputs {
    return new SetNftAddressCall__Inputs(this);
  }

  get outputs(): SetNftAddressCall__Outputs {
    return new SetNftAddressCall__Outputs(this);
  }
}

export class SetNftAddressCall__Inputs {
  _call: SetNftAddressCall;

  constructor(call: SetNftAddressCall) {
    this._call = call;
  }

  get _nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetNftAddressCall__Outputs {
  _call: SetNftAddressCall;

  constructor(call: SetNftAddressCall) {
    this._call = call;
  }
}

export class SetNonceCall extends ethereum.Call {
  get inputs(): SetNonceCall__Inputs {
    return new SetNonceCall__Inputs(this);
  }

  get outputs(): SetNonceCall__Outputs {
    return new SetNonceCall__Outputs(this);
  }
}

export class SetNonceCall__Inputs {
  _call: SetNonceCall;

  constructor(call: SetNonceCall) {
    this._call = call;
  }

  get _nonce(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetNonceCall__Outputs {
  _call: SetNonceCall;

  constructor(call: SetNonceCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}