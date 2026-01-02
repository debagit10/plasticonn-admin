import Active_Centers from "../components/dashboard/Active_Centers";
import Collection_Trend from "../components/dashboard/Collection_Trend";
import Growth_Rate from "../components/dashboard/Growth_Rate";
import Plastic_Collected from "../components/dashboard/Plastic_Collected";
import Real_Time_Trends from "../components/dashboard/Real_Time_Trends";
import Total_Users from "../components/dashboard/Total_Users";
import Pages from "../container/Pages";

const Dashboard = () => {
  const stats = [
    <Total_Users />,
    <Plastic_Collected />,
    <Active_Centers />,
    <Growth_Rate />,
  ];
  return (
    <Pages
      page="Dashboard"
      helperText="Welcome back! Here's what's happening today."
    >
      <div className="flex px-5 gap-6.5 mt-6">
        {stats.map((stat) => (
          <div>{stat}</div>
        ))}
      </div>

      <div className="flex">
        <div className="w-210">
          <Collection_Trend />
        </div>

        <div className="mt-4 ml-10 w-98">
          <Real_Time_Trends />
        </div>
      </div>
    </Pages>
  );
};

export default Dashboard;
