import React, { useState } from 'react';
import axios from 'axios';
import {Button, TextField, Stack} from "@mui/material"
export default function AddTags() {
  const [tagName, createTag] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    const post = { tagName: tagName }
    try {
      const res = await axios.post("https://localhost:5001/api/Tags", post)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <TextField
        sx={{ height: "56px", width: "200px", margin: "25px" }}
          variant="outlined"
          label="Name"
          id="name"
          onChange={(event) => {
            createTag(event.target.value)
          }}
          value={tagName}
        />
      </Stack>
     
      <Button variant="outlined"
       color="primary"
        type="submit"
        sx={{ height: "56px", width: "200px", margin: "25px" }}
        >
        Add Tag
      </Button>
    </form>
  );
}


