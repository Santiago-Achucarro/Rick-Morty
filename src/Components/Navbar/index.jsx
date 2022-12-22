import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import GitHubIcon from "@mui/icons-material/GitHub";
import { grey } from "@mui/material/colors";

const vanishGrey = grey[500];

const Navbar = () => {
  return (
    <Box padding={2}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: { xs: "space-evenly", lg: "space-between" },
          }}
        >
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            fontSize={{ xs: 15 }}
          >
            WeaSearch
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: { xs: 5 },
            }}
          >
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              sx={{
                ml: 2,
                backgroundColor: vanishGrey,
                paddingX: 5,
                borderRadius: 2,
                opacity: 0.5,
                "&:hover": {
                  transition:"all ease 0.3s" ,
                  opacity:0.8,
                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MarkunreadIcon />
            <GitHubIcon sx={{ ml: 2 }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Navbar };

{
  /* <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */
  /* <Typography variant="h6" color="inherit" component="div">
              Weather-Search
  </Typography>*/
}
