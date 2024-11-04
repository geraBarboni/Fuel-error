import './App.css'
import { useSaleContract } from './hooks/useGetContract/useSaleContract';
import { useGetMerkleProof } from './hooks/useGetMerkleProof';
import { useUserWhitelisted } from './hooks/useUserWhitelisted';

function App() {

  const accountConnected = {
    bech32: "fuel157kmjd3mhuenpvwmdzt4n6wd97ytrlc3cuevzdx5vcmhvfcaxdrsy337yt",
    b256: "0xa7aDB9363bBF3330B1db689759E9CD2f88B1Ff11C732C134d4663776271D3347"
}

  const { contract } = useSaleContract({
    contractId:  "fuel18mzksu880s0053eq4g70sk4lgq7pwzg2z3snncz2g3unsvvps62sk75xgu",
  });

  const { data: userMerkleProof } =
  useGetMerkleProof({
    saleId: 1769,
    userAddress: accountConnected,
    forceRequest: true,
  });

  const { data: isWhislisted } =
  useUserWhitelisted({
    contract,
    user: accountConnected,
    userMerkleProof,
  });

  return (
    <>

    {isWhislisted ? "user whitelisted" : "user no whitelisted"}

    </>
  )
}

export default App
