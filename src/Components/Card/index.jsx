import { Box, Typography } from "@mui/material";
import { useQueryClient, useQuery } from "react-query";
import { Paginator } from "../Paginator";
import { conditionColor } from "../../Custom/CustomFunctions";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function characters(page, character = "") {
  console.log(character);
  if (character == "") {
    return useQuery(["getChar", page], () =>
      fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(
        (res) => res.json()
      )
    );
  } else {
    return useQuery(["getChar", page, character], () =>
      fetch(
        `  https://rickandmortyapi.com/api/character?page=${page}&name=${character}`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err))
    );
  }
}

const Card = ({ setPage, page, character }) => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = characters(page, character);

  const handleButton = (e, value) => {
    setPage(value);
  };

  if (isError) {
    return <Box sx={{ backgroundColor: "#0A1929" }}></Box>;
  }

  if (isLoading) {
    return <Box sx={{ backgroundColor: "#0A1929" }}></Box>;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 5,
          mb: 5,
        }}
      >
        {data &&
          data.results.map((item, index) => (
            <Box
              key={`CardPers-${index}`}
              sx={{
                backgroundColor: "#0A1929",
                width: "350px",
                height: "200px",
                borderRadius: 2,
                display: "flex",
                color: "white",
                transition: "all ease 0.5s",
                "&:hover": {
                  backgroundColor: "blue",
                  paddingX: 1,
                  opacity: "0.5",
                  transition: "all ease 0.5s",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  ml: 1,
                  maxWidth: "50%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "90%",
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: 5,
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    color={"white"}
                    fontSize={item.name.length > 15 ? "10px" : "12px"}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  m: "0 auto",
                  height: "100%",
                  paddingX: 2,
                  opacity: "0.8",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                  <Typography
                    fontSize={item.gender.length > 15 ? "10px" : "15px"}
                  >
                    {item.gender}
                  </Typography>
                  <Typography
                    fontSize={item.species.length > 15 ? "12px" : "15px"}
                  >
                    {item.species}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ fontSize: "20px" }}
                    color={conditionColor(item.status)}
                  />
                  <Typography>{item.status}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
      </Box>

      <Paginator
        count={data.info.pages}
        page={page}
        handleButton={handleButton}
      />
    </>
  );
};

export { Card };
