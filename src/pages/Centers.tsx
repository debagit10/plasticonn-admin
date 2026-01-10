import { TextField, InputAdornment, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Pages from "../container/Pages";
import Centers_Table from "../components/centers/Centers_Table";
//import Add_Center from "../components/centers/Add_Center";
import Upload_Centers from "../components/centers/Upload_Centers";

import api from "../utils/axiosInstance";

interface Centers {
  _id: string;
  centerId: string;
  address: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  status: string;
  capacity: string;
  type: string;
  materialsAccepted: [string];
  contactEmail: string;
  contactPerson: string;
  contactPhone: string;
  gps: { coordinates: GPS };
  operatingHours: string;
  verified: boolean;
}

interface GPS {
  lon: number;
  lat: number;
}

const Centers = () => {
  const [value, setValue] = useState("all");
  const [search, setSearch] = useState("");

  const [centers, setCenters] = useState<Centers[]>([]);

  const centersList = async () => {
    try {
      const response = await api.get("/api/admin/center-mgt/list");

      console.log(response.data.data);
      setCenters(response.data.data.centers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    centersList();
  }, []);

  return (
    <Pages
      page="Centers Management"
      helperText="Manage collection and recycling centers."
    >
      <div className=" px-5 mt-6">
        <div className="flex gap-2.5 justify-end mb-3">
          <Upload_Centers onSuccess={centersList} />
          {/* <Add_Center /> */}
        </div>

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
            <MenuItem value="Informal Collection Center">
              Informal Collection Center
            </MenuItem>
            <MenuItem value="Formal Collection">
              Formal Collection Center
            </MenuItem>
            <MenuItem value="Recycling Center">Recycling Center</MenuItem>
          </TextField>
        </div>

        <Centers_Table
          search={search}
          filter={value}
          centers={centers}
          refresh={centersList}
        />
      </div>
    </Pages>
  );
};

export default Centers;
