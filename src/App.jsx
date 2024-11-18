import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/common/Loader.jsx";
import Navbar from "./components/common/Navbar.jsx";
import routes from "@/routes.js";

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
                    {routes.map(({path, component: Component}, index) => {
                        return <Route path={path} element={<Component/>} key={index} />
                    })}
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
