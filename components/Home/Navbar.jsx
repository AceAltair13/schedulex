import {
    AppBar,
    Button,
    Stack,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import {
    usePopupState,
    bindMenu,
    bindTrigger,
} from "material-ui-popup-state/hooks";
import React from "react";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import routes from "./routes";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
    const router = useRouter();
    const popupState = usePopupState({
        variant: "popover",
        popupId: "homeMenu",
    });

    const desktopMenu = (
        <Stack
            spacing={2}
            direction="row"
            display={{ xs: "none", md: "block" }}
        >
            {routes.map((route, i) => (
                <Button
                    key={i}
                    variant="text"
                    color="primary"
                    onClick={() => router.push(route.path)}
                >
                    {route.label}
                </Button>
            ))}
            <IconButton href="https://github.com/AceAltair13/schedulex">
                <GitHubIcon fontSize="large" color="primary" />
            </IconButton>
        </Stack>
    );
    const mobileMenu = (
        <Menu {...bindMenu(popupState)}>
            {routes.map((route, i) => (
                <MenuItem onClick={() => router.push(route.path)} key={i}>
                    {route.label}
                </MenuItem>
            ))}
        </Menu>
    );

    return (
        <AppBar position="fixed" color="transparent" elevation={0}>
            <Toolbar>
                <Typography
                    variant="h4"
                    sx={{ flexGrow: 1 }}
                    color="primary.main"
                    fontWeight="fontWeightBold"
                >
                    ScheduleX
                </Typography>
                <IconButton
                    {...bindTrigger(popupState)}
                    color="primary"
                    sx={{ display: { xs: "block", md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
                {desktopMenu}
                {mobileMenu}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
