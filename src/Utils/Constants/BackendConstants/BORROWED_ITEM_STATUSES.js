export const BORROWED_ITEM_STATUSES = {
  PENDING_ENDORSER_APPROVAL: {
    borrowed_item_status: "Pending Endorser Approval",
    description: "Item is awaiting approval",
  },
  PENDING_BORROWING_APPROVAL: {
    borrowed_item_status: "Pending Borrowing Approval",
    description: "Item is awaiting approval",
  },
  APPROVED: {
    borrowed_item_status: "Approved",
    description: "Item is approved",
  },
  IN_POSSESSION: {
    borrowed_item_status: "In Possession",
    description: "Item currently borrowed",
  },
  CANCELLED: {
    borrowed_item_status: "Cancelled",
    description: "Item is cancelled by borrower",
  },
  DISAPPROVED: {
    borrowed_item_status: "Disapproved",
    description: "Item is declined to be borrowed",
  },
  OVERDUE_RETURN: {
    borrowed_item_status: "Overdue Return",
    description: "Item is overdue for return",
  },
  RETURNED: {
    borrowed_item_status: "Returned",
    description: "Item has been returned after a borrowing transaction",
  },
  DAMAGED_BUT_REPAIRABLE: {
    borrowed_item_status: "Damaged but Repairable",
    description: "Returned item requires repair/maintenance",
  },
  UNREPAIRABLE: {
    borrowed_item_status: "Unrepairable",
    description: "Returned item beyond fixing",
  },
  LOST: {
    borrowed_item_status: "Lost",
    description: "Item is lost by the borrower",
  },
};
