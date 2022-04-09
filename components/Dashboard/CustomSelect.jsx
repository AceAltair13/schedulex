import React from "react";
import { FormControl, InputLabel, Select } from "@mui/material";

const CustomSelect = ({ title, placeholder, children, props }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{title}</InputLabel>
      <Select variant="outlined" label={title} {...props}>
        {children}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
