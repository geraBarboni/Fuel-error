import { useContext } from "react";

import { BackendApiContext } from ".";

export function useBackendApiService() {
  const context = useContext(BackendApiContext);
  if (!context) {
    throw new Error(
      "useBackendApiService must be used within a BackendApiServiceProvider",
    );
  }
  return context;
}
