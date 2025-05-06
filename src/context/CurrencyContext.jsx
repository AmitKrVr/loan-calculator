"use client";

import { createContext, useState } from "react";
import { useExchangeRates } from "../hooks/useExchangeRates";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState("USD");
    const { exchangeRates, fetchExchangeRates } = useExchangeRates();

    const convertEMI = (amountInINR) => {
        if (
            !exchangeRates?.conversion_rates ||
            !exchangeRates?.conversion_rates["INR"] ||
            !exchangeRates?.conversion_rates[currency]
        )
            return amountInINR;

        const usdValue = amountInINR / exchangeRates?.conversion_rates["INR"];
        return usdValue * exchangeRates?.conversion_rates[currency];
    };

    return (
        <CurrencyContext.Provider
            value={{
                currency,
                setCurrency,
                exchangeRates,
                convertEMI,
                fetchExchangeRates,
            }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export default CurrencyContext;
