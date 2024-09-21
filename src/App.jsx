import {useState} from 'react'
import { createTheme, CssBaseline, ThemeProvider} from "@mui/material";

import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Build from "./Build.jsx";
import Loader from "./Loader.jsx";
import {GlobalStateProvider} from "./context/StateContext.jsx";
import FinalBuild from "./FinalBuild.jsx";

function App() {
    const [loading, setLoading] = useState(false);
    const darkTheme = createTheme({
        palette: {
            mode: "dark"
        }
    })

    return (

            <BrowserRouter>
                <GlobalStateProvider>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline/>
                    <Navbar setLoading={setLoading}/>
                    {loading && <Loader />}

                    <Routes>
                        <Route path="/" element={<Home setLoading={setLoading} />} />
                        <Route path="/build" element={<Build />}/>
                        <Route path="/final" element={<FinalBuild />}/>
                    </Routes>
                </ThemeProvider>
                    </GlobalStateProvider>

            </BrowserRouter>

    )
}

export default App
