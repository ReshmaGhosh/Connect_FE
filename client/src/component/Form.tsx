import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function Form() {
  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
  });

  function getUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, email: event.target.value });
  }
  console.log(userInformation, "user");

  function getUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, password: event.target.value });
  }
  console.log(userInformation, "userpassword");

  function onClickHandler() {}

  const endpoint = "http://localhost:4000/users";
  axios
    .post(endpoint, userInformation)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  return (
    <div>
      Form
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        onChange={getUserEmail}
      />
      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        onChange={getUserPassword}
      />
      <Button onClick={onClickHandler}>Submit</Button>
    </div>
  );
}

export default Form;
