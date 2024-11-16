import { Box, CircularProgress } from "@mui/material";

const Loader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <CircularProgress />
  </Box>
);

export default Loader;
