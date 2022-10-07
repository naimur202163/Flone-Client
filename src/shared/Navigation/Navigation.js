import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo.png";
export default function Navigation() {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "black",
    fontSize: "1rem",
    // fontWeight:'semiBold'
  };
  return (
    <>
      <Container>
        <Box p={1} sx={{ backgroundColor: "#FFFFFF" }}>
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
            <Box>
              <Link style={linkStyle} to="/">
                Home
              </Link>
              <Link style={linkStyle} to="/blog">
                blog
              </Link>
              <Link style={linkStyle} to="/collection">
                Collection
              </Link>
              <Link style={linkStyle} to="/contact">
                Contact Us
              </Link>
            </Box>
            <Box>logos</Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
