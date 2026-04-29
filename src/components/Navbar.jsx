import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const pages = ["Home", "Shop", "About us", "Services", "Blog", "Contact us"];

function Navbar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (state) => () => {
    setOpenDrawer(state);
  };

  const getPath = (page) => {
    const path = page.toLowerCase().replace(/\s/g, "-");
    return path === "home" ? "/" : `/${path}`;
  };

  // shared style للـ hover + active
  const linkStyle = {
    color: "white",
    fontWeight: 500,
    textDecoration: "none",
    transition: "0.3s",
    "&:hover": {
      opacity: 0.7,
      transform: "translateY(-1px)",
    },
    "&.active": {
      borderBottom: "2px solid white",
    },
  };

  const iconStyle = {
    fontSize: 28,
    cursor: "pointer",
    color: "white",
    transition: "0.3s",
    "&:hover": {
      opacity: 0.7,
      transform: "scale(1.1)",
    },
    "&.active": {
      borderBottom: "2px solid white",
    },
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#3B5D50" }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* Logo */}
          <Typography
            component="a"
            href="/"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "24px", md: "32px" },
              color: "white",
              textDecoration: "none",
            }}
          >
            Furni <span>.</span>
          </Typography>

          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={NavLink}
                to={getPath(page)}
                sx={linkStyle}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Desktop Icons (UPDATED ) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <NavLink to="/login">
              <PersonIcon sx={iconStyle} />
            </NavLink>

            <NavLink to="/cart">
              <ShoppingCartIcon sx={iconStyle} />
            </NavLink>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer */}
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        transitionDuration={400}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#3B5D50",
            color: "white",
            padding: "10px 30px",
          },
        }}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>

          {/* Close */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon sx={{ color: "white", fontSize: 28 }} />
            </IconButton>
          </Box>

          {/* Mobile Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 4,
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page}
                component={NavLink}
                to={getPath(page)}
                onClick={toggleDrawer(false)}
                sx={{
                  ...linkStyle,
                  fontSize: "18px",
                  "&.active": {
                    fontWeight: 700,
                    borderLeft: "3px solid white",
                    paddingLeft: "10px",
                  },
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          {/* Mobile Icons */}
          <Box
            sx={{
              display: "flex",
              gap: 4,
              mt: "auto",
              justifyContent: "center",
              paddingY: 2,
            }}
          >
            <NavLink to="/login">
              <PersonIcon sx={iconStyle} />
            </NavLink>

            <NavLink to="/cart">
              <ShoppingCartIcon sx={iconStyle} />
            </NavLink>
          </Box>

        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;