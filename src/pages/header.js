import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Header(props) {
const {handleChange, searchVal,statusChange,statusVal} = props;


  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <div style={{display:'flex'}}>
      <TextField placeholder='Filterhere..,' value={searchVal} onChange={handleChange}/>

       <FormControl style={{ minWidth: 120, marginLeft: "auto" }}>
 
  <Select
    value={statusVal}
    onChange={statusChange}
  >
    <MenuItem value={"all"}>All</MenuItem>
    <MenuItem value={"Alive"}>Alive</MenuItem>
    <MenuItem value={"Dead"}>Dead</MenuItem>
  </Select>
</FormControl> 
      </div>
    </>
  )
}
