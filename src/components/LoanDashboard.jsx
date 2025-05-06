"use client";

import React, { useState } from "react";
import { Container, Typography, Box, Paper, Toolbar } from "@mui/material";
import LoanCalculatorForm from "./LoanCalculatorForm";
import EMIResult from "./EMIResult";
import CurrencySelector from "./CurrencySelector";
import AmortizationTable from "./AmortizationTable";
import ResetButton from "./ResetButton";
import { useCurrency } from "../context/useCurrency";
import { useAmortization } from "../hooks/useAmortization";

export default function LoanDashboard() {
    const [formData, setFormData] = useState({
        amount: "100000",
        rate: "7.5",
        term: "5",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [emi, setEmi] = useState(null);
    const [tableData, setTableData] = useState([]);

    const { convertEMI, fetchExchangeRates, error } = useCurrency();
    const { generateTable } = useAmortization();

    const validate = () => {
        const newErrors = {};
        if (!formData.amount) newErrors.amount = "Loan amount is required";
        if (!formData.rate) newErrors.rate = "Interest rate is required";
        if (!formData.term) newErrors.term = "Term is required";
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors(validate());
    };

    const calculateEMI = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);
        setTouched({ amount: true, rate: true, term: true });

        if (Object.keys(validationErrors).length > 0) return;

        const principal = parseFloat(formData.amount);
        const annualInterestRate = parseFloat(formData.rate);
        const years = parseInt(formData.term);

        if (!principal || !annualInterestRate || !years) return;

        const monthlyInterest = annualInterestRate / 12 / 100;
        const totalMonths = years * 12;

        const emiVal =
            (principal *
                monthlyInterest *
                Math.pow(1 + monthlyInterest, totalMonths)) /
            (Math.pow(1 + monthlyInterest, totalMonths) - 1);

        try {
            const latestRates = await fetchExchangeRates();
            const convertedEMI = convertEMI(emiVal, latestRates);

            setEmi(convertedEMI);
            const amortizationData = generateTable(
                convertedEMI,
                principal,
                monthlyInterest,
                totalMonths
            );
            setTableData(amortizationData);
        } catch (err) {
            console.error(
                "Error fetching exchange rates or converting EMI",
                err
            );
            setEmi(null);
            setTableData([]);
        }
    };

    const handleReset = () => {
        setFormData({ amount: "", rate: "", term: "" });
        setEmi(null);
        setTableData([]);
    };

    return (
        <Container
            sx={{
                maxWidth: { xs: "100%", sm: "md" },
                p: { xs: "0" },
            }}>
            <Paper
                elevation={3}
                sx={{
                    p: { xs: 2, sm: 3 },
                    boxShadow: { xs: "none", sm: 3 },
                }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontSize: { xs: 30, sm: 40 },
                        mb: 5,
                    }}>
                    Loan Calculator
                </Typography>

                <LoanCalculatorForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={calculateEMI}
                    errors={errors}
                    touched={touched}
                    onBlur={handleBlur}
                />

                {emi !== null && (
                    <>
                        <EMIResult emi={emi} />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                gap: 2,
                                justifyContent: "space-between",
                            }}>
                            <CurrencySelector emiInINR={emi} />
                            <ResetButton onClick={handleReset} />
                        </Box>
                        <AmortizationTable data={tableData} />
                    </>
                )}

                {error && (
                    <Box
                        sx={{
                            mt: 3,
                            p: 2,
                            backgroundColor: "#f8d7da",
                            color: "#721c24",
                            borderRadius: "4px",
                        }}>
                        <Typography variant="body1">
                            Error:{" "}
                            {error.message ||
                                "An error occurred while fetching data"}
                        </Typography>
                    </Box>
                )}
            </Paper>
        </Container>
    );
}
