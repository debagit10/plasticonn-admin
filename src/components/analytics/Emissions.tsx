import { Typography } from "@mui/material";

const Emissions = ({ value }: { value: number | undefined }) => {
  return (
    <div className="rounded-[18px] shadow-[#1A1A1A26] bg-[#FAFAFA] py-8 px-8.5 flex flex-col gap-2 w-101.75">
      <Typography fontSize={20} fontWeight={300} color="#1A1A1A">
        CO₂ Emissions Reduced
      </Typography>

      <div>
        <Typography fontSize={36} fontWeight={400} color="#1A1A1A">
          {/*1,182 kg*/} {value}kg
        </Typography>
      </div>
    </div>
  );
};

export default Emissions;
