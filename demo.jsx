const demo = () => {
    return (
        <div class="MuiBox-root css-0">
            <h4 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom css-nubv1w">
                About This App
            </h4>
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph css-whpja7">
                This Loan Calculator App is a modern, single-page web
                application built using <strong>React JS</strong> and{" "}
                <strong>Material UI</strong>. It allows users to calculate loan
                EMIs (Equated Monthly Installments), view a detailed
                amortization schedule, and see real-time currency conversions of
                their EMI using live exchange rates.
            </p>
            <hr class="MuiDivider-root MuiDivider-fullWidth css-1jag52l" />
            <h5 class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-1fzsk91">
                📋 Instructions for Candidates
            </h5>
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph css-whpja7">
                Please follow these instructions to complete and submit your
                project:
            </p>
            <ul>
                <li>
                    Push the entire project to a public{" "}
                    <strong>GitHub repository</strong>.
                </li>
                <li>
                    Make sure to <strong>commit regularly</strong> with clear
                    messages after completing each feature.
                </li>
                <li>Use the provided EMI formula to perform calculations.</li>
                <li>
                    Use <strong>Context API</strong> for global state management
                    (e.g. theme, currency).
                </li>
                <li>
                    Create <strong>custom React hooks</strong> for reusable
                    logic (e.g. EMI calculation, fetching exchange rates).
                </li>
                <li>
                    Integrate the <strong>ExchangeRate API</strong> for live
                    currency conversion.
                </li>
                <li>
                    Ensure the app is fully <strong>responsive</strong> on all
                    screen sizes.
                </li>
                <li>
                    Implement both <strong>light and dark modes</strong> using
                    Material UI's theming system.
                </li>
                <li>
                    Add a <strong>404 Not Found</strong> page for unmatched
                    routes.
                </li>
                <li>
                    Handle runtime errors gracefully by showing an{" "}
                    <strong>Error Page</strong>.
                </li>
                <li>
                    Once deployed, add the live deployment{" "}
                    <strong>link in the About section</strong> of your GitHub
                    repo.
                </li>
                <li>
                    Deploy the project on any platform (e.g. Vercel, Netlify,
                    GitHub Pages).
                </li>
            </ul>
            <p class="MuiTypography-root MuiTypography-body2 css-6mefmv">
                ✅ Your final GitHub repository should include a live demo link,
                and your code should be readable, modular, and well-structured.
            </p>
            <hr class="MuiDivider-root MuiDivider-fullWidth css-1jag52l" />
            <h5 class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-1fzsk91">
                🔧 Features
            </h5>
            <ul>
                <li>Loan EMI calculation using standard financial formulas</li>
                <li>
                    Dynamic amortization schedule table with monthly breakdown
                </li>
                <li>
                    Real-time currency conversion of EMI using a live exchange
                    rate API
                </li>
                <li>Paginated exchange rate table for 160+ currencies</li>
                <li>Dark/Light mode toggle for a customizable experience</li>
                <li>Collapsible header navigation on mobile screens</li>
                <li>Fully responsive UI built with Material UI</li>
            </ul>
            <hr class="MuiDivider-root MuiDivider-fullWidth css-1jag52l" />
            <h5 class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-1fzsk91">
                📦 Technologies Used
            </h5>
            <ul>
                <li>
                    <strong>React</strong> (Hooks, Routing, Context API)
                </li>
                <li>
                    <strong>Material UI</strong> for styling and responsive
                    components
                </li>
                <li>
                    <strong>Axios</strong> for API calls
                </li>
                <li>
                    <strong>Exchange Rate API</strong> for real-time currency
                    conversion
                </li>
            </ul>
            <hr class="MuiDivider-root MuiDivider-fullWidth css-1jag52l" />
            <h5 class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-1fzsk91">
                🔣 EMI Formula Used
            </h5>
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph css-whpja7">
                The EMI (Equated Monthly Installment) is calculated using the
                standard formula:
            </p>
            <p class="MuiTypography-root MuiTypography-body2 css-n07b83">
                EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> – 1]
            </p>
            <div class="MuiBox-root css-0">
                <p class="MuiTypography-root MuiTypography-body2 css-yw7as9">
                    Where:
                </p>
                <ul>
                    <li>
                        <strong>P</strong> = Principal loan amount
                    </li>
                    <li>
                        <strong>R</strong> = Monthly interest rate (annual rate
                        / 12 / 100)
                    </li>
                    <li>
                        <strong>N</strong> = Loan duration in months
                    </li>
                </ul>
            </div>
            <hr class="MuiDivider-root MuiDivider-fullWidth css-1jag52l" />
            <h5 class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-1fzsk91">
                🌍 Currency Conversion API
            </h5>
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph css-whpja7">
                This app integrates with the free tier of the{" "}
                <a
                    class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-jdubn1"
                    href="https://app.exchangerate-api.com"
                    target="_blank">
                    ExchangeRate-API
                </a>{" "}
                to fetch live exchange rates.
            </p>
            <p class="MuiTypography-root MuiTypography-body2 css-yw7as9">
                API Endpoint Example:
                <br />
                <code>
                    https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
                </code>
            </p>
            <p class="MuiTypography-root MuiTypography-body2 css-7mqiw">
                You must register and obtain a free API key to use this
                endpoint. Then, replace <code>YOUR_API_KEY</code> in the app
                code with your actual key.
            </p>
            <hr class="MuiDivider-root MuiDivider-fullWidth css-1jag52l" />
            <h5 class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-1fzsk91">
                🎯 Purpose of This App
            </h5>
            <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph css-whpja7">
                This project is designed to assess a candidate's React
                development skills, including:
            </p>
            <ul>
                <li>React fundamentals (state, props, hooks)</li>
                <li>Component structure and code reusability</li>
                <li>Third-party API integration and live data rendering</li>
                <li>Working with tables, lists, and pagination</li>
                <li>Theme customization (dark/light mode toggle)</li>
                <li>Error handling and graceful UI fallbacks</li>
                <li>
                    Responsive design and collapsible mobile header navigation
                    (In Mobile view)
                </li>
            </ul>
            <p class="MuiTypography-root MuiTypography-body2 css-fvj88i">
                ✨ For any currency conversion feature to work, make sure the
                API key is valid and the network allows external API calls.
            </p>
        </div>
    );
};
export default demo;
