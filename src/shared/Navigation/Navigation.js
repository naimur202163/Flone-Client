import { Container, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo.png";
export default function Navigation() {
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
                
            </Box>
            <Box>3</Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
