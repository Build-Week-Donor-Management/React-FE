// app=>login=> dashboard=>create a campaign =>or add a donor => dashboard
import React from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { Form } from "semantic-ui-react";

const login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-cta">
        <h1>Please Log</h1>
      </div>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Register your password" />
        </Form.Field>
        <Button>Log In</Button>
      </Form>
    </div>
  );
};

export default login;
