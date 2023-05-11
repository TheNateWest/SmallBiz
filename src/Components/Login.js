import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie";

const Login = (props) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    props.addUser(state.username);
    document.cookie = cookie.serialize("loggedIn", "true", { maxAge: 30 });

    navigate("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form
          className="login-form"
          onSubmit={login}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginTop: 40,
          }}
        >
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
