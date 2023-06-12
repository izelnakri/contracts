// TODO: Investigate upgrades to the smart contract on substrate
// NOTE: All Tables have implicit id(index) field

interface Entry {
  address: string;
  amount: number;
  deadline: Date;
  insertedAt: Date;
}

interface OwnerHistory {
  address: string;
  insertedAt: Date;
}

interface Owner {
  address: string;
}

interface OwnerProposal {
  from: string;
  to: string;
  // isApproved virtual attribute
}

interface OwnerApproval {
  from: string;
  decision: boolean;
  ownerProposalId: number;
}

interface Transaction {
  from: string;
  to: string;
  amount: number;
}

interface TransactionProposal {
  from: string;
  to: string;
  amount: number;
  deadline: Date;
  data: string | null;
  // isApproved virtual attribute
}

interface TransactionApproval {
  from: address;
  decision: boolean;
  transactionProposalId: number;
  transactionId: number;
}

interface EntryRefund {
  entryId: number;
  amount: number;
  finalizedAt: Date;
}

export default class EscrowContract {
  defaultDeadline = 1000 * 60 * 60 * 24 * 7 * 365; // 7 days
  ownerAddress: string;

  constructor(
    public readonly owner: string,
    public readonly amount: number,
  ) {
    // TODO: will be done
  }
}
