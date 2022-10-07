import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../../assets/img/logo/logo.png";
import React from "react";
export default function Footer() {
  const theme = createTheme();

  theme.typography.p = {
    fontSize: "1rem",
    fontFamily: "Open Sans",
    color: "gray",
    paddingTop: ".6rem",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
          sx={{ backgroundColor: "#F6F6F8" }}
        >
          <Container>
            <Box
              sx={{
                display: { xs: "flex", lg: "flex" },
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: { xs: "center", lg: "space-between" },
              }}
            >
              <Box>
                <Box>
                  <img src={logo} alt="" />
                </Box>
                <Typography variant="p">
                  © 2022 Flone.
                  <br /> All Rights Reserved
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ display: "block" }} variant="h6">
                  ABOUT US
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  About us
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  Store location
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  Contact
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  Orders tracking
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ display: "block" }} variant="h6">
                  USEFUL LINKS
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  Returns
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  Support Policy
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  Size guide
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  FAQs
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ display: "block" }} variant="h6">
                  FOLLOW US
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  Facebook
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  Twitter
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  Instagram
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  Youtube
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ display: "block" }} variant="h6">
                  SUBSCRIBE
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  Get E-mail updates about our latest shop and <br /> special
                  offers.
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  {/* Here will be input filed */}
                  Twitter
                </Typography>
                <Typography sx={{ display: "block" }} variant="p">
                  SUBSCRIBE
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
