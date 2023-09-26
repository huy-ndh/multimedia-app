import { Box, Grid } from "@mui/material";
import React from "react";
import OpenSource from "./openSource/OpenSource";
import Input from "./input/Input";
import CustomizedTimeline from "./timeline/TimeLine";

const Main = (props) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 50,
        width: "100%",
        // height: "90%",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <Box
        sx={{
          padding: 2,
          px: 20,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: 2,
          }}
        >
          <Grid container sx={{ height: "100%", padding: 2 }}>
            <Grid item xs={12} sx={{ marginBottom: 2 }}>
              <Input></Input>
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 2 }}>
              <CustomizedTimeline />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 2 }}>
              <OpenSource></OpenSource>
            </Grid>
            <Grid item xs={12} sx={{ border: "2px solid #ECECEC" }}>
              About Us
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
