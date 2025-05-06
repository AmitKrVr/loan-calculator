import { useState } from "react";
import axios from "axios";

export const useExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState({ USD: 1 });
    const [error, setError] = useState(null);

    const fetchExchangeRates = async () => {
        setError(null);
        try {
            const res = await axios.get(
                `https://v6.exchangerate-api.com/v6/${
                    import.meta.env.VITE_EXCHANGE_API_KEY
                }/latest/USD`
            );
            setExchangeRates(res.data);
        } catch (error) {
            setError("Failed to fetch exchange rates. Please try again later.");
        }
    };

    return { exchangeRates, fetchExchangeRates, error };
};
