import { Box } from "@mui/material";
import React from "react";

export default function Header(props) {
  return (
    <Box
      sx={{
        position: "absolute",
        height: 100,
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#AEAEAE",
        color: "white",
      }}
    >
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </Box>
  );
}
