import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <Container
            maxWidth="md"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "90vh",
            }}>
            <Typography variant="h1" color="primary" gutterBottom>
                404
            </Typography>
            <Typography variant="h4" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4}>
                Sorry, the page you're looking for doesn't exist or has been
                moved.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/")}>
                Go to Homepage
            </Button>
        </Container>
    );
};

export default PageNotFound;
