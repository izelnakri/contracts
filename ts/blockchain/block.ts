import Transaction from './transaction';
import type { Address, Balance, GasPrice, Hash } from './types';

type BlockStatus = 'finalized' | 'unfinalized' | 'pending';

// NOTE: Investigate new ones on etherscan
export default class Block {
  number: number;
  status: BlockStatus;
  timestamp: Date;
  hash: Hash;
  parentHash: Hash;
  stateRoot: Hash;
  transactionsRoot: Hash;
  receiptsRoot: Hash;
  size: number;
  nonce: string;

  feeRecipient: Address;
  blockReward: Balance;

  totalDifficulty: number;
  gasUsed: number;
  baseFeePerGas: GasPrice;
  extraData: string;

  miner: Address;
  transactions: Array<Transaction>;
}

// NOTE: ON Etherscan, post-merge:
// proposedOn: Date;
// withdrawals: Array<Withdrawal>;
// burntFees: Balance;
