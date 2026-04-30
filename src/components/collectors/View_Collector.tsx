import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import { getInitials } from "../../utils/getInitials";

interface Collectors {
  _id: string;
  address: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  status: string;
  image?: {
    url: string;
    public_id: string;
  };
}

const View_Collector = ({
  collector,
  view,
  setView,
}: {
  collector: Collectors;
  view: boolean;
  setView: (value: boolean) => void;
}) => {
  return (
    <Dialog open={view} onClose={() => setView(false)} maxWidth="sm" fullWidth>
      <DialogContent
        sx={{
          p: { xs: 3, sm: 4 },
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {/* HEADER */}
        <Typography
          fontSize={{ xs: 20, sm: 24 }}
          fontWeight={400}
          color="#1A1A1A"
          textAlign="center"
        >
          Collector Details
        </Typography>

        <Divider />

        {/* PROFILE */}
        <div className="flex flex-col items-center gap-3">
          <Avatar
            src={collector?.image?.url || undefined}
            sx={{
              width: { xs: 80, sm: 100 },
              height: { xs: 80, sm: 100 },
              background: "linear-gradient(to bottom, #005C3D, #00C281)",
            }}
          >
            {!collector?.image?.url &&
              getInitials(`${collector?.firstName} ${collector?.lastName}`)}
          </Avatar>

          <Typography
            fontSize={{ xs: 16, sm: 18 }}
            fontWeight={500}
            color="#1A1A1A"
          >
            {collector?.firstName} {collector?.lastName}
          </Typography>

          <Typography
            fontSize={13}
            color={collector.status === "active" ? "#00C281" : "#E11D48"}
            sx={{ textTransform: "capitalize" }}
          >
            {collector.status}
          </Typography>
        </div>

        {/* DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Email", value: collector.email },
            { label: "Phone", value: collector.phone },
            { label: "Address", value: collector.address },
            { label: "Joined", value: collector.createdAt },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <Typography fontSize={13} color="#1A1A1A80">
                {item.label}
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 15 }}
                color="#1A1A1A"
                className="wrap-break-word"
              >
                {item.value || "-"}
              </Typography>
            </div>
          ))}
        </div>

        {/* ACTION */}
        <div className="mt-4">
          <Button
            fullWidth
            onClick={() => setView(false)}
            sx={{
              height: "48px",
              borderRadius: "12px",
              border: "1px solid #1A1A1A30",
              color: "#1A1A1A",
            }}
          >
            <Typography fontSize={16} sx={{ textTransform: "capitalize" }}>
              Close
            </Typography>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default View_Collector;
