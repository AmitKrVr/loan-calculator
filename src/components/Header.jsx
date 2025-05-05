import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Stack,
    Switch,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, Link } from "react-router";

const navItems = [
    { label: "Home", path: "/" },
    { label: "Exchange Rates (Live)", path: "/exchange_rates_live" },
    { label: "About", path: "/about" },
    { label: "Error Page", path: "/error_page" },
];

const Header = ({ isDarkMode, onThemeToggle }) => {
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{
                width: 250,
                bgColor: "background.default",
                height: "100%",
                color: "text.primary",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}>
            <Typography variant="h6" sx={{ p: 2 }}>
                Loan Calculator
            </Typography>
            <Divider sx={{ borderColor: isDarkMode ? "#444" : "#ccc" }} />
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item.path}
                        component={Link}
                        to={item.path}
                        selected={location.pathname === item.path}
                        sx={{
                            backgroundColor:
                                location.pathname === item.path && "#1876d2",
                            color: "text.primary",
                        }}>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="sticky"
                elevation={4}
                sx={{
                    bgColor: "background.default",
                }}>
                {isMobile ? (
                    <Toolbar sx={{ mr: "10" }}>
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Toolbar
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                            <Typography variant="h6">
                                Loan Calculator
                            </Typography>

                            <Switch
                                checked={isDarkMode}
                                onChange={onThemeToggle}
                                sx={{ ml: 2 }}
                            />
                        </Toolbar>
                    </Toolbar>
                ) : (
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                        <Typography variant="h6">Loan Calculator</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Stack direction="row" spacing={1}>
                                {navItems.map((item) => {
                                    const isActive =
                                        location.pathname === item.path;
                                    return (
                                        <Button
                                            key={item.path}
                                            component={Link}
                                            to={item.path}
                                            sx={{
                                                color: "#fff",
                                                textTransform: "none",
                                                borderRadius: 1,
                                                padding: "6px 12px",
                                                backgroundColor: isActive
                                                    ? "rgba(255,255,255,0.13)"
                                                    : "transparent",
                                                transition:
                                                    "background-color 0.3s",
                                                "&:hover": {
                                                    backgroundColor:
                                                        "rgba(255,255,255,0.2)",
                                                },
                                            }}>
                                            {item.label}
                                        </Button>
                                    );
                                })}
                            </Stack>
                            <Switch
                                checked={isDarkMode}
                                onChange={onThemeToggle}
                                sx={{ ml: 2 }}
                            />
                        </Box>
                    </Toolbar>
                )}
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        bgColor: "background.default",
                        color: "text.primary",
                    },
                }}>
                {drawerContent}
            </Drawer>
        </>
    );
};

export default Header;
