import { Container, Typography, Link } from "@mui/material";
import NextLink from "next/link";

const Footer = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: "auto", p: 4 }}>
            <Typography variant="body2" textAlign="center">
                Copyright &copy;{" "}
                <NextLink href="/" passHref>
                    <Link color="inherit" underline="hover">
                        {"<ProjectName>"}
                    </Link>
                </NextLink>{" "}
                {new Date().getFullYear()}
            </Typography>
        </Container>
    );
};

export default Footer;