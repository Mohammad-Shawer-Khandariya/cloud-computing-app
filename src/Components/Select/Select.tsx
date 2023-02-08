import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    name: string;
    selectedValue: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    data: string[]
}

export default function SelectVariants(props: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    props.setValue(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
    <InputLabel id="demo-simple-select-standard-label">{props.name}</InputLabel>
    <Select
        labelId={`select-${props.name}-label`}
        id={`select-${props.name}-standard`}
        value={props.selectedValue}
        onChange={handleChange}
        label={props.name}
    >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        {props.data.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
    </Select>
    </FormControl>
  );
}