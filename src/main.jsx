import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider as CustomThemeProvider } from "./context/ThemeProvider.jsx";
import { CurrencyProvider } from "./context/CurrencyContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CustomThemeProvider>
            <CurrencyProvider>
                <App />
            </CurrencyProvider>
        </CustomThemeProvider>
    </StrictMode>
);
