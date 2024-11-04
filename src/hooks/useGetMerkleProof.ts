import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { useBackendApiService } from "../context/BackendApiContext/useBackendApiService";

export interface AccountAddress {
  b256: string; // 256 bit hash string
  bech32: string; // bech32Address
}

export interface UserAllocationAmount {
  address: string;
  value: number;
}
export interface IndividualMerkleProof {
  node: string;
  proof_nodes: string[];
}

export interface SaleMerkleProof {
  root: string;
  proofs: Array<IndividualMerkleProof>;
  users: Array<UserAllocationAmount>;
}

export interface UseGetMerkleProofParams {
  userAddress: AccountAddress;
  saleId: number;
  forceRequest?: boolean;
}

type DataProof = (IndividualMerkleProof & UserAllocationAmount) & {
  keyOfProof: number;
};

export interface UseGetMerkleProofReturn
  extends Pick<UseQueryResult, "isLoading" | "isFetched"> {
  data: DataProof | undefined | null;
}

export function useGetMerkleProof({
  userAddress,
  saleId,
  forceRequest = false,
}: UseGetMerkleProofParams): UseGetMerkleProofReturn {
  const { merkleProofService } = useBackendApiService();

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["useGetMerkleProof", userAddress, saleId],
    queryFn: async () => {
      if (!userAddress) return null;

      console.log("GET MERKLE PROOF");

      const _merkleProof = await merkleProofService.getProof(
        saleId,
        userAddress.b256,
      );

      console.log("MERKLE PROOF", _merkleProof);

      const keyOfProof = _merkleProof.users.findIndex(
        (user) => `0x${user.address}` === userAddress.b256,
      );

      console.log("KEY", keyOfProof);

      if (keyOfProof === -1) return null;

      const proof = _merkleProof.proofs[keyOfProof];

      console.log("PROOF", proof);

      return {
        node: `0x${proof.node}`,
        proof_nodes: proof.proof_nodes.map((n) => `0x${n}`),
        ..._merkleProof.users[keyOfProof],
        keyOfProof,
      };
    },
    enabled: !!saleId && (!!userAddress || forceRequest),
  });

  return { data, isLoading, isFetched };
}
