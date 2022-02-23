import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "../../../button/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  {
    id: "locationId",
    label: "ID",
    minWidth: 50,
  },
  {
    id: "locationName",
    label: "Location Name",
    minWidth: 170,
  },
  {
    id: "district",
    label: "District",
    minWidth: 100,
  },
  {
    id: "town",
    label: "Town",
    minWidth: 100,
  },
  {
    id: "category",
    label: "Category",
    minWidth: 100,
  },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
  },
];

const LocationComponent = () => {
  const url = "https://tourist-guide-app-backend.herokuapp.com/api/location";
  const [locations, setLocations] = useState([]);

  const rows = locations;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      setLocations(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Button
        className="btns"
        buttonStyle="btn--black"
        buttonSize="btn--large"
        path="/dashboard/location/add-new-location"
      >
        Add New Location
      </Button>

      <Paper sx={{ width: "97%", overflow: "hidden", margin: "0 auto" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.locationId}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default LocationComponent;
