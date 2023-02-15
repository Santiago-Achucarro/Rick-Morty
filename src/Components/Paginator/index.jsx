import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import "./Paginator.css";

const Paginator = ({ count, page, handleButton }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
      <Pagination
        count={count}
        page={page}
        sx={{
          "#pagination .Mui-selected": {
            backgroundColor: "red",
          },
          "#pagination .Mui-selected:hover": {
            backgroundColor: "lightblue",
          },
        }}
        onChange={(e, value) => handleButton(e, value)}
        renderItem={(item) => (
          <PaginationItem
            sx={{
              width: "50px",
              boxShadow: 0,
              borderRadius: "50px",
            }}
            {...item}
          />
        )}
      />
    </Box>
  );
};

export { Paginator };
