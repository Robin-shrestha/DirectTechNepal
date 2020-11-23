import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TablePagination,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMessages,
  deleteMultipleMessages,
} from "../../../actions/messageActions";

import * as routes from "../../../constants/routes";

import MessageReadIcon from "@material-ui/icons/CheckCircle";

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(9, 6, 6, 6),
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "orange",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(9, 0, 0, 0),
    },
  },
  paper: {
    // width: "100%",
    // marginBottom: theme.spacing(2),
    // padding: theme.spacing(3),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const MessageBoard = () => {
  const classes = styles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("date_added");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  const handleMultipleDelete = () => {
    dispatch(deleteMultipleMessages(selected));
    setSelected([]);
  };

  const handleRequestSort = (e, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = messages.map((item) => item.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, messages.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar
          numSelected={selected.length}
          deleteHandler={handleMultipleDelete}
        />
        <TableContainer>
          <Table className={classes.table} size="medium">
            <TableHeader
              onSelectAllClick={handleSelectAllClick}
              order={order}
              orderBy={orderBy}
              numSelected={selected.length}
              rowCount={messages.length}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(messages, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          onClick={(e) => {
                            handleClick(e, row.id);
                          }}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        <Link
                          to={{
                            pathname: routes.readMessage,
                            state: { message: row },
                          }}
                          component={RouterLink}
                        >
                          {row.name}
                        </Link>
                      </TableCell>
                      <TableCell align="left">{row.subject}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">
                        {row.checked ? (
                          <MessageReadIcon style={{ color: "green" }} />
                        ) : null}
                      </TableCell>

                      <TableCell align="left">{row.date_added}</TableCell>
                      {/* <TableCell align="right">{row.message}</TableCell> */}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={messages.length}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
        />
      </Paper>
      <div style={{ flexGrow: 1 }} />
    </div>
  );
};

export default MessageBoard;
