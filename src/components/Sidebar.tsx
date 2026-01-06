import { Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { LuChartSpline } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsersRound } from "react-icons/lu";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const Sidebar = () => {
  const sideMenuList = [
    { icon: <LuLayoutDashboard />, name: "Dashboard", link: "/dashboard" },
    { icon: <LuUsersRound />, name: "Collectors", link: "/collectors" },
    { icon: <SlLocationPin />, name: "Centers", link: "/centers" },
    { icon: <LuChartSpline />, name: "Data & Analytics", link: "/analytics" },
    {
      icon: <IoNotificationsOutline />,
      name: "Notifications",
      link: "/notifications",
    },
    { icon: <MdOutlineAdminPanelSettings />, name: "Admins", link: "/admins" },
    { icon: <IoSettingsOutline />, name: "Settings", link: "/settings" },
  ];

  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <div className="border-r-[0.5px] border-r-[#1A1A1A80] h-full">
      <div className="flex gap-2.5 items-center p-5">
        <img src="/logo.png" width={56} height={56} />
        <Typography fontSize={36} fontWeight={400} color="#043B24">
          Plasticonn
        </Typography>
      </div>

      <div className="mt-8">
        {sideMenuList.map((menu) => {
          const isActive = location == menu.link;

          return (
            <div
              onClick={() => navigate(menu.link)}
              className={`w-50 rounded-xl h-11 ml-10 pl-3 mb-3 cursor-pointer flex items-center gap-3.5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#00C2811A] ${
                isActive ? "bg-[#00C2811A] scale-105 shadow-md" : ""
              }`}
            >
              <div
                className={`h-4.5 w-4  transition-colors duration-300 ease-in-out ${
                  isActive ? "text-[#00C281]" : "text-[#1A1A1A]"
                } group-hover:text-[#00C281] `}
              >
                {menu.icon}
              </div>
              <Typography
                className="transition-colors duration-300 ease-in-out"
                color={isActive ? "#00C281" : "#1A1A1A"}
                fontSize={18}
                fontWeight={400}
              >
                {menu.name}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
