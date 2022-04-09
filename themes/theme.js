import { createTheme, responsiveFontSizes } from "@mui/material";
import { teal, blue, pink, purple, cyan } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: purple[400],
        },
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
    },
    typography: {
        fontFamily: ["Inter"],
    },
    shape: {
        borderRadius: 8,
    },
});

export default responsiveFontSizes(theme);
