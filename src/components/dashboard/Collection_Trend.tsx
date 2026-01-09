import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import type React from "react";
import api from "../../utils/axiosInstance";
import { useEffect, useState } from "react";

interface Graph {
  width: number;
  height: number;
}

const Collection_Trend: React.FC<Graph> = ({ width, height }) => {
  const [stats, setStats] = useState<number[]>(Array(12).fill(0));

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getStats = async () => {
    try {
      const response = await api.get("/api/admin/dashboard/graph");

      setStats(response.data.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className="bg-[#FAFAFA] rounded-[18px] border-[0.4px] border-[#1A1A1A80] p-6 mt-4 ml-4">
      <Typography fontSize={26} fontWeight={400} color="#1A1A1A">
        Monthly Collection Trend
      </Typography>

      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data: months,
          },
        ]}
        yAxis={[
          {
            valueFormatter: (value: number) => `${value / 1000}k`,
          },
        ]}
        series={[
          {
            curve: "monotoneX",
            data: stats,
            showMark: false,
            color: "#00C281",
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
        height={height}
        width={width}
      />
    </div>
  );
};

export default Collection_Trend;
