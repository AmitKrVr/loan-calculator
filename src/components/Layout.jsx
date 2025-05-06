import { Box } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router";

const Layout = ({ isDarkMode, onThemeToggle }) => {
    return (
        <>
            <Header isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
            <Box
                sx={{
                    p: 2,
                    minHeight: "100vh",
                    bgcolor: "background.default",
                    color: "text.primary",
                }}>
                <Outlet />
            </Box>
        </>
    );
};
export default Layout;
