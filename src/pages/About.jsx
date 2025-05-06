import React from "react";
import {
    Typography,
    Divider,
    Link,
    List,
    ListItem,
    ListItemText,
    Container,
} from "@mui/material";

const About = () => {
    return (
        <Container maxWidth="md" sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                About Loan Calculator for Developers
            </Typography>

            <Typography variant="body1" component="p">
                This Loan Calculator App is a modern, single-page web
                application built using <strong>React JS</strong> and{" "}
                <strong>Material UI</strong>. It allows users to calculate loan
                EMIs (Equated Monthly Installments), view a detailed
                amortization schedule, and see real-time currency conversions of
                their EMI using live exchange rates.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>
                📋 Instructions for Candidates
            </Typography>
            <Typography variant="body1" component="p">
                Please follow these instructions to complete and submit your
                project:
            </Typography>
            <List
                dense
                component="ul"
                sx={{
                    pl: 2,
                    listStyleType: "disc",
                    "& .MuiListItem-root": {
                        display: "list-item",
                        paddingLeft: 1,
                    },
                }}>
                {[
                    "Push the entire project to a public GitHub repository.",
                    "Make sure to commit regularly with clear messages after completing each feature.",
                    "Use the provided EMI formula to perform calculations.",
                    "Use Context API for global state management (e.g. theme, currency).",
                    "Create custom React hooks for reusable logic (e.g. EMI calculation, fetching exchange rates).",
                    "Integrate the ExchangeRate API for live currency conversion.",
                    "Ensure the app is fully responsive on all screen sizes.",
                    "Implement both light and dark modes using Material UI's theming system.",
                    "Add a 404 Not Found page for unmatched routes.",
                    "Handle runtime errors gracefully by showing an Error Page.",
                    "Once deployed, add the live deployment link in the About section of your GitHub repo.",
                    "Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages).",
                ].map((text, i) => (
                    <ListItem key={i} component="li" sx={{ paddingY: 0 }}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body2" sx={{ mt: 2 }}>
                ✅ Your final GitHub repository should include a live demo link,
                and your code should be readable, modular, and well-structured.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>
                🔧 Features
            </Typography>
            <List
                dense
                component="ul"
                sx={{
                    pl: 2,
                    listStyleType: "disc",
                    "& .MuiListItem-root": {
                        display: "list-item",
                        paddingLeft: 1,
                    },
                }}>
                {[
                    "Loan EMI calculation using standard financial formulas",
                    "Dynamic amortization schedule table with monthly breakdown",
                    "Real-time currency conversion of EMI using a live exchange rate API",
                    "Paginated exchange rate table for 160+ currencies",
                    "Dark/Light mode toggle for a customizable experience",
                    "Collapsible header navigation on mobile screens",
                    "Fully responsive UI built with Material UI",
                ].map((text, i) => (
                    <ListItem key={i} component="li" sx={{ paddingY: 0 }}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>
                📦 Technologies Used
            </Typography>
            <List
                dense
                component="ul"
                sx={{
                    pl: 2,
                    listStyleType: "disc",
                    "& .MuiListItem-root": {
                        display: "list-item",
                        paddingLeft: 1,
                    },
                }}>
                {[
                    "React (Hooks, Routing, Context API)",
                    "Material UI for styling and responsive components",
                    "Axios for API calls",
                    "Exchange Rate API for real-time currency conversion",
                ].map((text, i) => (
                    <ListItem key={i} component="li" sx={{ paddingY: 0 }}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>
                🔣 EMI Formula Used
            </Typography>
            <Typography variant="body1" component="p">
                The EMI (Equated Monthly Installment) is calculated using the
                standard formula:
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
                EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> – 1]
            </Typography>

            <Typography variant="body2" sx={{ mt: 2 }}>
                Where:
            </Typography>
            <List dense sx={{ paddingY: 0 }}>
                <ListItem>
                    <ListItemText primary="P = Principal loan amount" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="R = Monthly interest rate (annual rate / 12 / 100)" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="N = Loan duration in months" />
                </ListItem>
            </List>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>
                🌍 Currency Conversion API
            </Typography>
            <Typography variant="body1" component="p">
                This app integrates with the free tier of the{" "}
                <Link
                    href="https://app.exchangerate-api.com"
                    target="_blank"
                    rel="noopener">
                    ExchangeRate-API
                </Link>{" "}
                to fetch live exchange rates.
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
                API Endpoint Example:
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    fontFamily: "monospace",
                    bgcolor: "#f5f5f5",
                    p: 1,
                    borderRadius: 1,
                }}>
                https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
                You must register and obtain a free API key to use this
                endpoint. Then, replace
                <code> YOUR_API_KEY </code> in the app code with your actual
                key.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>
                🎯 Purpose of This App
            </Typography>
            <Typography variant="body1" component="p">
                This project is designed to assess a candidate's React
                development skills, including:
            </Typography>
            <List
                dense
                component="ul"
                sx={{
                    pl: 2,
                    listStyleType: "disc",
                    "& .MuiListItem-root": {
                        display: "list-item",
                        paddingLeft: 1,
                    },
                }}>
                {[
                    "React fundamentals (state, props, hooks)",
                    "Component structure and code reusability",
                    "Third-party API integration and live data rendering",
                    "Working with tables, lists, and pagination",
                    "Theme customization (dark/light mode toggle)",
                    "Error handling and graceful UI fallbacks",
                    "Responsive design and collapsible mobile header navigation (In Mobile view)",
                ].map((text, i) => (
                    <ListItem key={i} component="li" sx={{ paddingY: 0 }}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body2" sx={{ mt: 2 }}>
                ✨ For any currency conversion feature to work, make sure the
                API key is valid and the network allows external API calls.
            </Typography>
        </Container>
    );
};

export default About;
