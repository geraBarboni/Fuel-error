
import { merkle } from "./projects-data";
import { SaleMerkleProof } from "../../hooks/useGetMerkleProof";
import { IMerkleProofRepository } from "../../types/repositories/IMerkleProofRepository";

export class InMemoryMerkleProofRepository implements IMerkleProofRepository {
  async getProof(saleId: number, address: string): Promise<SaleMerkleProof> {
    return Promise.resolve(merkle);
  }
}
