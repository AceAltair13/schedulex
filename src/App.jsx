import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./helpers/SnackBarUtils";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider
                maxSnack={2}
                anchorOrigin={{ horizontal: "center", vertical: "top" }}
            >
                <SnackbarUtilsConfigurator />
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact
                            component={route.component}
                        />
                    ))}
                </Switch>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;
