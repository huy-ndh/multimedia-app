import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";


const Tab = styled(Box)(() => ({
  width: 100,
  textAlign: 'center',
  paddingTop: 7,
  color: '#ACACAC',
  fontSize: 20,
}));

export default function Header(props) {
  const { title } = props
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        py: 1,
        height: 40,
        width: '100%',
        fontSize: 26,
        fontWeight: 'bold',
        backgroundColor: "#FFFFFF",
        color: "#554D78",
        textAlign: 'left',
        zIndex: 10,
      }}
    >
      <Box sx={{ paddingLeft: 10, display: 'flex' }}>
        <Box
          component="img"
          sx={{
            height: 40,
            marginRight: 1,
          }}
          alt=""
          src="logo.png"
        />
        <Box
          component="img"
          sx={{
            height: 40,
            marginRight: 1,
          }}
          alt="Logo"
          src="https://i.ibb.co/Jkgqccf/logo.png"
        />
        <Box>{title}</Box>
        <Tab>APIs</Tab>
        <Tab>Pricing</Tab>
      </Box>
    </Box>
  );
}
