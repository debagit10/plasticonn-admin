import { Button, Checkbox, TextField, Typography } from "@mui/material";

const SignIn = () => {
  return (
    <div className="flex justify-center bg-[#FAFAFA] pt-20 pb-15 h-full">
      <div className="flex flex-col gap-5.25">
        <div className="flex flex-col gap-5.25">
          <div className="flex justify-center">
            <img src="/logo.png" />

            <Typography color="#005C3D" fontSize={36} fontWeight={400}>
              Plasticonn
            </Typography>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col ">
              <div className="flex justify-center">
                <Typography color="#1A1A1A" fontSize={24} fontWeight={400}>
                  Identity Verification Dashboard
                </Typography>
              </div>

              <div className="flex justify-center">
                <Typography color="#1A1A1A99" fontSize={18} fontWeight={400}>
                  Secure access to your dashboard
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA] rounded-[18px] border border-[#1A1A1A80] p-6 mt-4 ml-4 flex flex-col gap-6.5 w-228">
          <div className="flex justify-center">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <Typography color="#1A1A1A" fontSize={24} fontWeight={400}>
                  Sign In
                </Typography>
              </div>

              <Typography color="#1A1A1A99" fontSize={20} fontWeight={400}>
                Enter your credentials to access the dashboard
              </Typography>
            </div>
          </div>

          <div className="mx-3">
            <Typography fontWeight={400} fontSize={18} color="#1A1A1A">
              Email
            </Typography>
            <TextField
              //   value={search}
              //   onChange={(e) => setSearch(e.target.value)
              placeholder="Enter your email"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                // overall height
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#00C2810D",

                  // default border
                  "& fieldset": {
                    borderColor: "#00C2810D",
                  },

                  // focused
                  "&.Mui-focused fieldset": {
                    borderColor: "#00C2810D",
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

          <div className="mx-3">
            <Typography fontWeight={400} fontSize={18} color="#1A1A1A">
              Password
            </Typography>
            <TextField
              //   value={search}
              //   onChange={(e) => setSearch(e.target.value)
              placeholder="Enter your password"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                // overall height
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#00C2810D",

                  // default border
                  "& fieldset": {
                    borderColor: "#00C2810D",
                  },

                  // focused
                  "&.Mui-focused fieldset": {
                    borderColor: "#00C2810D",
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

          <div className="flex justify-between items-center mx-3">
            <div className="flex items-center gap-.5">
              <Checkbox />
              <Typography fontWeight={400} fontSize={18} color="#1A1A1A">
                Remember Me
              </Typography>
            </div>

            <Typography
              fontWeight={400}
              fontSize={18}
              color="#00C281"
              sx={{
                "&:hover": { cursor: "pointer", textDecoration: "underline" },
              }}
            >
              Forgot Password?
            </Typography>
          </div>

          <Button
            fullWidth
            //onClick={() => setOpen(false)}
            sx={{
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
              Sign In
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
