/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
*/

import type {
  Account,
  DeployContractOptions,
  DeployContractResult,
  JsonAbi,
  Provider,
} from "fuels";
import {
  Contract,
  ContractFactory,
  decompressBytecode,
  Interface,
} from "fuels";

import { StakingContract, StakingContractInterface } from "./StakingContract";

const bytecode = decompressBytecode(
  "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",
);

export class StakingContractFactory extends ContractFactory {
  static readonly bytecode = bytecode;
  static readonly abi = StakingContract.abi;

  constructor(accountOrProvider: Account | Provider) {
    super(
      bytecode,
      StakingContract.abi as unknown as StakingContractInterface,
      accountOrProvider,
    );
  }

  override deploy<TContract extends Contract = Contract>(
    deployOptions?: DeployContractOptions,
  ): Promise<DeployContractResult<TContract>> {
    return super.deploy({
      storageSlots: StakingContract.storageSlots,
      ...deployOptions,
    });
  }

  static async deploy(
    wallet: Account,
    options: DeployContractOptions = {},
  ): Promise<DeployContractResult<StakingContract>> {
    const factory = new StakingContractFactory(wallet);
    return factory.deploy(options);
  }

  static createInterface(): Interface {
    return new Interface(StakingContractFactory.abi as unknown as JsonAbi);
  }

  static connect(
    address: string,
    signerOrProvider: Account | Provider,
  ): StakingContract {
    return new Contract(
      address,
      StakingContractFactory.abi as unknown as JsonAbi,
      signerOrProvider,
    ) as StakingContract;
  }
}