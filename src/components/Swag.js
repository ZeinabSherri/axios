import React, { useState, useEffect, Link } from "react";
import axios from "axios";
import { Box, TextField, Button, Grid, Typography, Card, CardContent,  } from "@mui/material";

function User() {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [message, setMessage] = useState("");

    const handleusername = (event) => {
    const user_name = event.target.value;
    setUsername(user_name);
  };

  const handleemail = (event) => {
    const user_email = event.target.value;
    setUseremail(user_email);
  };



  const submitUser = async (e) => {
    e.preventDefault();
    const userdata = {
      user_name: username,
      user_email: useremail,
      
    };
    await axios
      .post(
        "https://localhost:5001/api/Users",
        JSON.stringify(userdata)
      )
      .then((result) => {
        setMessage(result.data.msg);
        console.log(result.data);
        console.log(result.data.msg);
      });
  };
  return (

    <Grid container direction={"row"} spacing={9}>

            <Card variant="outlined" sx={{ minWidth: 500}}>
                <CardContent>
                    <Typography variant="h4" component="div">
                        User List
                    </Typography>
                </CardContent>
               </Card>

            <Grid item>
            <TextField label="User Name" color="secondary" focused  name="user_name"
                  className="form-control p-2"
                  onChange={(e) => handleusername(e)} />
             </Grid>
             <Grid item>
             <TextField label="Email" color="secondary" focused     name="user_email"
                  className="form-control p-2"
                  onChange={(e) => handleemail(e)}/>
                  </Grid>
              <br></br>
              <Grid item>
              <Button variant="contained" onSubmit={submitUser} >Submit</Button>
              </Grid>
      </Grid>
   
  );
}

export default User;

