import { Container } from "@mui/material";
import React from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default HomeLayout;
