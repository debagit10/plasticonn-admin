import { Button, Typography } from "@mui/material";
import Center_Efficiency from "../components/analytics/Center_Efficiency";
import Emissions from "../components/analytics/Emissions";
import Collection_Trend from "../components/dashboard/Collection_Trend";
import Plastic_Collected from "../components/dashboard/Plastic_Collected";
import Pages from "../container/Pages";
import { useEffect, useState } from "react";
import api from "../utils/axiosInstance";
import { DownloadModal } from "../components/modals/DownloadModal";

interface Stats {
  co2Saved: number;
  efficiency: number;
  totalPlastic: number;
}

const Analytics = () => {
  const [stats, setStats] = useState<Stats>();
  const [open, setOpen] = useState(false);

  const getStats = async () => {
    try {
      const response = await api.get("/api/admin/dashboard/analytics");

      console.log(response.data.data);
      setStats(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  const components = [
    <Plastic_Collected
      width={407}
      value={stats?.totalPlastic}
      showgrowth={false}
    />,
    <Center_Efficiency value={stats?.efficiency} />,
    <Emissions value={stats?.co2Saved} />,
  ];

  return (
    <Pages
      page="Data & Analytics"
      helperText="Track platform performance and environmental impact."
    >
      <div className="flex justify-end mr-5">
        <Button
          onClick={() => setOpen(true)}
          variant="outlined"
          sx={{
            width: "190px",
            height: "48px",
            padding: "12px",
            borderRadius: "12px",
            borderColor: "#1A1A1A80",
            color: "#1A1A1A",
          }}
        >
          <span className="mr-2.5">
            <img src="/export.png" />
          </span>

          <Typography
            fontWeight={400}
            fontSize={16}
            sx={{ textTransform: "capitalize" }}
          >
            Download Report
          </Typography>
        </Button>

        <DownloadModal open={open} onClose={() => setOpen(false)} />
      </div>

      <div className="flex px-5 gap-6.5 mt-6">
        {components.map((stat) => (
          <div>{stat}</div>
        ))}
      </div>

      <div className="mr-5">
        <Collection_Trend width={1171} height={280} />
      </div>
    </Pages>
  );
};

export default Analytics;
