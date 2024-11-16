import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Build from "./Build.jsx";
import FinalBuild from "./FinalBuild.jsx";
import Home from "./Home.jsx";
import Loader from "./Loader.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar setLoading={setLoading} />
        {loading && <Loader />}
        <Routes>
          <Route path="/" element={<Home setLoading={setLoading} />} />
          <Route path="/build" element={<Build />} />
          <Route path="/final-build" element={<FinalBuild />} />
          <Route path="/builds" element={<FinalBuild />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
