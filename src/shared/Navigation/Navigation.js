import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import logo from "../../assets/img/logo/logo-2.png";

const pages = ["Home", "Shop", "Collection", "Pages", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export default function Navigation() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Box p={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <img src={logo} alt="" />
            </Box>
            <Box>2</Box>
            <Box>3</Box>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
