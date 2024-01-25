export const BORROWED_ITEM_STATUSES = {
  PENDING_APPROVAL: {
    status: "Pending Approval",
    description: "Item is awaiting approval",
  },
  APPROVED: {
    status: "Approved",
    description: "Item is approved",
  },
  IN_POSSESSION: {
    status: "In Possession",
    description: "Item currently borrowed",
  },
  CANCELLED: {
    status: "Cancelled",
    description: "Item is cancelled by borrower",
  },
  DISAPPROVED: {
    status: "Disapproved",
    description: "Item is declined to be borrowed",
  },
  OVERDUE_RETURN: {
    status: "Overdue Return",
    description: "Item is overdue for return",
  },
  RETURNED: {
    status: "Returned",
    description: "Item has been returned after a borrowing transaction",
  },
  DAMAGED_BUT_REPAIRABLE: {
    status: "Damaged but Repairable",
    description: "Returned item requires repair/maintenance",
  },
  UNREPAIRABLE: {
    status: "Unrepairable",
    description: "Returned item beyond fixing",
  },
  LOST: {
    status: "Lost",
    description: "Item is lost by the borrower",
  },
};
