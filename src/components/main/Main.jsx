import { Box } from "@mui/material";
import React from "react";

const Main = (props) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 100,
        bottom: 120,
        left: 0,
        width: "95vw",
        padding: 5,
        height: "70vh",
        // backgroundColor: "#AEAEAE",
        // color: "white",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Main;
