import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const CustomSelect = ({ title, placeholder, options, props }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{title}</InputLabel>
      <Select variant="outlined" label={title} {...props}>
        {options.map((option) => {
          <MenuItem value={option}>{option}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
