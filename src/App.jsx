import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./helpers/SnackBarUtils";
import GeneratedTimetable from "./pages/dashboard/generated-timetable";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
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
                    <Route path="/view/:id">
                        <GeneratedTimetable />
                    </Route>
                </Switch>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;
