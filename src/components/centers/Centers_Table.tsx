import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Typography,
} from "@mui/material";
import React from "react";

import { BsBan } from "react-icons/bs";

interface TableProps {
  search: string;
  filter: string;
}

const Centers_Table: React.FC<TableProps> = ({ search, filter }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const head = ["Name", "Type", "Location", "Verified", "Status", "Actions"];

  const TYPE_STYLES: Record<string, { bg: string; color: string }> = {
    "Informal Collection Center": {
      bg: "#FFF7ED",
      color: "#C2410C",
    },
    "Formal Collection": {
      bg: "#EFF6FF",
      color: "#1D4ED8",
    },
    "Recycling Center": {
      bg: "#ECFDF5",
      color: "#047857",
    },
  };

  const rows = [
    {
      name: "John Doe",
      type: "Informal Collection Center",
      verified: true,
      location: "22, ogundola street",
      status: "active",
    },
    {
      name: "Jane Doe",
      type: "Formal Collection Center",
      verified: false,
      location: "24, ogundola street",
      status: "active",
    },
    {
      name: "Job Doe",
      type: "Recycling Center",
      verified: true,
      location: "24, ogundola street",
      status: "suspended",
    },
  ];

  const filteredRows = rows.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.location.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || row.status === filter || row.type === filter;

    return matchesSearch && matchesFilter;
  });

  console.log(filter);

  const paginatedRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="mt-6">
      <TableContainer
        sx={{
          maxHeight: 500,
          overflowY: "auto",
          borderRadius: "18px",
          borderWidth: "0.5px",
          borderColor: "#1A1A1ACC",
        }}
      >
        <Table
          stickyHeader
          sx={{
            minWidth: 650,
            backgroundColor: "#FAFAFA",
          }}
        >
          <TableHead sx={{ backgroundColor: "#EAF5F2" }}>
            <TableRow>
              {head.map((item) => (
                <TableCell
                  key={item}
                  sx={{
                    py: 3,
                    px: 4,
                    backgroundColor: "#EAF5F2",
                  }}
                >
                  <Typography fontWeight={700} fontSize={18} color="#1A1A1AB2">
                    {item}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedRows.length ? (
              paginatedRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    fontWeight: 400,
                    fontSize: 18,
                    color: "#1A1A1A",
                    backgroundColor: "#FAFAFA",
                  }}
                >
                  <TableCell sx={{ px: 4 }}>{row.name}</TableCell>

                  <TableCell sx={{ px: 4 }}>
                    <Typography
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        px: 2,
                        py: 0.5,
                        borderRadius: "999px",
                        fontSize: 14,
                        fontWeight: 500,

                        backgroundColor: TYPE_STYLES[row.type]?.bg ?? "#F3F4F6",
                        color: TYPE_STYLES[row.type]?.color ?? "#374151",
                      }}
                    >
                      {row.type}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ px: 4 }}>
                    <Typography sx={{ textTransform: "capitalize" }}>
                      {row.location}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ px: 4 }}>
                    <Typography
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: 2,
                        py: 0.5,
                        borderRadius: "999px",
                        fontSize: 14,
                        fontWeight: 500,
                        textTransform: "capitalize",

                        backgroundColor: row.verified ? "#ECFDF5" : "#FEF2F2",
                        color: row.verified ? "#047857" : "#B91C1C",
                      }}
                    >
                      {row.verified ? "Verified" : "Unverified"}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ px: 4 }}>
                    <Typography
                      display="flex"
                      sx={{ textTransform: "capitalize" }}
                      color={row.status === "active" ? "#00C281" : "#E11D48"}
                    >
                      <span className="mr-3">
                        {row.status === "active" ? (
                          <img src="/active.png" alt="active" />
                        ) : (
                          <BsBan size={20} color="#E11D48" />
                        )}
                      </span>{" "}
                      {row.status}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ px: 4 }}>...</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Centers_Table;
