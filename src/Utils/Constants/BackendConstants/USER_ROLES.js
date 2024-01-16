export const USER_ROLES = {
  BORROWER: {
    role: "Borrower",
    description: "System borrower",
  },
  ENDORSER: {
    role: "Endorser",
    description: "Borrowing Endorser",
  },
  BORROWING_MANAGER: {
    role: "Borrowing Manager",
    description: "Manages borrowing transactions",
  },
  INVENTORY_MANAGER: {
    role: "Inventory Manager",
    description: "Manages inventory",
  },
  PENALTY_MANAGER: {
    role: "Penalty Manager",
    description: "Manages borrowing penalties",
  },
  CO_SUPERVISOR: {
    role: "Co-Supervisor",
    description: "Alter ego of Supervisor but cannot designate office roles",
  },
  SUPERVISOR: {
    role: "Supervisor",
    description: "Head of the designated office",
  },
};
