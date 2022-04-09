import { createTheme, responsiveFontSizes } from "@mui/material";
import { pink, purple } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: purple,
        secondary: pink,
        text: {
            primary: "#2D3743",
            secondary: "#646E73",
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#9c27b0",
                    color: "white",
                },
            },
        },
    },
    typography: {
        fontFamily: ["Inter"],
    },
    shape: {
        borderRadius: 8,
    },
});

export default responsiveFontSizes(theme);
