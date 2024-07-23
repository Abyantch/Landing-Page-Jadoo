import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ToggleColorMode from "./ToggleColorMode";
import { StyledToolbar } from "../style/styleAppAppBar";

import Logo from "../assets/Logo.png";

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar sx={{ fontFamily: "Poppins" }}>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ height: 20, marginRight: "16px" }}
            />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="text"
                color="info"
                size="large"
                onClick={() => scrollToSection("category")}
              >
                Category
              </Button>
              <Button
                variant="text"
                color="info"
                size="large"
                onClick={() => scrollToSection("topselling")}
              >
                Top Selling
              </Button>
              <Button
                variant="text"
                color="info"
                size="large"
                onClick={() => scrollToSection("easyandfast")}
              >
                Booking
              </Button>
              <Button
                variant="text"
                color="info"
                size="large"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </Button>
              <Button
                variant="text"
                color="info"
                size="large"
                onClick={() => scrollToSection("faq")}
                sx={{ minWidth: 0 }}
              >
                FAQ
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ToggleColorMode
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                  />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem onClick={() => scrollToSection("category")}>
                  Category
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("topselling")}>
                  Top Selling
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("easyandfast")}>
                  Booking
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("testimonials")}>
                  Testimonials
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("faq")}>FAQ</MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
