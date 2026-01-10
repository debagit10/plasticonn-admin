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
import BanUser from "../modals/BanUser";
import DeleteUser from "../modals/DeleteUser";

interface Centers {
  _id: string;
  centerId: string;
  address: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  status: string;
  capacity: string;
  type: string;
  materialsAccepted: [string];
  contactEmail: string;
  contactPerson: string;
  contactPhone: string;
  gps: { coordinates: GPS };
  operatingHours: string;
  verified: boolean;
}

interface GPS {
  lon: number;
  lat: number;
}

interface TableProps {
  search: string;
  filter: string;
  centers: Centers[];
  refresh: () => void;
}

const Centers_Table: React.FC<TableProps> = ({
  search,
  filter,
  centers,
  refresh,
}) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const head = ["Name", "Type", "Address", "Verified", "Status", "Actions"];

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

  const filteredRows = centers?.filter((center) => {
    const matchesSearch =
      center.name.toLowerCase().includes(search.toLowerCase()) ||
      center.address.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || center.status === filter || center.type === filter;

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
          maxHeight: 450,
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
                  <TableCell sx={{ px: 4 }}>
                    <Typography>
                      {row.name.charAt(0).toUpperCase() +
                        row.name.slice(1).toLowerCase()}
                    </Typography>
                  </TableCell>

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
                    <Typography>
                      {row.address.charAt(0).toUpperCase() +
                        row.address.slice(1).toLowerCase()}
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

                  <TableCell sx={{ px: 4 }}>
                    <div className="flex gap-6">
                      <BanUser
                        action={row.status === "active" ? "Ban" : "Unban"}
                        user="center"
                        _id={row._id}
                        refresh={refresh}
                      />
                      <DeleteUser
                        user="center"
                        _id={row._id}
                        refresh={refresh}
                      />
                    </div>
                  </TableCell>
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

export default Centers_Table;
