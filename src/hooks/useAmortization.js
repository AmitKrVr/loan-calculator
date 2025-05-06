export function useAmortization() {
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

        return amortization;
    };

    return { generateTable };
}
