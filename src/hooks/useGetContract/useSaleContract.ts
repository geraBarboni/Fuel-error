import { useEffect, useRef } from "react";



import { useGlobalProvider } from "../provider/useGlobalProvider";
import { Account, Provider } from "fuels";
import { SaleContract } from "../../services/contracts/sale";

interface Props {
  contractId?: string;
  defaultProvider?: boolean;
}

export interface UseSaleContractResult {
  contract: SaleContract | undefined;
}

export function useSaleContract({
  contractId = "",
  defaultProvider = false,
}: Props): UseSaleContractResult {
  const { provider: globalProvider } = useGlobalProvider();
  const contractRef = useRef<SaleContract | undefined>(undefined);
  
  useEffect(() => {
    const walletOrProvider: Account | Provider | undefined = globalProvider;
  
    if (!walletOrProvider) return;

    if (!walletOrProvider || !contractId) return;

    const newContract = new SaleContract(contractId, walletOrProvider);
    console.log("SALE CONTRACT", newContract);

    if (
      !contractRef.current ||
      contractRef.current.account?.address !== newContract.account?.address
    ) {
      contractRef.current = newContract;
    }
  }, [contractId, globalProvider, defaultProvider]);

  return { contract: contractRef.current };
}