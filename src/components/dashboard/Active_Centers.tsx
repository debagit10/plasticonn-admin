import { Typography } from "@mui/material";
import { SlLocationPin } from "react-icons/sl";

interface Stats {
  value: number;
  growth: number | undefined;
}

const Active_Centers: React.FC<Stats> = ({ value, growth }) => {
  return (
    <div className="rounded-[18px] shadow-[#1A1A1A26] bg-[#FAFAFA] py-8 px-8.5 flex flex-col gap-2 w-75">
      <div className="flex justify-between">
        <Typography fontSize={20} fontWeight={300} color="#1A1A1A">
          Active Centers
        </Typography>
        <div className="bg-[#00C2811A] rounded-[18px] py-2 px-3">
          <SlLocationPin color="#00C281" size={24} />
        </div>
      </div>

      <div>
        <Typography fontSize={36} fontWeight={400} color="#1A1A1A">
          {value}
          {/* 342 */}
        </Typography>
      </div>

      <div>
        <Typography
          fontSize={15}
          fontWeight={300}
          color={
            growth && growth < 0
              ? "#E11D48" // red
              : growth && growth > 0
              ? "#00C281" // green
              : "#1A1A1A" // neutral
          }
        >
          {/* 5% vs last month */} {`${growth}% vs last month`}
        </Typography>
      </div>
    </div>
  );
};

export default Active_Centers;
