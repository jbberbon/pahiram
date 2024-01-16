export const TRANSAC_STATUSES = {
  PENDING_ENDORSER_APPROVAL: {
    transac_status: "Pending Endorser Approval",
    description: "Transaction is awaiting for approval",
  },
  PENDING_BORROWING_APPROVAL: {
    transac_status: "Pending Borrowing Approval",
    description: "Transaction is awaiting for approval",
  },
  APPROVED: {
    transac_status: "Approved",
    description: "All items within the transaction are approved",
  },
  ON_GOING: {
    transac_status: "On Going",
    description: "All items are currently in the possession of the borrower",
  },
  DISAPPROVED: {
    transac_status: "Disapproved",
    description: "Transaction is disapproved",
  },
  CANCELLED: {
    transac_status: "Cancelled",
    description: "Transaction is cancelled",
  },
  OVERDUE_TRANSACTION_COMPLETION: {
    transac_status: "Overdue Transaction Completion",
    description: "Transaction is complete, and all items are returned",
  },
  TRANSACTION_COMPLETE: {
    transac_status: "Transaction Complete",
    description: "Transaction is complete, and all items are returned",
  },
};
