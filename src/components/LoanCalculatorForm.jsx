import { Box, Grid, TextField, Button } from "@mui/material";
import React from "react";

export default function LoanCalculatorForm({
    formData,
    errors,
    touched,
    onChange,
    onSubmit,
    onBlur,
}) {
    return (
        <form onSubmit={onSubmit} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <TextField
                        label="Loan Amount"
                        name="amount"
                        type="number"
                        fullWidth
                        required
                        value={formData.amount}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={touched.amount && !!errors.amount}
                        helperText={touched.amount && errors.amount}
                        inputProps={{ min: 1 }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        label="Interest Rate (%)"
                        name="rate"
                        type="number"
                        fullWidth
                        required
                        value={formData.rate}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={touched.rate && !!errors.rate}
                        helperText={touched.rate && errors.rate}
                        inputProps={{ min: 0 }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        label="Term (Years)"
                        name="term"
                        type="number"
                        fullWidth
                        required
                        value={formData.term}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={touched.term && !!errors.term}
                        helperText={touched.term && errors.term}
                        inputProps={{ min: 1 }}
                    />
                </Grid>
            </Grid>

            <Box mt={2} maxWidth={200}>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth>
                    Calculate
                </Button>
            </Box>
        </form>
    );
}
