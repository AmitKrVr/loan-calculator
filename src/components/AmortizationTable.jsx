import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";
import { useCurrency } from "../context/useCurrency";

export default function AmortizationTable({ data }) {
    const { currency, convertEMI } = useCurrency();
    return (
        <Paper sx={{ mt: 4 }}>
            <Typography variant="h6" p={2}>
                Amortization Schedule (in {currency})
            </Typography>
            <TableContainer
                sx={{
                    maxHeight: 400,
                    overflowY: "auto",
                    width: "100%",
                }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Month</TableCell>
                            <TableCell align="right">Principal</TableCell>
                            <TableCell align="right">Interest</TableCell>
                            <TableCell align="right">
                                Remaining Balance
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.month}>
                                <TableCell>{row.month}</TableCell>
                                <TableCell align="right">
                                    {convertEMI(row.principal).toFixed(2)}{" "}
                                    {currency}
                                </TableCell>
                                <TableCell align="right">
                                    {convertEMI(row.interest).toFixed(2)}{" "}
                                    {currency}
                                </TableCell>
                                <TableCell align="right">
                                    {convertEMI(row.balance).toFixed(2)}{" "}
                                    {currency}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
