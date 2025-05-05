import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import {
    CssBaseline,
    Box,
    createTheme,
    ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import Home from "./pages/Home";
import ExchangeRateLive from "./pages/ExchangeRateLive";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            background: {
                default: darkMode ? "#121212" : "#f5f5f5",
            },
            text: {
                primary: darkMode ? "#fff" : "#000",
            },
        },
    });

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />{" "}
            <Router>
                <Header
                    isDarkMode={darkMode}
                    onThemeToggle={() => setDarkMode((prev) => !prev)}
                />

                <Box
                    sx={{
                        p: 2,
                        minHeight: "100vh",
                        bgColor: "background.default",
                        color: "text.primary",
                    }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/exchange_rates_live"
                            element={<ExchangeRateLive />}
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Box>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
