import { Box, Button } from "@mui/material";

export default function ResetButton({ onClick }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 2,
                height: 45,
            }}>
            <Button
                variant="outlined"
                color="secondary"
                onClick={onClick}
                sx={{ width: { xs: "100%", sm: "auto" } }}>
                Reset Table
            </Button>
        </Box>
    );
}
