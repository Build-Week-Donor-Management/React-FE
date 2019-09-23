import React from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { Segment, Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp-wrapper">
      <Segment raised compact>
        <div className="signup-cta">
          <h1>Sign Up Today!</h1>
        </div>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input type="text" placeholder="Register a Name" />
          </Form.Field>
          <Form.Field>
            <label>Organization's Name</label>
            <input type="text" placeholder="Register an Organization" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input type="email" placeholder="Register your Email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="Register your password" />
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
