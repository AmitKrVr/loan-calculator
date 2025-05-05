"use client";

import React, { useState } from "react";
import { Container, Typography, Box, Paper, Toolbar } from "@mui/material";
import LoanCalculatorForm from "./LoanCalculatorForm";
import EMIResult from "./EMIResult";
import CurrencySelector from "./CurrencySelector";
import AmortizationTable from "./AmortizationTable";
import ResetButton from "./ResetButton";

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

    const generateTable = (emiVal, principal, monthlyInterest, totalMonths) => {
        let balance = principal;
        const amortization = [];

        for (let month = 1; month <= totalMonths; month++) {
            const interestPayment = balance * monthlyInterest;
            const principalPayment = emiVal - interestPayment;
            balance -= principalPayment;
            amortization.push({
                month,
                interest: interestPayment,
                principal: principalPayment,
                balance: balance > 0 ? balance : 0,
            });
        }

        setTableData(amortization);
    };

    const calculateEMI = (e) => {
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

        setEmi(emiVal);
        generateTable(emiVal, principal, monthlyInterest, totalMonths);
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
            </Paper>
        </Container>
    );
}
