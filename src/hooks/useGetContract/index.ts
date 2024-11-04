import { Account, Contract, JsonAbi, Provider } from "fuels";
import { useEffect, useState } from "react";

import { useGlobalProvider } from "../provider/useGlobalProvider";
import { FuelContractId, IContractAbiFactory } from "./types";

type ContractType<T> = T | undefined;

interface Props<T> {
  contractId: FuelContractId;
  contractAbiFactory: IContractAbiFactory<T>;
  defaultProvider?: boolean;
}

interface UseGetContractReturn<T> {
  contract: ContractType<T>;
}

export function createContractInstance<T>(
  contractId: FuelContractId,
  contractAbiFactory: IContractAbiFactory<T>,
  walletOrProvider: Account | Provider,
): T | undefined {
  if (!walletOrProvider || !contractId) {
    return undefined;
  }
  if (!contractAbiFactory || !contractAbiFactory.abi) {
    throw new Error("Invalid contract ABI factory");
  }
  return new Contract(
    contractId,
    contractAbiFactory.abi as JsonAbi,
    walletOrProvider,
  ) as unknown as T;
}

export function useGetContract<T>({
  contractId,
  contractAbiFactory,
  defaultProvider = false,
}: Props<T>): UseGetContractReturn<T> {

  const { provider: globalProvider } = useGlobalProvider();
  const [contract, setContract] = useState<ContractType<T>>(undefined);

  useEffect(() => {

    const walletOrProvider: Account | Provider | undefined = globalProvider;

    if (!walletOrProvider) return;

    const newContract = createContractInstance(
      contractId,
      contractAbiFactory,
      walletOrProvider,
    );
    setContract(newContract);
  }, [
    contractId,
    contractAbiFactory,
    globalProvider,
    defaultProvider,
  ]);

  return { contract };
}
