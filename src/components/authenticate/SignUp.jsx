import React, { useState } from "react";
import axiosWithAuth from "../../utilities/axiosWithAuth";
import { Segment, Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [state, setState] = useState({});
  return (
    <div className="signUp-wrapper">
      <Segment raised compact>
        <div className="signup-cta">
          <h1>Sign Up Today!</h1>
        </div>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Register your First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Register your Last Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Organization's Name</label>
            <input
              type="text"
              name="organization"
              placeholder="Register an Organization"
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Register your Email"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Register your password"
            />
          </Form.Field>
          <Button>Sign Up</Button>
          <Link to="/login">
            <p>Already have an Account?</p>
          </Link>
        </Form>
      </Segment>
    </div>
  );
};
export default SignUp;
