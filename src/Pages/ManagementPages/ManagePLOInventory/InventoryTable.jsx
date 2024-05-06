import { DataGrid } from "@mui/x-data-grid";
import useGet from "../../../Hooks/useGet";
import { useEffect, useState } from "react";
import {
  getItemListEndpoint,
  getSpecificItemEndpoint,
} from "../../../API/Endpoints/manageInventory";
import ErrorSnackbar from "../../../Components/Snackbars/ErrorSnackbar";
import Button from "@mui/material/Button";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ItemModal from "./ItemModal";
import useGetSpecificResource from "../../../Hooks/useGetSpecificResource";

const endpoint = getItemListEndpoint;

const InventoryTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { field: "apc_item_id", headerName: "ID", width: 100 },
    { field: "model_name", headerName: "Item", width: 150 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "office", headerName: "Office", width: 130 },
    { field: "purchase_order_id", headerName: "Purchase Order", width: 130 },
    { field: "designated_to", headerName: "Designated To", width: 130 },
    { field: "unit_cost", headerName: "Unit Cost", width: 130 },
    {
      field: "warranty_expiration",
      headerName: "Warranty Expiration",
      width: 130,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Button
          onClick={() => {
            handleEdit(params?.row?.id);
            console.log(params?.row?.id);
          }}
          sx={{ width: "30px", minWidth: "30px", padding: "8px" }}
        >
          <EditRoundedIcon />
        </Button>
      ),
    },
  ];

  const {
    list,
    // isGetListLoading,
    isGetListError,
    setIsGetListError,
    getRequestList,
  } = useGet();

  useEffect(() => {
    getRequestList(endpoint);
  }, []);

  const {
    specificResource,
    isLoadingSpecificResource,
    isErrorSpecificResource,
    setIsErrorSpecificResource,
    fetchSpecificResource,
  } = useGetSpecificResource();

  const handleEdit = (itemId) => {
    setIsModalOpen(true);
    fetchSpecificResource(getSpecificItemEndpoint, itemId);
    console.log(specificResource);
  };

  return (
    <>
      <DataGrid
        rows={list}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
        sx={{ width: "100%" }}
      />

      {(specificResource || !isLoadingSpecificResource) && (
        <ItemModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          specificResource={specificResource}
        />
      )}

      <ErrorSnackbar error={isGetListError} setError={setIsGetListError} />
      <ErrorSnackbar
        error={isErrorSpecificResource}
        setError={setIsErrorSpecificResource}
      />
    </>
  );
};

export default InventoryTable;
