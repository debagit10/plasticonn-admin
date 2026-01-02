import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const Collection_Trend = () => {
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
            data: [2000, 5500, 2000, 8500, 1500, 5000],
            showMark: false,
            color: "#00C281",
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
        height={328}
        width={736}
      />
    </div>
  );
};

export default Collection_Trend;
