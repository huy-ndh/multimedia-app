import { Box } from "@mui/material";
import React from "react";

export default function Footer(props) {
  return (
    <Box
      sx={{
        position: "absolute",
        height: 50,
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#AEAEAE",
        color: "white",
      }}
    >
      <h3>{props.note}</h3>
    </Box>
  );
}
