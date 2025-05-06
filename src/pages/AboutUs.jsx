import {
    Box,
    Typography,
    Divider,
    Link,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

const AboutUs = () => {
    return (
        <Box sx={{ maxWidth: "800px", margin: "0 auto", p: 3 }}>
            <Typography variant="h4" gutterBottom>
                About Loan Calculator
            </Typography>

            <Typography variant="body1" gutterBottom>
                This app helps you calculate your monthly loan EMI quickly and
                easily. It supports currency conversion and is fully responsive
                for all devices.
            </Typography>

            <Typography
                component={Link}
                href="/about_us"
                underline="hover"
                sx={{ display: "inline-block", mt: 2 }}>
                Are you a developer? Click here.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>
                💡 What You Can Do
            </Typography>

            <List
                component="ul"
                sx={{
                    pl: 2,
                    listStyleType: "disc",
                    "& .MuiListItem-root": {
                        display: "list-item",
                        paddingLeft: 1,
                    },
                }}>
                <ListItem sx={{ paddingY: 0 }}>
                    <ListItemText primary="Calculate your monthly EMI in seconds." />
                </ListItem>
                <ListItem sx={{ paddingY: 0 }}>
                    <ListItemText primary="View detailed breakdowns with amortization schedules." />
                </ListItem>
                <ListItem sx={{ paddingY: 0 }}>
                    <ListItemText primary="Convert your EMI into other currencies instantly." />
                </ListItem>
                <ListItem sx={{ paddingY: 0 }}>
                    <ListItemText primary="Use it anytime — it's free, fast, and mobile-friendly!" />
                </ListItem>
            </List>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>
                🔒 Privacy First
            </Typography>
            <Typography variant="body1" component="p">
                We don’t collect or store any personal data. All your
                calculations are performed right in your browser.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>
                🌍 Currency Conversion
            </Typography>
            <Typography variant="body1" component="p">
                Our app uses live exchange rates to show how your EMI would look
                in different currencies. This is helpful if you're comparing
                loans in different countries or currencies.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>
                🙋 Need Help?
            </Typography>
            <Typography variant="body1" component="p">
                If you have any questions or feedback, feel free to{" "}
                <Link href="mailto:contact@devamit.info">reach out to us</Link>.
                We're always happy to help!
            </Typography>
        </Box>
    );
};

export default AboutUs;
