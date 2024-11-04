"use client";
import { createContext, PropsWithChildren } from "react";

import { InMemoryMerkleProofRepository } from "../../services/backend/InMemoryMerkleProofRepository";
import { IMerkleProofRepository } from "../../types/repositories/IMerkleProofRepository";

interface IBackendApiContext {
  merkleProofService: IMerkleProofRepository;
}

export const BackendApiContext = createContext<IBackendApiContext | null>(null);

interface BackendApiServiceProviderProps extends PropsWithChildren {
  useMockServices?: boolean;
}

export function BackendApiServiceProvider({
  children,
}: BackendApiServiceProviderProps) {
  const merkleProofService = new InMemoryMerkleProofRepository()
  console.log("IN BACKEND SERVICE");
  

  return (
    <BackendApiContext.Provider
      value={{
        merkleProofService,
      }}
    >
      {children}
    </BackendApiContext.Provider>
  );
}
