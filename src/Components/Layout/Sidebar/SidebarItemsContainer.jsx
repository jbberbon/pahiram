import { useEffect, useState } from "react";
import useUserStore from "../../../Store/UserStore";
import useCurrentPathname from "../../../Utils/HelperFunctions/useCurrentPathname";
import SidebarList from "./SidebarList";
import BORROWER_MENU_LIST from "../../../Utils/Constants/SidebarConstants/BORROWER_MENU_LIST";
import SUPERVISOR_MENU_LIST from "../../../Utils/Constants/SidebarConstants/SUPERVISOR_MENU_LIST";
import EMPLOYEE_MENU_LIST from "../../../Utils/Constants/SidebarConstants/EMPLOYEE_MENU_LIST";
import ALL_MENU_LIST from "../../../Utils/Constants/SidebarConstants/ALL_MENU_LIST";
import CollapseSidebarMenu from "./CollapseSidebarMenu";
import useSidebarStore from "../../../Store/SidebarStore";
import { getBorrowerKey } from "../../../Utils/HelperFunctions/ConstantFunctions/UserRoleConstantHelper";
import ENDORSER_MENU_LIST from "../../../Utils/Constants/SidebarConstants/ENDORSER_MENU_LIST";
import ADMIN_MENU_LIST from "../../../Utils/Constants/SidebarConstants/ADMIN_MENU_LIST";
import FINANCE_MENU_LIST from "../../../Utils/Constants/SidebarConstants/FINANCE_MENU_LIST";
import FINANCE_SUPERVISOR_MENU_LIST from "../../../Utils/Constants/SidebarConstants/FINANCE_SUPERVISOR_MENU_LIST";
import PLO_MENU_LIST from "../../../Utils/Constants/SidebarConstants/PLO_MENU_LIST";
import PLO_SUPERVISOR_MENU_LIST from "../../../Utils/Constants/SidebarConstants/PLO_SUPERVISOR_MENU_LIST";
import CATCH_ERROR_LIST from "../../../Utils/Constants/SidebarConstants/CATCH_ERROR_LIST";

const LENDING_ROLES = [
  "BORROWER",
  "INVENTORY_MANAGER",
  "BORROWING_MANAGER",
  "CO_SUPERVISOR",
  "SUPERVISOR",
];
const LENDING_OFFICES = ["ITRO", "BMO", "ESLO"];
const FINANCE_DEPARTMENT = "FAD";
const PURCHASING_DEPARTMENT = "PLO";

const BORROWER = "BORROWER";
const INVENTORY_MANAGER = "INVENTORY_MANAGER";
// const BORROWING_MANAGER = "BORROWING_MANAGER";
const PENALTY_MANAGER = "PENALTY_MANAGER";

const CO_SUPERVISOR = "CO_SUPERVISOR";
const SUPERVISOR = "SUPERVISOR";

const SidebarItemsContainer = () => {
  const currentPathname = useCurrentPathname();
  const { userData } = useUserStore();
  const userEmail = userData?.email;
  const isAdmin = userData?.isAdmin;
  const userRole = userData?.role;
  const userOffice = userData?.office;
  const borrower = getBorrowerKey();

  const employeeEmail = "@apc.edu.ph";

  //-------------------------------------------------------------------------

  const initialActiveLink =
    isAdmin || userRole != borrower ? "/dashboard" : "/borrow-items";

  const [selectedLink, setSelectedLink] = useState(initialActiveLink);

  const handleListItemClick = (index) => {
    setSelectedLink(index);
  };

  // Track changes to the URL to maintain bg-color for active menu
  useEffect(() => {
    // Check the current User URL Path
    const currentPath = currentPathname.replace("/", ""); // removes the slash

    // Find the link in all_menu_list that matches the current path
    const activeLink = ALL_MENU_LIST.reduce((foundLink, item) => {
      return foundLink || (item?.link === currentPath ? item?.link : null);
    }, null);
    setSelectedLink(activeLink);
  }, [currentPathname]);

  // -------------------------------------------------------------------------

  const {
    isOpenBorrowerMenu,
    isOpenEndorserMenu,
    isOpenManagementMenu,
    isOpenAdminMenu,
    isOpenFinanceMenu,
    toggleAdminMenu,
    toggleBorrowerMenu,
    toggleEndorserMenu,
    toggleFinanceMenu,
    toggleManagementMenu,
  } = useSidebarStore();

  const borrowerMenu = (
    <CollapseSidebarMenu
      menuTitle="Borrower Menu"
      isOpen={isOpenBorrowerMenu}
      setIsOpen={toggleBorrowerMenu}
    >
      <SidebarList
        sidebarItems={BORROWER_MENU_LIST}
        selectedLink={selectedLink}
        handleListItemClick={handleListItemClick}
      />
    </CollapseSidebarMenu>
  );
  const endorserMenu = userEmail.includes(employeeEmail) && (
    <CollapseSidebarMenu
      menuTitle="Endorser Menu"
      isOpen={isOpenEndorserMenu}
      setIsOpen={toggleEndorserMenu}
    >
      <SidebarList
        sidebarItems={ENDORSER_MENU_LIST}
        selectedLink={selectedLink}
        handleListItemClick={handleListItemClick}
      />
    </CollapseSidebarMenu>
  );

  const adminMenu = isAdmin && (
    <CollapseSidebarMenu
      menuTitle="Admin Menu"
      isOpen={isOpenAdminMenu}
      setIsOpen={toggleAdminMenu}
    >
      <SidebarList
        sidebarItems={ADMIN_MENU_LIST}
        selectedLink={selectedLink}
        handleListItemClick={handleListItemClick}
      />
    </CollapseSidebarMenu>
  );

  // User is a lending employee
  if (
    LENDING_OFFICES.includes(userOffice) &&
    LENDING_ROLES.includes(userRole)
  ) {
    return (
      <>
        {borrowerMenu}
        {endorserMenu}

        <CollapseSidebarMenu
          menuTitle="Lending Management"
          isOpen={isOpenManagementMenu}
          setIsOpen={toggleManagementMenu}
        >
          <SidebarList
            sidebarItems={
              userRole === SUPERVISOR
                ? SUPERVISOR_MENU_LIST
                : EMPLOYEE_MENU_LIST
            }
            selectedLink={selectedLink}
            handleListItemClick={handleListItemClick}
            initialIsOpen={true}
          />
        </CollapseSidebarMenu>

        {adminMenu}
      </>
    );
  }

  // User is Finance Employee
  const FINANCE_ROLES = [PENALTY_MANAGER, CO_SUPERVISOR, SUPERVISOR];
  if (userOffice === FINANCE_DEPARTMENT && FINANCE_ROLES.includes(userRole)) {
    return (
      <>
        {borrowerMenu}
        {endorserMenu}

        <CollapseSidebarMenu
          menuTitle="Finance Menu"
          isOpen={isOpenFinanceMenu}
          setIsOpen={toggleFinanceMenu}
        >
          <SidebarList
            sidebarItems={
              userOffice === SUPERVISOR
                ? FINANCE_SUPERVISOR_MENU_LIST
                : FINANCE_MENU_LIST
            }
            selectedLink={selectedLink}
            handleListItemClick={handleListItemClick}
            initialIsOpen={true}
          />
        </CollapseSidebarMenu>

        {adminMenu}
      </>
    );
  }

  // User is PLO Employee
  const PLO_ROLES = [INVENTORY_MANAGER, CO_SUPERVISOR, SUPERVISOR];
  if (userOffice === PURCHASING_DEPARTMENT && PLO_ROLES.includes(userRole)) {
    return (
      <>
        {borrowerMenu}
        {endorserMenu}

        <CollapseSidebarMenu
          menuTitle="Inventory Menu"
          isOpen={isOpenFinanceMenu}
          setIsOpen={toggleFinanceMenu}
        >
          <SidebarList
            sidebarItems={
              userOffice === SUPERVISOR
                ? PLO_SUPERVISOR_MENU_LIST
                : PLO_MENU_LIST
            }
            selectedLink={selectedLink}
            handleListItemClick={handleListItemClick}
            initialIsOpen={true}
          />
        </CollapseSidebarMenu>

        {adminMenu}
      </>
    );
  }

  if (userRole === BORROWER && !userOffice) {
    return <>{borrowerMenu}</>;
  }

  // catch error
  return (
    <SidebarList
      sidebarItems={CATCH_ERROR_LIST}
      selectedLink={"unauthorized"}
      handleListItemClick={handleListItemClick}
      initialIsOpen={true}
    />
  );
};

export default SidebarItemsContainer;
