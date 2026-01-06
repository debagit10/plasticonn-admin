import {
  Button,
  Dialog,
  DialogContent,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Add_Center = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Button
        onClick={() => setOpen(true)}
        sx={{
          width: "190px",
          height: "48px",
          padding: "12px",
          borderRadius: "12px",
          backgroundColor: "#00C281",
          color: "white",
        }}
      >
        <span className="mr-2.5">
          <img src="/add.png" />
        </span>

        <Typography
          fontWeight={400}
          fontSize={16}
          sx={{ textTransform: "capitalize" }}
        >
          Add New Center
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
              Add New Center
            </Typography>

            <IoCloseOutline
              onClick={() => setOpen(false)}
              size={20}
              color="#1A1A1A"
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="flex gap-2.5">
            <div>
              <Typography fontWeight={400} fontSize={18} color="#1A1A1A">
                Center Name
              </Typography>
              <TextField
                //   value={search}
                //   onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g Green valley collection center"
                variant="outlined"
                size="small"
                sx={{
                  width: "265px",
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
                Type
              </Typography>

              <TextField
                select
                //   value={value}
                //   onChange={(e) => setValue(e.target.value)}
                placeholder="Select period"
                sx={{
                  width: "265px",
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
                <MenuItem value="Informal Collection Center">
                  Informal Collection Center
                </MenuItem>
                <MenuItem value="Formal Collection Center">
                  Formal Collection Center
                </MenuItem>
                <MenuItem value="Recycling Center">Recycling Center</MenuItem>
              </TextField>
            </div>
          </div>

          <div className="flex gap-2.5">
            <div>
              <Typography fontWeight={400} fontSize={18} color="#1A1A1A">
                Location
              </Typography>
              <TextField
                //   value={search}
                //   onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g Ikeja, Lagos"
                variant="outlined"
                size="small"
                sx={{
                  width: "265px",
                  // overall height
                  "& .MuiOutlinedInput-root": {
                    height: 40,
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
                Capacity
              </Typography>
              <TextField
                //   value={search}
                //   onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g 500 kg/day"
                variant="outlined"
                size="small"
                sx={{
                  width: "265px",
                  // overall height
                  "& .MuiOutlinedInput-root": {
                    height: 40,
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
          </div>

          <div className="flex gap-2.5">
            <div>
              <Typography fontWeight={400} fontSize={18} color="#1A1A1A">
                Contact Person
              </Typography>
              <TextField
                //   value={search}
                //   onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g Ikeja, Lagos"
                variant="outlined"
                size="small"
                sx={{
                  width: "265px",
                  // overall height
                  "& .MuiOutlinedInput-root": {
                    height: 40,
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
                Contact Phone
              </Typography>
              <TextField
                //   value={search}
                //   onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g 500 kg/day"
                variant="outlined"
                size="small"
                sx={{
                  width: "265px",
                  // overall height
                  "& .MuiOutlinedInput-root": {
                    height: 40,
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
          </div>

          <div className="flex gap-2.5">
            <div>
              <Typography fontWeight={400} fontSize={18} color="#1A1A1A">
                Contact Email
              </Typography>
              <TextField
                //   value={search}
                //   onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g Ikeja, Lagos"
                variant="outlined"
                size="small"
                sx={{
                  width: "265px",
                  // overall height
                  "& .MuiOutlinedInput-root": {
                    height: 40,
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
                Materials Accepted
              </Typography>
              <TextField
                //   value={search}
                //   onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g 500 kg/day"
                variant="outlined"
                size="small"
                sx={{
                  width: "265px",
                  // overall height
                  "& .MuiOutlinedInput-root": {
                    height: 40,
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
          </div>

          <div className="flex gap-4 mt-12">
            <Button
              sx={{
                width: "365px",
                height: "48px",
                padding: "12px",
                borderRadius: "12px",
                backgroundColor: "#00C281",
                color: "white",
              }}
            >
              <Typography
                fontWeight={400}
                fontSize={16}
                sx={{ textTransform: "capitalize" }}
              >
                Add Center
              </Typography>
            </Button>

            <Button
              onClick={() => setOpen(false)}
              variant="outlined"
              sx={{
                width: "365px",
                height: "48px",
                padding: "12px",
                borderRadius: "12px",
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

export default Add_Center;
