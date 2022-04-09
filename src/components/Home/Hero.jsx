import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import TimeTableImage from "../../assets/timetable.json";
import { useHistory } from "react-router-dom";

const Hero = () => {
    const container = useRef(null);
    const router = useHistory();

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
                    <Stack
                        spacing={1}
                        justifyContent="center"
                        pr={{ xs: 0, md: 6 }}
                    >
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
                            With just a few steps, and some inputs here and
                            there, create a timetable for your entire institute
                            easily.
                        </Typography>

                        <Box
                            pt={3}
                            sx={{
                                textAlign: { xs: "center", md: "start" },
                            }}
                        >
                            <Button
                                onClick={() => router.push("/dashboard")}
                                variant="contained"
                                sx={{ px: 5, py: 1.5 }}
                            >
                                Create Your Timetable
                            </Button>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default Hero;
