import useUserStore from "../../Store/UserStore";
import SIDEBAR_ITEMS from "../Constants/SIDEBAR_ITEMS";
import USER_ROLES from "../Constants/USER_ROLES";

function ChooseSidebarList() {
  const { userData } = useUserStore();
  const role = userData.role;
  const isAdmin = userData.isAdmin;

  // destructured users
  const borrower = USER_ROLES.borrower;
  const inventoryManager = USER_ROLES.inventoryManager;
  const lendingManager = USER_ROLES.lendingManager;
  const supervisor = USER_ROLES.supervisor;

  // destructured sidebar list
  const borrowerList = SIDEBAR_ITEMS["borrower"];
  const employeeList = SIDEBAR_ITEMS["employee"];
  const supervisorList = SIDEBAR_ITEMS["supervisor"];

  // For borrowers + employee + admin
  if ((role === inventoryManager || role === lendingManager) && isAdmin) {
    const appendedList = [...borrowerList, ...employeeList, ...supervisorList];
    return appendedList;
  }
  // For borrowers + employee but not admin
  if ((role === inventoryManager || role === lendingManager) && !isAdmin) {
    const appendedList = [...borrowerList, ...employeeList];
    return appendedList;
  }
  // For supervisor + admin OR borrower + admin
  if ((role === supervisor || role === borrower) && isAdmin) {
    const appendedList = [...borrowerList, ...supervisorList];
    return appendedList;
  }
  // For supervisor but not admin
  if (role === supervisor && !isAdmin) {
    const appendedList = [...borrowerList, ...supervisorList];
    return appendedList;
  }
  // For borrowers only
  return borrowerList;
}

export default ChooseSidebarList;
