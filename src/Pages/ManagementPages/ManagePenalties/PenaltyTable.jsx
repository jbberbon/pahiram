import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import useGet from "../../../Hooks/useGet";
import useGetSpecificResource from "../../../Hooks/useGetSpecificResource";
import ErrorSnackbar from "../../../Components/Snackbars/ErrorSnackbar";
import {
  getPenalizedTransacListEndpoint,
  getSpecificPenalizedTransacEndpoint,
} from "../../../API/Endpoints/managePenalizedTransaction";
import PenalizedTransactionModal from "./PenaltyModal/PenalizedTransactionModal";
import PropTypes from "prop-types";
import EmptyItems from "../../BorrowerPages/BorrowRequests/EmptyItems";
import convertDateForHumanConsumption from "../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import CircularProgress from "@mui/material/CircularProgress";

const PenaltyTable = ({ apiFilter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultColumns = [
    { field: "borrower", headerName: "Borrower", flex: 1, minWidth: 150 },
    { field: "borrower_apc_id", headerName: "APC ID", flex: 1, minWidth: 150 },
    { field: "office", headerName: "Office", flex: 1, minWidth: 100 },
    { field: "penalty_amount", headerName: "Penalty", flex: 1, minWidth: 100 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.5,
      minWidth: 80,
      sortable: false,
      renderCell: (params) => (
        <Button
          onClick={() => {
            handleGetSpecificPenalty(params?.row?.id);
          }}
          sx={{ width: "30px", minWidth: "30px", padding: "8px" }}
        >
          <EditRoundedIcon />
        </Button>
      ),
    },
  ];

  const columns =
    apiFilter === "PAID"
      ? [
          ...defaultColumns.slice(0, -1), // All columns except the last one
          {
            field: "paid_at",
            headerName: "Settled At",
            minWidth: 150,
            flex: 1,
            valueGetter: (params) =>
              convertDateForHumanConsumption(params?.row?.paid_at) ||
              convertDateForHumanConsumption(params?.row?.settled_at),
          },
          {
            field: "facilitated_by",
            headerName: "Facilitated By",
            minWidth: 150,
            flex: 1,
            valueGetter: (params) =>
              params?.row?.payment_facilitated_by ||
              params?.row?.settlement_facilitated_by,
          },
          ...defaultColumns.slice(-1), // Add the last column (Actions) back
        ]
      : defaultColumns;

  const {
    list,
    isGetListLoading,
    isGetListError,
    setIsGetListError,
    getRequestList,
  } = useGet();

  const endpoint = getPenalizedTransacListEndpoint + "?status=" + apiFilter;

  console.log(endpoint);

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

  const handleGetSpecificPenalty = (transacId) => {
    setIsModalOpen(true);
    fetchSpecificResource(getSpecificPenalizedTransacEndpoint, transacId);
    console.log(specificResource);
  };

  if (isGetListLoading) {
    return <CircularProgress size="1.5rem" />;
  }

  if (!list || list?.length === 0) {
    return <EmptyItems />;
  }

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={list}
          columns={columns}
          pageSize={10}
          checkboxSelection
          // disableColumnMenu
          disableRowSelectionOnClick
          sx={{
            "& .MuiDataGrid-main": {
              minWidth: "100%",
              overflowX: "auto",
            },
            "& .nowrap-cell": {
              whiteSpace: "nowrap",
            },
          }}
        />
      </Box>

      {(specificResource || !isLoadingSpecificResource) && (
        <PenalizedTransactionModal
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

PenaltyTable.propTypes = {
  apiFilter: PropTypes.string,
};

export default PenaltyTable;
