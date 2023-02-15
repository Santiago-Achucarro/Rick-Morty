import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import GitHubIcon from "@mui/icons-material/GitHub";
import CachedIcon from "@mui/icons-material/Cached";
import { grey } from "@mui/material/colors";
import { capitalizeWords } from "../../Custom/CustomFunctions";
import { Link } from "@mui/material";

const vanishGrey = grey[500];

const Navbar = ({ setCharacter, setPage }) => {
  const [inputValue, setInputValue] = useState();

  const handleInput = (e) => {
    e.preventDefault();
    setCharacter(capitalizeWords(inputValue));
    setInputValue("");
  };

  const reset = (e) => {
    setCharacter("");
    setPage(1);
  };

  return (
    <Box padding={2}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#0A1929", borderRadius: 3 }}
      >
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: { xs: "space-evenly", lg: "space-between" },
            backgroundColor: "#0A1929",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            fontSize={{ xs: 15 }}
            sx={{ cursor: "pointer" }}
            onClick={(e) => reset(e)}
          >
            R&M
          </Typography>
          <form onSubmit={(e) => handleInput(e)}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ml: { xs: 5 },
                  backgroundColor: vanishGrey,
                  opacity: 0.5,
                  borderRadius: 2,
                  paddingX: 4,
                }}
              >
                <SearchIcon color="white" />
                <InputBase
                  placeholder="Search…"
                  name="Character"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  sx={{
                    ml: 2,
                    transition: "all ease 0.3s",
                    "&:hover": {
                      paddingX: 2,
                      transition: "all ease 0.3s",
                      opacity: 0.8,
                    },
                  }}
                />
              </Box>
              <CachedIcon
                color="white"
                onClick={(e) => reset(e)}
                sx={{
                  padding: 0.5,
                  transition: "all ease 0.3s",
                  "&:hover": {
                    borderRadius: "20px",
                    backgroundColor: "grey",
                    opacity: "0.5",
                    transition: "all ease 0.3s",
                  },
                }}
              />
            </Box>
          </form>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link
              sx={{ color: "white" }}
              href="https://github.com/Santiago-Achucarro/Rick-Morty"
              target={"_blank"}
            >
              <GitHubIcon sx={{ ml: 2 }} />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Navbar };
