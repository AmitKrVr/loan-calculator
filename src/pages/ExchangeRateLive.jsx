"use client";

import React, { useEffect } from "react";
import {
    Typography,
    Card,
    CardContent,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Pagination,
    Box,
    Grid,
    Divider,
} from "@mui/material";
import { useCurrency } from "../context/useCurrency";
import { formatUTCDate } from "../utils/formatUTCDate";
import { useExchangeRatePagination } from "../hooks/useExchangeRatePagination";

const PAGE_SIZE = 10;

const ExchangeRateLive = () => {
    const { exchangeRates, fetchExchangeRates } = useCurrency();

    const { page, setPage, paginatedRates, totalPages } =
        useExchangeRatePagination(exchangeRates, PAGE_SIZE);

    useEffect(() => {
        fetchExchangeRates();
    }, []);

    if (
        !exchangeRates?.conversion_rates ||
        Object.keys(exchangeRates?.conversion_rates).length === 0
    ) {
        return (
            <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Card sx={{ mt: 4 }}>
            <CardContent>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">
                            Live Exchange Rates (Base: {exchangeRates.base_code}
                            )
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} textAlign="right">
                        <Typography variant="body2" color="textSecondary">
                            Last Updated:{" "}
                            {formatUTCDate(exchangeRates.time_last_update_utc)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Next Update:{" "}
                            {formatUTCDate(exchangeRates.time_next_update_utc)}
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ mb: 2 }} />

                <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                    <Table stickyHeader size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <strong>Currency</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>Exchange Rate</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedRates.map(([currency, rate]) => (
                                <TableRow key={currency}>
                                    <TableCell>{currency}</TableCell>
                                    <TableCell align="right">{rate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box display="flex" justifyContent="center" mt={3}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={(_, newPage) => setPage(newPage)}
                        shape="rounded"
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default ExchangeRateLive;
