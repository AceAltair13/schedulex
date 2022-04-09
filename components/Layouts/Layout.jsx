import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import theme from "../../themes/theme";

const Layout = ({ children }) => {
  return (
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
  );
};

export default Layout;
