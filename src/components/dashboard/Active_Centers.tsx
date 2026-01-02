import { Typography } from "@mui/material";
import { SlLocationPin } from "react-icons/sl";

const Active_Centers = () => {
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
          342
        </Typography>
      </div>

      <div>
        <Typography fontSize={15} fontWeight={300} color="#00C281">
          5% vs last month
        </Typography>
      </div>
    </div>
  );
};

export default Active_Centers;
