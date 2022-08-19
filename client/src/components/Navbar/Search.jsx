import { Drawer, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Search = ({ isDrawerOpen, setDrawOpen }) => {
  return (
    <>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setDrawOpen(false)}
      >
        <Box
          p={5}
          pt={0}
          textAlign="center"
          role="presentation"
          sx={{ position: "relative" }}
        >
          <Box sx={{ display: "flex", justifyContent: "end" }} pt={1} pb={2}>
            <CloseOutlinedIcon
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "red",
                },
              }}
              onClick={() => setDrawOpen(false)}
            />
          </Box>
          <TextField
            fullWidth
            type="text"
            label="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ cursor: "pointer" }}
                  onClick={() => alert("going to display searched result")}
                >
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default Search;
