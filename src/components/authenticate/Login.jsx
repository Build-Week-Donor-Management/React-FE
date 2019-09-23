// app=>login=> dashboard=>create a campaign =>or add a donor => dashboard
import React from "react";
import axiosWithAuth from "../../utilities/axiosWithAuth";
import { Segment, Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="login-wrapper">
      <Segment raised compact>
        <div className="login-cta">
          <h1>Please Log In</h1>
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
          <Link to="/signup">
            <p>Need to create an Account?</p>
          </Link>
        </Form>
      </Segment>
    </div>
  );
};

export default login;
