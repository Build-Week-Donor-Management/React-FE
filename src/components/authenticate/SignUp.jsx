import React, { useState } from "react";
// import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import axios from "axios";
import { Segment, Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    organization: "",
    email: "",
    password: ""
  });

  const changeHandler = event => {
    setState({
      ...state,
      [event.target.name]: event.value
    });
    const submitHandler = (event, state) => {
      event.preventDefault();
      axios
        .post("/signup", state)
        .then(res => {
          props.history.push("/login");
        })
        .catch(err => {
          console.log(err);
        });
      setState({
        first_name: "",
        last_name: "",
        organization: "",
        email: "",
        password: ""
      });
    };
  };
  return (
    <div className="signUp-wrapper">
      <Segment raised compact>
        <div className="signup-cta">
          <h1>Sign Up Today!</h1>
        </div>
        <Form onSubmit={event => submitHandler(event, state)}>
          <Form.Field>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Register your First Name"
              value={state.first_name}
              onChange={changeHandler}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Register your Last Name"
              value={state.last_name}
              onChange={changeHandler}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Organization's Name</label>
            <input
              type="text"
              name="organization"
              placeholder="Register an Organization"
              value={state.organization}
              onChange={changeHandler}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Register your Email"
              value={state.email}
              onChange={changeHandler}
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
          <Button>Submit</Button>
          <Link to="/login">
            <p>Already have an Account?</p>
          </Link>
        </Form>
      </Segment>
    </div>
  );
};
export default SignUp;
