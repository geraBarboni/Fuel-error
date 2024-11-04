/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.93.0
  Forc version: 0.62.0
  Fuel-Core version: 0.31.0
*/

import type {
  BigNumberish,
  BN,
  Bytes,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
  StdString,
} from "fuels";

import type { Option, Enum } from "./common";

export enum AccessErrorInput {
  NotOwner = "NotOwner",
}
export enum AccessErrorOutput {
  NotOwner = "NotOwner",
}
export type IdentityInput = Enum<{
  Address: AddressInput;
  ContractId: ContractIdInput;
}>;
export type IdentityOutput = Enum<{
  Address: AddressOutput;
  ContractId: ContractIdOutput;
}>;
export enum InitializationErrorInput {
  CannotReinitialized = "CannotReinitialized",
}
export enum InitializationErrorOutput {
  CannotReinitialized = "CannotReinitialized",
}
export enum StakingErrorInput {
  NotOwner = "NotOwner",
  InvalidStartTime = "InvalidStartTime",
  InvalidEndTime = "InvalidEndTime",
  TrackIsDisabled = "TrackIsDisabled",
  StakingPeriodNotStarted = "StakingPeriodNotStarted",
  StakingPeriodEnded = "StakingPeriodEnded",
  TrackIdDoesNotExist = "TrackIdDoesNotExist",
  InvalidAssetId = "InvalidAssetId",
  InvalidAmount = "InvalidAmount",
  MaxStakeReached = "MaxStakeReached",
  NotInitialized = "NotInitialized",
  AlreadyInitialized = "AlreadyInitialized",
  UserHasNotStaked = "UserHasNotStaked",
}
export enum StakingErrorOutput {
  NotOwner = "NotOwner",
  InvalidStartTime = "InvalidStartTime",
  InvalidEndTime = "InvalidEndTime",
  TrackIsDisabled = "TrackIsDisabled",
  StakingPeriodNotStarted = "StakingPeriodNotStarted",
  StakingPeriodEnded = "StakingPeriodEnded",
  TrackIdDoesNotExist = "TrackIdDoesNotExist",
  InvalidAssetId = "InvalidAssetId",
  InvalidAmount = "InvalidAmount",
  MaxStakeReached = "MaxStakeReached",
  NotInitialized = "NotInitialized",
  AlreadyInitialized = "AlreadyInitialized",
  UserHasNotStaked = "UserHasNotStaked",
}
export type StateInput = Enum<{
  Uninitialized: [];
  Initialized: IdentityInput;
  Revoked: [];
}>;
export type StateOutput = Enum<{
  Uninitialized: [];
  Initialized: IdentityOutput;
  Revoked: [];
}>;

export type AddTrackInput = {
  track_id: BigNumberish;
  track_name: StdString;
  track_config: TrackConfigInput;
};
export type AddTrackOutput = {
  track_id: BN;
  track_name: StdString;
  track_config: TrackConfigOutput;
};
export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type DisableTrackInput = { track_id: BigNumberish };
export type DisableTrackOutput = { track_id: BN };
export type OwnershipSetInput = { new_owner: IdentityInput };
export type OwnershipSetOutput = { new_owner: IdentityOutput };
export type OwnershipTransferredInput = {
  new_owner: IdentityInput;
  previous_owner: IdentityInput;
};
export type OwnershipTransferredOutput = {
  new_owner: IdentityOutput;
  previous_owner: IdentityOutput;
};
export type StakeInput = {
  track_id: BigNumberish;
  user: IdentityInput;
  amount: BigNumberish;
};
export type StakeOutput = { track_id: BN; user: IdentityOutput; amount: BN };
export type StakeDataInput = {
  moment: BigNumberish;
  staked: BigNumberish;
  stake_weight: BigNumberish;
};
export type StakeDataOutput = { moment: BN; staked: BN; stake_weight: BN };
export type TrackConfigInput = {
  stake_token: AssetIdInput;
  max_total_stake: BigNumberish;
  start: BigNumberish;
  end: BigNumberish;
};
export type TrackConfigOutput = {
  stake_token: AssetIdOutput;
  max_total_stake: BN;
  start: BN;
  end: BN;
};
export type TrackInfoInput = {
  track_name: StdString;
  track_config: TrackConfigInput;
  track_stake_data: StakeDataInput;
};
export type TrackInfoOutput = {
  track_name: StdString;
  track_config: TrackConfigOutput;
  track_stake_data: StakeDataOutput;
};
export type UnstakeInput = {
  track_id: BigNumberish;
  user: IdentityInput;
  amount: BigNumberish;
};
export type UnstakeOutput = { track_id: BN; user: IdentityOutput; amount: BN };

export interface StakingContractAbiInterface extends Interface {
  functions: {
    owner: FunctionFragment;
    add_track: FunctionFragment;
    constructor: FunctionFragment;
    disable_track: FunctionFragment;
    stake: FunctionFragment;
    transfer_ownership: FunctionFragment;
    unstake: FunctionFragment;
    get_time_mock: FunctionFragment;
    get_total_stake: FunctionFragment;
    get_total_stake_weight: FunctionFragment;
    get_track_info: FunctionFragment;
    get_user_stake: FunctionFragment;
    get_user_stake_weight: FunctionFragment;
    track_count: FunctionFragment;
  };
}

export class StakingContractAbi extends Contract {
  interface: StakingContractAbiInterface;
  functions: {
    owner: InvokeFunction<[], StateOutput>;
    add_track: InvokeFunction<
      [
        name: StdString,
        stake_token: AssetIdInput,
        max_total_stake: BigNumberish,
        start: BigNumberish,
        end: BigNumberish,
      ],
      void
    >;
    constructor: InvokeFunction<[new_owner: IdentityInput], void>;
    disable_track: InvokeFunction<[track_id: BigNumberish], void>;
    stake: InvokeFunction<[track_id: BigNumberish], void>;
    transfer_ownership: InvokeFunction<[new_owner: IdentityInput], void>;
    unstake: InvokeFunction<
      [track_id: BigNumberish, amount: BigNumberish],
      void
    >;
    get_time_mock: InvokeFunction<[], Option<ContractIdOutput>>;
    get_total_stake: InvokeFunction<
      [track_id: BigNumberish],
      Option<[AssetIdOutput, BN]>
    >;
    get_total_stake_weight: InvokeFunction<[track_id: BigNumberish], BN>;
    get_track_info: InvokeFunction<
      [track_id: BigNumberish],
      Option<TrackInfoOutput>
    >;
    get_user_stake: InvokeFunction<
      [track_id: BigNumberish, user: IdentityInput],
      Option<[AssetIdOutput, BN]>
    >;
    get_user_stake_weight: InvokeFunction<
      [track_id: BigNumberish, user: IdentityInput],
      BN
    >;
    track_count: InvokeFunction<[], BN>;
  };
}