import {useState} from 'react'
import { createTheme, CssBaseline, ThemeProvider} from "@mui/material";

import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Build from "./Build.jsx";
import Loader from "./Loader.jsx";

function App() {
    const [loading, setLoading] = useState(false);
    const darkTheme = createTheme({
        palette: {
            mode: "dark"
        }
    })

    return (

            <BrowserRouter>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline/>
                    <Navbar setLoading={setLoading}/>
                    {loading && <Loader />}
                    <Routes>
                        <Route path="/" element={<Home setLoading={setLoading} />} />
                        <Route path="/build" element={<Build />}/>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>

    )
}

export default App
