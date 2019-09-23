import React from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { Form, Button } from "semantic-ui-react";

const SignUp = () => {
  return (
    <div className="signUp-wrapper">
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
      </Form>
    </div>
  );
};
export default SignUp;
