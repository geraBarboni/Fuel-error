import { AbstractAddress, Account, Interface, JsonAbi, Provider } from "fuels";

export type FuelContractId = string | AbstractAddress;

export interface IContractAbiFactory<T> {
  readonly abi: JsonAbi;

  createInterface(): Interface;

  connect(id: FuelContractId, accountOrProvider: Account | Provider): T;
}
