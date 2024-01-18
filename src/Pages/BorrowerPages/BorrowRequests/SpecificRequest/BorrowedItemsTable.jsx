import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import PropTypes from "prop-types";
import convertDateForHumanConsumption from "../../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import { findBorrowedItemStatus } from "../../../../Utils/HelperFunctions/ConstantFunctions/BorrowedItemStatusConstantHelper";

function BorrowedItemsTable({ borrowedItems }) {
  const headers = ["Item", "Quantity", "Start Date", "End Date", "Status"];
  return (
    <div style={{ overflowX: "auto" }}>
      <Table sx={{ minWidth: "400px" }} aria-label="borrowed items table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "0.875rem",
                    whiteSpace: "nowrap",
                    fontWeight: "700"
                  }}
                >
                  {header}
                </p>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {borrowedItems.map((item) => (
            <TableRow
              key={item?.model_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "0.875rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item?.model_name}
                </p>
              </TableCell>
              <TableCell>
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "0.875rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item?.quantity}
                </p>
              </TableCell>
              <TableCell>
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "0.875rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {convertDateForHumanConsumption(item?.start_date)}
                </p>
              </TableCell>
              <TableCell>
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "0.875rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {convertDateForHumanConsumption(item?.due_date)}
                </p>
              </TableCell>
              <TableCell>
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: "0.875rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {findBorrowedItemStatus(item?.borrowed_item_status).status}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
BorrowedItemsTable.propTypes = {
  borrowedItems: PropTypes.array.isRequired,
};
export default BorrowedItemsTable;
