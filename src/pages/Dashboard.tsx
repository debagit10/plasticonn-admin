import { useEffect, useState } from "react";
import Active_Centers from "../components/dashboard/Active_Centers";
import Collection_Trend from "../components/dashboard/Collection_Trend";
import Growth_Rate from "../components/dashboard/Growth_Rate";
import Plastic_Collected from "../components/dashboard/Plastic_Collected";
import Real_Time_Trends from "../components/dashboard/Real_Time_Trends";
import Total_Users from "../components/dashboard/Total_Users";
import Pages from "../container/Pages";
import api from "../utils/axiosInstance";

interface Stats {
  users: number;
  centers: number;
  dropOffs: number;
  overall: number;
  growth: Growth;
}

interface Growth {
  users: number;
  centers: number;
  dropOffs: number;
  overall: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({
    users: 0,
    centers: 0,
    dropOffs: 0,
    overall: 0,
    growth: {
      users: 0,
      centers: 0,
      dropOffs: 0,
      overall: 0,
    },
  });

  const getStats = async () => {
    try {
      const response = await api.get("/api/admin/dashboard/stats");

      setStats(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  const components = [
    <Total_Users value={stats?.users} growth={stats.growth.users} />,
    <Plastic_Collected
      width={300}
      value={stats?.dropOffs}
      growth={stats.growth.dropOffs}
    />,
    <Active_Centers value={stats?.centers} growth={stats.growth.centers} />,
    <Growth_Rate growth={stats.growth.overall} value={stats.overall} />,
  ];

  return (
    <Pages
      page="Dashboard"
      helperText="Welcome back! Here's what's happening today."
    >
      <div className="flex px-5 gap-6.5 mt-6">
        {components.map((stat) => (
          <div>{stat}</div>
        ))}
      </div>

      <div className="flex">
        <div className="w-210">
          <Collection_Trend width={728} height={325} />
        </div>

        <div className="mt-4 ml-10 w-98">
          <Real_Time_Trends />
        </div>
      </div>
    </Pages>
  );
};

export default Dashboard;
