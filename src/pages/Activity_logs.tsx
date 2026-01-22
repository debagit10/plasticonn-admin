import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Pages from "../container/Pages";
import Broadcast from "../components/notifications/Broadcast";
import DayAndTime from "../utils/DayAndTime";
import { useState, useEffect } from "react";
import api from "../utils/axiosInstance";

const Activity_logs = () => {
  const [logs, setLogs] = useState([
    { type: "", admin: "", action: "", createdAt: "", _id: "" },
  ]);

  const logsList = async () => {
    try {
      const response = await api.get("/api/admin/logs");

      console.log(response.data.data.logs);
      setLogs(response.data.data.logs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    logsList();
  }, []);

  const head = ["Type", "Admin", "Action", "Timestamp"];

  return (
    <Pages
      page="Activity Logs"
      helperText="Stay updated with platform activities."
    >
      <div className="flex justify-end">
        <Broadcast />
      </div>

      <div className="mx-6">
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
                    <Typography
                      fontWeight={700}
                      fontSize={18}
                      color="#1A1A1AB2"
                    >
                      {item}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {logs.map((log) => (
                <TableRow
                  key={log._id}
                  sx={{
                    fontWeight: 400,
                    fontSize: 18,
                    color: "#1A1A1A",
                    backgroundColor: "#FAFAFA",
                  }}
                >
                  <TableCell sx={{ px: 4 }}>
                    <Typography fontSize={16} fontWeight={400} color="#1A1A1A">
                      {log.type}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ px: 4 }}>
                    <Typography fontSize={16} fontWeight={400} color="#1A1A1A">
                      {log.admin}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ px: 4 }}>
                    <Typography fontSize={16} fontWeight={400} color="#1A1A1A">
                      {log.action}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ px: 4 }}>
                    <Typography fontSize={16} fontWeight={400} color="#1A1A1A">
                      <DayAndTime date={log.createdAt} />
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Pages>
  );
};

export default Activity_logs;
