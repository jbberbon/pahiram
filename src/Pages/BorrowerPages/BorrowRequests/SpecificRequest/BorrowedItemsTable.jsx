import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import convertDateForHumanConsumption from "../../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import {
  findBorrowedItemStatus,
  getCancelledStatus,
} from "../../../../Utils/HelperFunctions/ConstantFunctions/BorrowedItemStatusConstantHelper";
import PropTypes from "prop-types";
import ColorVariables from "../../../../Utils/Theming/ColorVariables";

const BorrowedItemsTable = ({ borrowedItems, transacStatus }) => {
  const headers = ["Item", "Qty", "Start Date", "End Date", "Status"];
  const cancelledStatus = getCancelledStatus();
  const { neutralMain } = ColorVariables();

  const tableCellStyle = {
    padding: "12px 12px 12px 0",
    margin: 0,
    fontSize: "0.875rem",
    whiteSpace: "nowrap",
    color: neutralMain,
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <Table sx={{ minWidth: "400px" }} aria-label="borrowed items table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                key={header}
                style={{
                  padding: `0 ${
                    index === headers.length - 1 ? "0" : "12px"
                  } 12px 0`,
                  margin: 0,
                  fontSize: "0.875rem",
                  whiteSpace: "nowrap",
                  fontWeight: "700",
                  color: neutralMain,
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {borrowedItems
            // Do not display the cancelled items in the tb if TRANSACTION IS NON-CANCELLED
            .filter((item) =>
              transacStatus === cancelledStatus
                ? true
                : item?.borrowed_item_status !== cancelledStatus
            )
            .map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row" style={tableCellStyle}>
                  {/* {item?.item?.model_name} */}
                  {item?.model_name}
                </TableCell>

                <TableCell component="th" scope="row" style={tableCellStyle}>
                  {item?.quantity}
                </TableCell>

                <TableCell component="th" scope="row" style={tableCellStyle}>
                  {convertDateForHumanConsumption(item?.start_date)}
                </TableCell>

                <TableCell component="th" scope="row" style={tableCellStyle}>
                  {convertDateForHumanConsumption(item?.due_date)}
                </TableCell>

                <TableCell component="th" scope="row" style={tableCellStyle}>
                  {
                    <Chip
                      label={
                        findBorrowedItemStatus(item?.borrowed_item_status)
                          ?.status
                      }
                      size="small"
                      variant="outlined"
                      color="primary"
                    />
                  }
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};
BorrowedItemsTable.propTypes = {
  borrowedItems: PropTypes.array.isRequired,
  transacStatus: PropTypes.string,
};
export default BorrowedItemsTable;
