import type { Address, Balance, GasLimit, GasPrice, Hash } from './types';

export default class Transaction {
  hash: Hash;
  blockId: number;

  from: Address;
  to?: Address;
  contractAddress?: Address;

  gasLimit: GasLimit;
  gasPrice: GasPrice;
  gasUsed: number;

  input: string;
  value: Balance;
  nonce: number;

  // networkId?: number;
  // logsBloom?: string;
}
