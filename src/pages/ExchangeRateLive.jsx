import { useCurrency } from "../context/useCurrency";

const ExchangeRateLive = () => {
    const { currency } = useCurrency();
    return <div>ExchangeRateLive {currency}</div>;
};
export default ExchangeRateLive;
