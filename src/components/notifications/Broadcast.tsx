import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  TextField,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

const Broadcast = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mr-5 mb-6">
      <Button
        onClick={() => setOpen(true)}
        sx={{
          width: "190px",
          height: "48px",
          paddingY: "8px",
          //paddingX: "12px",
          borderRadius: "12px",
          backgroundColor: "#00C281",
          color: "white",
        }}
      >
        <span className="mr-2.5">
          <IoNotificationsOutline size={20} />
        </span>

        <Typography
          fontWeight={400}
          fontSize={16}
          sx={{ textTransform: "capitalize" }}
        >
          Broadcast Message
        </Typography>
      </Button>

      <Dialog open={open}>
        <DialogContent
          sx={{
            width: "600px",
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div className="flex justify-between items-center">
            <Typography fontWeight={400} fontSize={26} color="#1A1A1A">
              Broadcast Message
            </Typography>

            <IoCloseOutline
              onClick={() => setOpen(false)}
              size={20}
              color="#1A1A1A"
              style={{ cursor: "pointer" }}
            />
          </div>

          <div>
            <Typography fontWeight={400} fontSize={18} color="#1A1A1A">
              Recipients
            </Typography>
            <TextField
              //   value={search}
              //   onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g Green valley collection center"
              variant="outlined"
              size="small"
              fullWidth
              select
              sx={{
                // overall height
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#FAFAFA",

                  // default border
                  "& fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },

                  // focused
                  "&.Mui-focused fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },
                },

                // input text
                "& input": {
                  padding: "10px 12px",
                  fontSize: 14,
                },
              }}
            >
              <MenuItem value="All Users">All Users</MenuItem>
              <MenuItem value="Collectors">Collectors</MenuItem>
              <MenuItem value="Centers">Centers</MenuItem>
            </TextField>
          </div>

          <div>
            <Typography fontWeight={400} fontSize={18} color="#1A1A1A">
              Subject
            </Typography>
            <TextField
              //   value={search}
              //   onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g Important Platform Update"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                // overall height
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#FAFAFA",

                  // default border
                  "& fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },

                  // focused
                  "&.Mui-focused fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },
                },

                // input text
                "& input": {
                  padding: "10px 12px",
                  fontSize: 14,
                },
              }}
            />
          </div>

          <div>
            <Typography fontWeight={400} fontSize={18} color="#1A1A1A">
              Message
            </Typography>
            <TextField
              //rows={}
              //   value={search}
              //   onChange={(e) => setSearch(e.target.value)}
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                // overall height
                "& .MuiOutlinedInput-root": {
                  height: "186px",
                  borderRadius: "12px",
                  backgroundColor: "#FAFAFA",

                  // default border
                  "& fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },

                  // focused
                  "&.Mui-focused fieldset": {
                    borderColor: "#1A1A1A",
                    borderWidth: "0.2px",
                  },
                },

                // input text
                "& input": {
                  padding: "10px 12px",
                  fontSize: 14,
                },
              }}
            />
          </div>

          <div className=" bg-[#355AD61A] p-3 rounded-xl border-0.5 border-[#355AD680] mt-2">
            <Typography
              fontWeight={400}
              fontSize={16}
              color="#355AD6"
              fontStyle="italic"
            >
              This message will be sent to all selected recipients via email and
              in-app notification
            </Typography>
          </div>

          <div className="flex gap-4 mt-12">
            <Button
              sx={{
                width: "365px",
                height: "48px",
                padding: "12px",
                borderRadius: 12,
                backgroundColor: "#00C281",
                color: "white",
              }}
            >
              <Typography
                fontWeight={400}
                fontSize={16}
                sx={{ textTransform: "capitalize" }}
              >
                Send Broadcast
              </Typography>
            </Button>

            <Button
              onClick={() => setOpen(false)}
              variant="outlined"
              sx={{
                width: "365px",
                height: "48px",
                padding: "12px",
                borderRadius: 12,
                borderColor: "#1A1A1A80",
                color: "#1A1A1A",
              }}
            >
              <Typography
                fontWeight={400}
                fontSize={16}
                sx={{ textTransform: "capitalize" }}
              >
                Cancel
              </Typography>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Broadcast;
