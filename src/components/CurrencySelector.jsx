import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Box,
} from "@mui/material";
import { useCurrency } from "../context/useCurrency";

export default function CurrencySelector({ emiInINR }) {
    const { currency, setCurrency, convertEMI, exchangeRates } = useCurrency();

    return (
        <Box mt={3}>
            <FormControl fullWidth>
                <InputLabel>Currency</InputLabel>
                <Select
                    value={currency}
                    label="Currency"
                    onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="INR">INR</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="GBP">GBP</MenuItem>
                    <MenuItem value="JPY">JPY</MenuItem>
                    <MenuItem value="AUD">AUD</MenuItem>
                    <MenuItem value="CAD">CAD</MenuItem>
                </Select>
            </FormControl>
            {exchangeRates &&
                exchangeRates["INR"] &&
                exchangeRates[currency] && (
                    <Typography mt={1}>
                        Converted EMI: {convertEMI(emiInINR).toFixed(2)}{" "}
                        {currency}
                    </Typography>
                )}
        </Box>
    );
}
