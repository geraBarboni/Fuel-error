import { Address, isBech32 } from "fuels";
import { IdentityInput } from "./contracts/staking/StakingContract";


export function toB256(address: string): string {
  if (address.length === 63 && isBech32(address)) {
    return Address.fromString(address).toB256();
  }

  return "";
}

export function toIdentityAddressInput(str: string): IdentityInput {
  const identityInput: IdentityInput = {
    Address: { bits: toB256(str) },
  };

  return identityInput;
}
