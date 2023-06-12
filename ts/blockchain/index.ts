import type Account from './account.js';
import type Transaction from './transaction.js';
import type Block from './block.js';
import { Address, Balance, MnemonicPhrase, HDPath, FilePath, GasPrice, GasLimit } from './types.js';

// NOTE: special array classes for Account, Transaction & Block
// NOTE: Rather move this to Polkadot metadata API

export class BlockchainConfig {
  name?: string;
  // networkId?
  dbPath: FilePath;
  startAt: Date;
  blockTime: Date;
  defaultGasPrice: GasPrice;
  blockGasLimit: GasLimit;
  coinbase: Address;

  // NOTE: implement constructor?
}

export class WalletConfig {
  accounts: Array<[Address, Balance]>;
  totalAccounts: number = 10;
  mnemonic: MnemonicPhrase;
  accountsKeyPath?: FilePath;
  defaultBalance?: Balance;
  hdPath?: HDPath;
}

export default class Blockchain {
  accounts: Array<Account>;
  transactons: Array<Transaction>;
  blocks: Array<Block>;
  config: BlockchainConfig;

  get currentBlock(): Block {
    return this.blocks[this.blocks.length - 1];
  }

  // Note: JSON-RPC methods
}
