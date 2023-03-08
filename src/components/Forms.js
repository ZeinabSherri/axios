import axios from "axios";
import React, {useEffect, useState} from "react";

import { Typography,Card, CardContent, List, Button, Box, Stack, TextField } from "@mui/material";

export default function Forms() {

  const [User, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/Users")
      .then((res) => setUser(res.data));
  }, []);

  function UpdateUser(){
    let nextuser=1

  useEffect(() => {
    axios
      .post("https://localhost:5001/api/Users", 
      {id: nextuser,
      name: "",
      email: "",})
      .then((res) => setUser(res.data));
  }, []);

}

  if (!User) return "No Users!"

  return (
    <Box sx={{ width: "500px" }}>
      <Card variant="outlined" sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h4" component="div">
                        User List
                    </Typography>
                </CardContent>
            </Card>
            <Stack>
              <TextField variant="outlined"
                    label="Update user"
                   
                    key={User.username}
                    onChange={(e) =>
                        setUser({
                            name: e.target.value,
                            catagory: User.catagory,
                        })
                    }></TextField>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                sx={{ height: "56px", width: "200px", margin: "25px" }}
                onClick={() => {
                    setUser([
                        ...User,
                        {
                         
                            name: User.username,
                            email: User.email,
                        },
                    ]);
                    setUser({ name: "", email: "" });
                }}>
                Submit
            </Button>

            </Stack>
            
            <List>
            <div style={{ height: 600 }}>
        {User.map((User, i) => (
          <li key={User.username}>{User.id}  .  {User.username}, {User.email}</li>
        ))}
        
            </div>
            
      </List>
    </Box>
  );
}
