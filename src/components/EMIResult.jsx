import { Box, Typography } from "@mui/material";

export default function EMIResult({ emi }) {
    return (
        <Box mt={3}>
            <Typography variant="h6">Monthly EMI: ${emi.toFixed(2)}</Typography>
        </Box>
    );
}
