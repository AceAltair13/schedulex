import React from "react";
import { Stack, Typography, Grid, Container } from "@mui/material";
import TeamAboutCard from "./TeamAboutCard";
import teamInfo from "../../constants/teamInfo";

const About = () => {
  return (
    <Container>
      <Stack direction="column">
        <Typography variant="h3" color="primary" textAlign="center">
          About Us
        </Typography>
        <Grid container spacing={5} sx={{ my: 2 }}>
          {teamInfo.map((member, index) => (
            <Grid item md={4} key={index}>
              <TeamAboutCard
                name={member.name}
                desc={member.desc}
                linkedin={member.linkedin}
                github={member.github}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default About;
