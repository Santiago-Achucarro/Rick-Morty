import { Box } from "@mui/material";
import { Navbar } from "../Navbar";
import { Card } from "../Card";
import { useState } from "react";

const Main = () => {
  const [page, setPage] = useState(1);
  const [character, setCharacter] = useState("");

  return (
    <Box>
      <Navbar setCharacter={setCharacter} setPage={setPage} />
      <Card page={page} setPage={setPage} character={character} />
    </Box>
  );
};

export { Main };
