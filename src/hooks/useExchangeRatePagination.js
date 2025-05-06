import { useMemo, useState } from "react";

export function useExchangeRatePagination(rates, pageSize = 10) {
    const [page, setPage] = useState(1);

    const currencyEntries = useMemo(() => {
        return rates?.conversion_rates
            ? Object.entries(rates.conversion_rates)
            : [];
    }, [rates]);

    const totalPages = Math.ceil(currencyEntries.length / pageSize);

    const paginatedRates = useMemo(() => {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return currencyEntries.slice(startIndex, endIndex);
    }, [currencyEntries, page, pageSize]);

    return { page, setPage, paginatedRates, totalPages };
}
