// special array classes for Account, Transaction & Block

export class BlockchainConfig {
  name: string;
  dbPath: string;
  startAt: Date;
  blockTime: Date;
  defaultGasPrice: number;
  blockGasLimit: number;
  coinbase: string;
}

export class WalletConfig {
  accounts: [];
  totalAccounts: number = 10;
}

export default class Blockchain {
  accounts: Array<Account>;
  transactons: Array<Transaction>;
  blocks: Array<Block>;

  config: BlockchainConfig;


  name: string;


  // TODO: get config
  blockNumber: number;
  gasPrice: number;
  epoch: number;

  // JSON-RPC methods
}
