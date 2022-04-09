import { DeleteRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridToolbarContainer } from "@mui/x-data-grid";
import React from "react";

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <IconButton sx={{ marginLeft: "auto" }}>
        <DeleteRounded />
      </IconButton>
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
