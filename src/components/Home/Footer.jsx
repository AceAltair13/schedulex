import { Container, Typography, Link } from "@mui/material";

const Footer = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: "auto", p: 4 }}>
            <Typography variant="body2" textAlign="center">
                Copyright &copy;{" "}
                <Link
                    color="inherit"
                    underline="hover"
                    href="https://github.com/AceAltair13/schedulex"
                >
                    ScheduleX
                </Link>{" "}
                {new Date().getFullYear()}
            </Typography>
        </Container>
    );
};

export default Footer;
