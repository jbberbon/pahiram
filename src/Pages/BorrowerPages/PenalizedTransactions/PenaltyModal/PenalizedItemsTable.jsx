import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import ColorVariables from "../../../../Utils/Theming/ColorVariables";
import PropTypes from "prop-types";
import convertDateForHumanConsumption from "../../../../Utils/HelperFunctions/DateFunction/convertDateForHumanConsumption";
import { findBorrowedItemStatus } from "../../../../Utils/HelperFunctions/ConstantFunctions/BorrowedItemStatusConstantHelper";
import { formatMoney } from "../../../../Utils/HelperFunctions/formatMoney";

const headers = [
  "ID",
  "Item",
  "Penalty",
  "Start Date",
  "End Date",
  "Date Returned",
  "Status",
  // "Penalty",
  //   "Released",
];

const tableCellStyle = {
  padding: "12px 12px 12px 0",
  margin: 0,
  fontSize: "0.875rem",
  whiteSpace: "nowrap",
  //   color: neutralMain,
};

const PenalizedItemsTable = ({ items }) => {
  const { neutralMain } = ColorVariables();
  return (
    <div style={{ overflowX: "auto" }}>
      <Table sx={{ minWidth: "400px" }} aria-label="borrowed items table">
        <TableHead>
          <TableRow>
            {headers?.map((header, index) => (
              <TableCell
                key={header}
                style={{
                  padding: `0 ${
                    index === headers?.length - 1 ? "0" : "12px"
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
          {items?.map((item, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ ...tableCellStyle, color: neutralMain }}
              >
                {item?.apc_item_id}
              </TableCell>

              <TableCell component="th" scope="row" style={tableCellStyle}>
                {item?.model_name}
              </TableCell>

              <TableCell component="th" scope="row" style={tableCellStyle}>
                {formatMoney(item?.penalty)}
              </TableCell>

              <TableCell component="th" scope="row" style={tableCellStyle}>
                {convertDateForHumanConsumption(item?.start_date)}
              </TableCell>

              <TableCell component="th" scope="row" style={tableCellStyle}>
                {convertDateForHumanConsumption(item?.due_date)}
              </TableCell>

              <TableCell component="th" scope="row" style={tableCellStyle}>
                {convertDateForHumanConsumption(item?.date_returned)}
              </TableCell>

              <TableCell component="th" scope="row" style={tableCellStyle}>
                {
                  <Chip
                    label={findBorrowedItemStatus(item?.status)?.status}
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

PenalizedItemsTable.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PenalizedItemsTable;
