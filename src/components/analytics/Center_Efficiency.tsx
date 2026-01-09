import { Typography } from "@mui/material";

const Center_Efficiency = ({ value }: { value: number | undefined }) => {
  return (
    <div className="rounded-[18px] shadow-[#1A1A1A26] bg-[#FAFAFA] py-8 px-8.5 flex flex-col gap-2 w-101.75">
      <Typography fontSize={20} fontWeight={300} color="#1A1A1A">
        Center Efficiency
      </Typography>

      <div>
        <Typography fontSize={36} fontWeight={400} color="#1A1A1A">
          {/* 85.5% */}
          {value}%
        </Typography>
      </div>
    </div>
  );
};

export default Center_Efficiency;
