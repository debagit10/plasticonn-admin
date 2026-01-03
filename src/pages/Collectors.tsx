import { InputAdornment, MenuItem, TextField } from "@mui/material";
import Pages from "../container/Pages";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import Collectors_Table from "../components/collectors/Collectors_Table";

const Collectors = () => {
  const [value, setValue] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <Pages
      page="Collectors Management"
      helperText="Manage and oversee collection activities."
    >
      <div className=" px-5 mt-6">
        <div className="flex gap-2">
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoSearchOutline color="#1A1A1AB2" />
                </InputAdornment>
              ),
            }}
            sx={{
              width: 1019,

              // overall height
              "& .MuiOutlinedInput-root": {
                height: 50,
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

          <TextField
            select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Select period"
            sx={{
              width: 230,

              // overall height
              "& .MuiOutlinedInput-root": {
                height: 48,
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
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="suspended">Suspended</MenuItem>
            <MenuItem value="active">Active</MenuItem>
          </TextField>
        </div>

        <Collectors_Table search={search} filter={value} />
      </div>
    </Pages>
  );
};

export default Collectors;
