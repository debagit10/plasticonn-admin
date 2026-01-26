import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, Divider } from "@mui/material";
import { IoNotificationsOutline } from "react-icons/io5";
import { useAuthStore } from "../utils/useAuthStore";
import { useNavigate } from "react-router-dom";

interface PagesProps {
  children?: React.ReactNode;
  page?: string;
  helperText?: string;
}

const Pages: React.FC<PagesProps> = ({ children, page, helperText }) => {
  const { user, clearUser } = useAuthStore.getState();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onLogout = () => {
    navigate("/");
    clearUser();
  };

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

            <div className="relative flex gap-3 items-center" ref={menuRef}>
              <div>
                <Typography color="#1A1A1A" fontSize={16} fontWeight={400}>
                  {user?.name}
                </Typography>
                <Typography color="#1A1A1AB2" fontSize={12} fontWeight={400}>
                  {user?.role || "admin"}
                </Typography>
              </div>

              {/* Avatar */}
              <button onClick={() => setOpen((prev) => !prev)}>
                <Avatar className="cursor-pointer" />
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 top-12 w-40 bg-white rounded-lg shadow-lg border z-10">
                  <button
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setOpen(false);
                      navigate("/settings");
                    }}
                  >
                    Settings
                  </button>

                  <button
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Pages;
