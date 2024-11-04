import { useRef } from "react";

import { SaleContractAbi__factory } from "../../services/contracts/sale/factories/SaleContractAbi__factory";
import { SaleContractAbi } from "../../services/contracts/sale/SaleContractAbi";

import { useGetContract } from ".";
import { IContractAbiFactory } from "./types";

interface Props {
  contractId: string | undefined;
  defaultProvider?: boolean;
}

export interface UseSaleContractResult {
  contract: SaleContractAbi | undefined;
}

export function useSaleContract({
  contractId = "",
  defaultProvider = false,
}: Props): UseSaleContractResult {
  const contractRef = useRef<SaleContractAbi | undefined>(undefined);

  const { contract } = useGetContract<SaleContractAbi>({
    contractId,
    contractAbiFactory:
      SaleContractAbi__factory as unknown as IContractAbiFactory<SaleContractAbi>,
    defaultProvider,
  });

  if (!contractRef.current && contract) {
    contractRef.current = contract;
  } else if (
    contract?.account?.address &&
    !contractRef.current?.account?.address.equals(contract?.account?.address)
  ) {
    contractRef.current = contract;
  }
  return { contract: contractRef.current };
}
