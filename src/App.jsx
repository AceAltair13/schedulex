import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
};

export default App;
