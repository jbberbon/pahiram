import { useEffect, useState } from "react";
import useUserStore from "../../../Store/UserStore";
import getRoleConstants from "../../../Utils/Constants/USER_ROLES";
import useCurrentPathname from "../../../Utils/HelperFunctions/useCurrentPathname";
import SidebarList from "./SidebarList";
import BORROWER_MENU_LIST from "../../../Utils/Constants/SidebarConstants/BORROWER_MENU_LIST";
import SUPERVISOR_ADMIN_MENU_LIST from "../../../Utils/Constants/SidebarConstants/SUPERVISOR_ADMIN_MENU_LIST";
import EMPLOYEE_MENU_LIST from "../../../Utils/Constants/SidebarConstants/EMPLOYEE_MENU_LIST";
import ALL_MENU_LIST from "../../../Utils/Constants/SidebarConstants/ALL_MENU_LIST";
import CollapseSidebarMenu from "./CollapseSidebarMenu";
import useSidebarStore from "../../../Store/SidebarStore";

function SidebarItemsContainer() {
  const currentPathname = useCurrentPathname();
  const { userData } = useUserStore();

  const isAdmin = userData.isAdmin;
  // if user role is included in the role list if not, set to null;
  // const userRole = Object.values(USER_ROLES).includes(userData.role)
  //   ? userData.role
  //   : null;
  const userRole = userData.role;

  //-------------------------------------------------------------------------

  const borrower = getRoleConstants().borrower;
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
      return foundLink || (item.link === currentPath ? item.link : null);
    }, null);
    setSelectedLink(activeLink);
  }, [currentPathname]);

  // -------------------------------------------------------------------------

  const {
    isOpenBorrowerMenu,
    isOpenManagementMenu,
    toggleBorrowerMenu,
    toggleManagementMenu,
  } = useSidebarStore();

  // Non-admin borrowers
  if (userRole === borrower && !isAdmin) {
    return (
      <SidebarList
        sidebarItems={BORROWER_MENU_LIST}
        selectedLink={selectedLink}
        handleListItemClick={handleListItemClick}
      />
    );
  }
  // Non-admin employees
  if (userRole != borrower && !isAdmin) {
    return (
      <>
        {/*  Borrower list first */}
        <CollapseSidebarMenu
          menuTitle="Borrower Menu"
          isOpen={isOpenBorrowerMenu}
          setIsOpen={toggleBorrowerMenu}
        >
          <SidebarList
            sidebarItems={BORROWER_MENU_LIST}
            selectedLink={selectedLink}
            handleListItemClick={handleListItemClick}
            initialIsOpen={false}
          />
        </CollapseSidebarMenu>
        {/*  Pahiram Management */}
        <CollapseSidebarMenu
          menuTitle="Management"
          isOpen={isOpenManagementMenu}
          setIsOpen={toggleManagementMenu}
        >
          <SidebarList
            sidebarItems={EMPLOYEE_MENU_LIST}
            selectedLink={selectedLink}
            handleListItemClick={handleListItemClick}
            initialIsOpen={true}
          />
        </CollapseSidebarMenu>
      </>
    );
  }
  // 1. Borrowers + Admin
  // 2. Employee + Admin
  // 3. Supervisor + Admin
  return (
    <>
      {/*  Borrower list first */}
      <CollapseSidebarMenu
        menuTitle="Borrower Menu"
        isOpen={isOpenBorrowerMenu}
        setIsOpen={toggleBorrowerMenu}
      >
        <SidebarList
          sidebarItems={BORROWER_MENU_LIST}
          selectedLink={selectedLink}
          handleListItemClick={handleListItemClick}
          initialIsOpen={false}
        />
      </CollapseSidebarMenu>
      {/*  Pahiram Management */}
      <CollapseSidebarMenu
        menuTitle="Management"
        isOpen={isOpenManagementMenu}
        setIsOpen={toggleManagementMenu}
      >
        <SidebarList
          sidebarItems={SUPERVISOR_ADMIN_MENU_LIST}
          selectedLink={selectedLink}
          handleListItemClick={handleListItemClick}
          initialIsOpen={true}
        />
      </CollapseSidebarMenu>
    </>
  );
}

export default SidebarItemsContainer;
