import { useState } from "react";
import Pages from "../container/Pages";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Blog from "../components/website/Blog";
import Gallery from "../components/website/Gallery";
import Partners from "../components/website/Partners";

const Website = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Pages page="Website Management" helperText="Manage website content here">
      <div className=" px-5 mt-6">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#00C281",
                  height: "2px",
                  borderRadius: "2px",
                },
              }}
              onChange={handleChange}
              aria-label="Website tabs"
            >
              <Tab
                sx={{
                  textTransform: "capitalize",
                  color: "#1A1A1A80",
                  "&.Mui-selected": {
                    color: "#00C281",
                    fontWeight: 500,
                  },
                }}
                label="Blogs"
                value="1"
              />
              <Tab
                sx={{
                  textTransform: "capitalize",
                  color: "#1A1A1A80",
                  "&.Mui-selected": {
                    color: "#00C281",
                    fontWeight: 500,
                  },
                }}
                label="Gallery"
                value="2"
              />
              <Tab
                sx={{
                  textTransform: "capitalize",
                  color: "#1A1A1A80",
                  "&.Mui-selected": {
                    color: "#00C281",
                    fontWeight: 500,
                  },
                }}
                label="Partners"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Blog />
          </TabPanel>
          <TabPanel value="2">
            <Gallery />
          </TabPanel>
          <TabPanel value="3">
            <Partners />
          </TabPanel>
        </TabContext>
      </div>
    </Pages>
  );
};

export default Website;
