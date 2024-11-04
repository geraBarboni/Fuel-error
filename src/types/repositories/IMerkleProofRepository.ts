
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


export interface IMerkleProofRepository {
  getProof(saleId: number, address: string): Promise<SaleMerkleProof>;
}
