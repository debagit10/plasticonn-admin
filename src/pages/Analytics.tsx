import { Button, Typography } from "@mui/material";
import Center_Efficiency from "../components/analytics/Center_Efficiency";
import Emissions from "../components/analytics/Emissions";
import Collection_Trend from "../components/dashboard/Collection_Trend";
import Plastic_Collected from "../components/dashboard/Plastic_Collected";
import Pages from "../container/Pages";

const Analytics = () => {
  const stats = [
    <Plastic_Collected width={407} />,
    <Center_Efficiency />,
    <Emissions />,
  ];

  return (
    <Pages
      page="Data & Analytics"
      helperText="Track platform performance and environmental impact."
    >
      <div className="flex justify-end mr-5">
        <Button
          //onClick={() => setOpen(true)}
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
      </div>

      <div className="flex px-5 gap-6.5 mt-6">
        {stats.map((stat) => (
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
