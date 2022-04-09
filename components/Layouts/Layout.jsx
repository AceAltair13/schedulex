import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "../../app/store";
import theme from "../../themes/theme";

let persistor = persistStore(store);

const Layout = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor.__PERSISTOR}>
                <ThemeProvider theme={theme}>
                    <Head>
                        <link
                            rel="stylesheet preload prefetch"
                            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                            as="style"
                            crossOrigin="anonymous"
                        />
                    </Head>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default Layout;
