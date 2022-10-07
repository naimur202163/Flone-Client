import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../../assets/img/logo/logo.png";
import React from "react";
export default function Footer() {
  return (
    <>
      <Box >
        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Box>
                <img src={logo} alt="" />
              </Box>
            </Box>
            <Box>2</Box>
            <Box>3</Box>
            <Box>4</Box>
            <Box>5</Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
