import Active_Centers from "../components/dashboard/Active_Centers";
import Growth_Rate from "../components/dashboard/Growth_Rate";
import Plastic_Collected from "../components/dashboard/Plastic_Collected";
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
      <div className="flex px-5 gap-6.5 mt-8">
        {stats.map((stat) => (
          <div>{stat}</div>
        ))}
      </div>
    </Pages>
  );
};

export default Dashboard;
