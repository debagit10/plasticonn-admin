import { Typography } from "@mui/material";

const Real_Time_Trends = () => {
  const alerts = [
    { message: "New center registration pending approval", time: "5 mins ago" },
    { message: "Unusual activity detected in User #1234", time: "23 mins ago" },
    { message: "CSV upload completed successfully", time: "1 hour ago" },
  ];

  return (
    <div className="p-6 rounded-[18px] border-[0.4px] border-[#1A1A1A80] bg-[#FAFAFA]">
      <div className="flex gap-3 items-center">
        <img src="/alert.png" className="w-6 h-6" />
        <Typography color="#1A1A1A" fontSize={26} fontWeight={400}>
          Real Time Alerts
        </Typography>
      </div>

      <div className="flex flex-col gap-5 mt-6 h-75">
        {alerts.map((alert) => (
          <div className="flex flex-col gap-.5">
            <Typography fontSize={18} fontWeight={400} color="#1A1A1AB2">
              {alert.message}
            </Typography>
            <Typography fontSize={14} fontWeight={400} color="#1A1A1AB2">
              {alert.time}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Real_Time_Trends;
