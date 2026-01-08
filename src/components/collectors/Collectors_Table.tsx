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
import React, { useEffect, useState } from "react";
import { BsBan } from "react-icons/bs";

import api from "../../utils/axiosInstance";
import DayAndTime from "../../utils/DayAndTime";

interface Collectors {
  _id: string;
  address: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  status: string;
}

interface TableProps {
  search: string;
  filter: string;
}

const Collectors_Table: React.FC<TableProps> = ({ search, filter }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const [collectors, setCollectors] = useState<Collectors[]>();

  const collectorsList = async () => {
    try {
      const response = await api.get("/api/admin/collector-mgt/list");

      setCollectors(response.data.data.collectors);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    collectorsList();
  }, []);

  const head = ["Name", "Email", "Status", "Joined", "Actions"];

  const filteredRows = collectors?.filter((collector) => {
    const matchesSearch =
      collector.name.toLowerCase().includes(search.toLowerCase()) ||
      collector.email.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "all" || collector.status === filter;

    return matchesSearch && matchesFilter;
  });

  const paginatedRows = filteredRows?.slice(
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
            {paginatedRows?.length ? (
              paginatedRows.map((row) => (
                <TableRow
                  key={row._id}
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
                  <TableCell sx={{ px: 4 }}>
                    <DayAndTime date={row.createdAt} />
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
        count={filteredRows?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Collectors_Table;
