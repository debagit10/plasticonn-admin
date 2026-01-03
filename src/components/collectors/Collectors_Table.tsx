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

const Collectors_Table: React.FC<TableProps> = ({ search, filter }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const head = ["Name", "Email", "Status", "Joined", "Actions"];

  const rows = [
    {
      name: "John Doe",
      email: "john@email.com",
      status: "active",
      createdAt: "2024-01-10",
    },
    {
      name: "Jane Smith",
      email: "jane1@email.com",
      status: "suspended",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane2@email.com",
      status: "active",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane@4email.com",
      status: "suspended",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane@e5mail.com",
      status: "active",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane@em6ail.com",
      status: "suspended",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane@ema7il.com",
      status: "active",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane@emai8l.com",
      status: "suspended",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane@email9.com",
      status: "active",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane10@email.com",
      status: "suspended",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane11@email.com",
      status: "active",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane12@email.com",
      status: "suspended",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane13@email.com",
      status: "active",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane15@email.com",
      status: "suspended",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane14@email.com",
      status: "active",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane18@email.com",
      status: "suspended",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane16@email.com",
      status: "active",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane17@email.com",
      status: "suspended",
      createdAt: "2024-01-12",
    },
    {
      name: "Jane Smith",
      email: "jane19@email.com",
      status: "active",
      createdAt: "2024-01-12",
    },
  ];

  const filteredRows = rows.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "all" || row.status === filter;

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
                  key={row.email}
                  sx={{
                    fontWeight: 400,
                    fontSize: 18,
                    color: "#1A1A1A",
                    backgroundColor: "#FAFAFA",
                  }}
                >
                  <TableCell sx={{ px: 4 }}>{row.name}</TableCell>
                  <TableCell sx={{ px: 4 }}>{row.email}</TableCell>
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
                  <TableCell sx={{ px: 4 }}>{row.createdAt}</TableCell>
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

export default Collectors_Table;
