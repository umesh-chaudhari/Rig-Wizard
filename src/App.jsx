import {useState} from 'react'
import { createTheme, CssBaseline, ThemeProvider} from "@mui/material";

import Starter from "./Starter.jsx";
import Navbar from "./Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Build from "./Build.jsx";

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: "dark"
        }
    })

    return (

            <BrowserRouter>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline/>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Starter/>}/>
                        <Route path="/build" element={<Build/>}/>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>

    )
}

export default App
