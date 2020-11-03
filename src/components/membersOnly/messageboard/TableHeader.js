import React from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
} from "@material-ui/core";

const TableHeader = (props) => {
  const {
    // classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const cellHeaders = [
    { id: "name", numeric: false, disablePadding: true, label: "Name" },
    { id: "subject", numeric: false, disablePadding: true, label: "Subject" },
    { id: "email", numeric: false, disablePadding: true, label: "Email" },
    { id: "date_added", numeric: true, disablePadding: true, label: "Date" },
    // { id: "message", numeric: false, disablePadding: true, label: "Message" },
  ];

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {cellHeaders.map((cell) => (
          <TableCell
            key={cell.id}
            align={cell.numeric ? "right" : "left"}
            padding={cell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === cell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === cell.id}
              direction={orderBy === cell.id ? order : "asc"}
              onClick={createSortHandler(cell.id)}
            >
              {cell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
