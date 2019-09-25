// app=>login=> dashboard=>create a campaign =>or add a donor => dashboard
import React, { useState } from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import { Segment, Form, Button, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

const LogIn = props => {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const changeHandler = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const submitHandler = (event, state, value) => {
    event.preventDefault();
    console.log(state);
    axiosWithAuth()
      .post("/donate/login", value)
      .then(res => {
        localStorage.setItem("token", res.data.token);
      })
      .then(res =>
        setTimeout(() => {
          props.props.history.push("/dashboard");
        }, 1000)
      )
      .catch(err => console.log(err));
    setState({
      username: "",
      password: ""
    });
  };

  return (
    <div className="login-wrapper">
      <Segment raised compact>
        <div className="login-cta">
          <h1>Please Log In</h1>
        </div>
        <Form onSubmit={event => submitHandler(event, state)}>
          <Form.Field>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={state.username}
              onChange={changeHandler}
              placeholder="Username"
              fluid
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Register your password"
              value={state.password}
              onChange={changeHandler}
              required
            />
          </Form.Field>
          <Button>Log In</Button>
          <Link to="/signup">
            <p>Need to create an Account?</p>
          </Link>
        </Form>
      </Segment>
    </div>
  );
};

export default LogIn;
