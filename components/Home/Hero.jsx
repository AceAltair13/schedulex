import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useRef } from "react";
  import lottie from "lottie-web";
  import TimeTableImage from "../../public/images/timetable.json";
  import { useRouter } from "next/router";
  
  const Hero = () => {
    const container = useRef(null);
    const router = useRouter();
  
    useEffect(() => {
      const img = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: TimeTableImage,
      });
  
      return () => {
        img.destroy();
      };
    });
  
    return (
      <>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ my: "auto" }}
        >
          <Grid item md={6}>
            <Container ref={container} maxWidth="sm" />
          </Grid>
          <Grid item md={6}>
            <Stack spacing={1} justifyContent="center" pr={{ xs: 0, md: 6 }}>
              <Typography
                variant="h3"
                fontWeight="fontWeightBold"
                sx={{
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                Generating timetable has never been easier!
              </Typography>
  
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                With just a few steps, and some inputs here and there, create a
                timetable for your entire institute easily.
              </Typography>
  
              <Box
                pt={3}
                sx={{
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                <Button
                  onClick={(e) => router.push("/institute-details")}
                  variant="contained"
                  sx={{ px: 5, py: 1.5 }}
                >
                  Get Started
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </>
    );
  };
  
  export default Hero;