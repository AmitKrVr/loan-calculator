"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState("USD");
    const [exchangeRates, setExchangeRates] = useState({ USD: 1 });

    const fetchExchangeRates = async () => {
        try {
            const res = await axios.get(
                `https://v6.exchangerate-api.com/v6/${
                    import.meta.env.VITE_EXCHANGE_API_KEY
                }/latest/USD`
            );

            setExchangeRates(res.data.conversion_rates);
        } catch (error) {
            console.error("Failed to fetch exchange rates:", error);
        }
    };

    useEffect(() => {
        fetchExchangeRates();
    }, []);

    const convertEMI = (amountInINR) => {
        if (!exchangeRates || !exchangeRates["INR"] || !exchangeRates[currency])
            return amountInINR;

        const usdValue = amountInINR / exchangeRates["INR"];
        return usdValue * exchangeRates[currency];
    };

    return (
        <CurrencyContext.Provider
            value={{ currency, setCurrency, exchangeRates, convertEMI }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export default CurrencyContext;
