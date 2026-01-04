import { Typography } from "@mui/material";
import { FaBottleWater } from "react-icons/fa6";

interface Prop {
  width: number;
}

const Plastic_Collected: React.FC<Prop> = ({ width }) => {
  console.log(width);
  return (
    <div
      style={{ width: `${width}px` }}
      className={`rounded-[18px] shadow-[#1A1A1A26] bg-[#FAFAFA] py-8 px-8.5 flex flex-col gap-2`}
    >
      <div className="flex justify-between">
        <Typography fontSize={20} fontWeight={300} color="#1A1A1A">
          Plastics Collected
        </Typography>
        <div className="bg-[#00C2811A] rounded-[18px] py-2 px-3">
          <FaBottleWater color="#00C281" size={24} />
        </div>
      </div>

      <div>
        <Typography fontSize={36} fontWeight={400} color="#1A1A1A">
          248.5 tons
        </Typography>
      </div>

      <div>
        <Typography fontSize={15} fontWeight={300} color="#00C281">
          8% vs last month
        </Typography>
      </div>
    </div>
  );
};

export default Plastic_Collected;
