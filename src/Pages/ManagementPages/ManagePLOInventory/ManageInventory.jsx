import { useState } from "react";
import InnerMainDisplayLayout from "../../../Components/Layout/MainDisplay/InnerMainDisplayLayout";
import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import PageTitle from "../../../Components/Text/PageTitle";
import InventoryTable from "./InventoryTable";
// import PropTypes from "prop-types";

const ManageInventory = () => {
  const [isItemModalOpen, setItemModalOpen] = useState();
  
  return (
    <>
      <MainDisplayLayout>
        <InnerMainDisplayLayout>
          <PageTitle>Manage Inventory</PageTitle>
          <InventoryTable />
        </InnerMainDisplayLayout>
      </MainDisplayLayout>
    </>
  );
};

// Dashboard.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
// };

export default ManageInventory;
