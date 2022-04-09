import { GitHub, LinkedIn } from "@mui/icons-material";
import { Avatar, Card, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

const TeamAboutCard = ({ image, name, desc, linkedin, github }) => {
  return (
    <Card
      sx={{
        p: 5,
        minWidth: 250,
      }}
    >
      <Grid direction="column" alignItems="center" container spacing={3}>
        <Grid item>
          <Avatar alt="" src={image} sx={{ height: 120, width: 120 }} />
        </Grid>
        <Grid item>
          <Typography variant="h5" fontWeight="fontWeightBold">
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            {desc}
          </Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item>
            <IconButton href={github}>
              <GitHub />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href={linkedin}>
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TeamAboutCard;
