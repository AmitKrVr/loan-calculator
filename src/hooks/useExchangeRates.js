import { useState } from "react";
import axios from "axios";

export const useExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState({ USD: 1 });

    const fetchExchangeRates = async () => {
        try {
            const res = await axios.get(
                `https://v6.exchangerate-api.com/v6/${
                    import.meta.env.VITE_EXCHANGE_API_KEY
                }/latest/USD`
            );
            setExchangeRates(res.data);
        } catch (error) {
            console.error("Failed to fetch exchange rates:", error);
        }
    };

    return { exchangeRates, fetchExchangeRates };
};
