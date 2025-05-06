import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";

const Error = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
            }}>
            <Typography>Something went wrong in the application.</Typography>
            <Button
                variant="outlined"
                to={"/"}
                component={Link}
                sx={{ color: "text-primary", marginTop: 2 }}>
                GO HOME
            </Button>
        </Box>
    );
};
export default Error;
