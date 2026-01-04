import React from "react";
import Sidebar from "../components/Sidebar";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, Divider } from "@mui/material";
import { IoNotificationsOutline } from "react-icons/io5";

interface PagesProps {
  children?: React.ReactNode;
  page?: string;
  helperText?: string;
}

const Pages: React.FC<PagesProps> = ({ children, page, helperText }) => {
  return (
    <div className="flex h-screen">
      <div className="w-80">
        <Sidebar />
      </div>

      <div className="bg-linear-to-br from-[#DFFFF6] to-[#FAFAFA] w-full">
        <div className="px-5 py-4 flex justify-between ">
          <div>
            <Typography color="#1A1A1A" fontSize={24} fontWeight={400}>
              {page}
            </Typography>
            <Typography color="#1A1A1A99" fontSize={24} fontWeight={400}>
              {helperText}
            </Typography>
          </div>

          <div className="flex gap-4 items-center">
            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#00C281",
                  color: "white",
                },
              }}
            >
              <IoNotificationsOutline size={32} color="#1A1A1AB2" />
            </Badge>
            <Divider orientation="vertical" />
            <div className="flex gap-3">
              <div className="">
                <Typography color="#1A1A1A" fontSize={16} fontWeight={400}>
                  Admin User
                </Typography>
                <Typography color="#1A1A1AB2" fontSize={12} fontWeight={400}>
                  Super Admin
                </Typography>
              </div>
              <Avatar />
            </div>
          </div>
        </div>

        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Pages;
