import { Typography } from "@mui/material";
import Pages from "../container/Pages";
import Broadcast from "../components/notifications/Broadcast";

const Notifications = () => {
  const notifications = [
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/new_user.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/unusual_activity.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/csv_upload.png",
      read: true,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/new_user.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/unusual_activity.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/csv_upload.png",
      read: true,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/new_user.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/unusual_activity.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/csv_upload.png",
      read: true,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/new_user.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/unusual_activity.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/csv_upload.png",
      read: true,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/new_user.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/unusual_activity.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/csv_upload.png",
      read: true,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/new_user.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/unusual_activity.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/csv_upload.png",
      read: true,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/new_user.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/unusual_activity.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/csv_upload.png",
      read: true,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/new_user.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/unusual_activity.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/csv_upload.png",
      read: true,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/new_user.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/unusual_activity.png",
      read: false,
    },
    {
      title: "Notification Title",
      time: "5 mins ago",
      icon: "/csv_upload.png",
      read: true,
    },
  ];

  return (
    <Pages
      page="Notifications"
      helperText="Stay updated with platform activities."
    >
      <div className="flex justify-end">
        <Broadcast />
      </div>

      <div className="flex flex-col gap-4 max-h-135 overflow-y-auto">
        {notifications.map((notif) => (
          <div className="flex items-center justify-between mx-5 px-9 py-4 border border-[#00C281] shadow-[#1A1A1A26] shadow-2xl bg-[#FAFAFA] rounded-xl hover:scale-101 transition-all duration-300 ease-in-out">
            <div className="flex gap-4.5 items-center">
              <img src={notif.icon} />
              <div>
                <Typography fontWeight={400} fontSize={18} color="#1A1A1A">
                  {notif.title}
                </Typography>
                <Typography fontWeight={400} fontSize={14} color="#1A1A1A99">
                  {notif.time}
                </Typography>
              </div>
            </div>

            <div>{notif.read ? "" : <img src="/read.png" />}</div>
          </div>
        ))}
      </div>
    </Pages>
  );
};

export default Notifications;
