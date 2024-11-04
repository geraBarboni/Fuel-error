import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Block, Provider, TESTNET_NETWORK_URL } from "fuels";
import { useEffect, useState } from "react";


const providerUrl = TESTNET_NETWORK_URL;

interface UseGlobalProviderReturn extends Pick<UseQueryResult, "isFetched"> {
  provider: Provider | undefined;
  latestBlock: Block | null;
}

export function useGlobalProvider(): UseGlobalProviderReturn {
  const [provider, setProvider] = useState<Provider | undefined>();

  // Default Provider
  useEffect(() => {
    Provider.create(providerUrl).then(setProvider);
  }, []);

  const { data, isFetched } = useQuery({
    queryKey: ["useGlobalProvider", provider],
    queryFn: async () => {
      const blockNumber = await provider?.getBlockNumber();
      let block = null;

      try {
        if (blockNumber) {
          block = (await provider?.getBlock(blockNumber.toNumber())) || null;
        }
      } catch (e) {
        console.error(e);
      }

      return block;
    },
    initialData: null,
    enabled: !!provider,
  });

  return { provider, latestBlock: data, isFetched };
}
