import { useQuery } from "@tanstack/react-query";

import { AccountAddress, UseGetMerkleProofReturn } from "./useGetMerkleProof";
import { UseSaleContractResult } from "./useGetContract/useSaleContract";
import { toIdentityAddressInput } from "../services/toIdentityInput";
import { Account } from "fuels";

export type WalletType = Account;

export type NetworkConnectionError = "WRONG_ACCOUNT" | "ACCOUNTS_NOT_FOUND";

export interface NetworkConnectionContextState {
  isLoadingProvider: boolean;
  isConnectingWallet: boolean;
  error: NetworkConnectionError | undefined;
  accountConnected: AccountAddress | undefined;
  accountConnectedFetched: boolean;
  wallet: WalletType | undefined | null; // null when is loaded and to connected
  connectWallet: () => void;
  disconnectWallet: () => void;
}

interface Props extends UseSaleContractResult {
  user: NetworkConnectionContextState["accountConnected"];
  userMerkleProof: UseGetMerkleProofReturn["data"];
}

export function useUserWhitelisted({
  contract,
  user,
  userMerkleProof,
}: Props) {
  const { data, isLoading, isFetched } = useQuery({
    queryKey: [
      "useUserWhitelisted",
      contract?.id?.toString(),
      user,
      userMerkleProof?.node,
    ],

    queryFn: async () => {
      try {
        if (!userMerkleProof) return false;

        const identityInput = toIdentityAddressInput(user?.bech32 as string);

        const result = await contract?.functions
          .is_whitelisted(
            identityInput,
            userMerkleProof?.value || 0,
            userMerkleProof?.keyOfProof || 0,
            userMerkleProof?.proof_nodes || [],
          )
          .get();

        console.log("WHITELISTED");

        return result?.value ?? false;

      } catch (e) {
        console.error(e)
        return false
      }
    },
    enabled:
      !!contract &&
      userMerkleProof !== undefined &&
      (!!user || userMerkleProof === null),
  });

  return {
    data,
    isPending: isLoading,
    isFetched: isFetched,
  };
}
