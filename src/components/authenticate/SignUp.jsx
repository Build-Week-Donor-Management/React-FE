import React, { useState } from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import axios from "axios";
import { Segment, Form, Button, Select, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Form as Formik, Field, withFormik } from "formik";
import Yup from "yup";
const SignUp = props => {
  return (
    <div className="signUp-wrapper">
      <Segment raised compact>
        <div className="signup-cta">
          <h1>Sign Up Today!</h1>
        </div>

        <Form>
          <Formik>
            <Form>
              <label>Username</label>
              <Field
                type="text"
                name="username"
                placeholder="Register your Username"
                required
              />
            </Form>
            <Form>
              <label>Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Register your password"
                required
              />
            </Form>

            <Form>
              <label>
                Account Type
                <ul>
                  <li>user</li>
                  <li>board</li>
                  <li>campaign</li>
                </ul>
              </label>
              <Field
                type="text"
                name="type"
                placeholder="What type of account?"
              />
            </Form>
            {/* <Form.Field>
              <Field type="radio" name="user" />
              <label>User</label>
              <Field type="radio" name="board" />
              <label>board</label>
              <Field type="radio" name="campaign" />
              <label>campaign</label>
            </Form.Field> */}
            <Form>
              <label>Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Register your Email"
              />
            </Form>

            <Form>
              <label>Phone Number</label>
              <Field type="text" name="phone" placeholder="Phone Number" />
            </Form>
            <Form>
              <label>Address</label>
              <Field type="text" name="address" placeholder="Address" />
            </Form>
            <Button type="submit">Submit</Button>
            <Link to="/login">
              <p>Already have an Account?</p>
            </Link>
          </Formik>
        </Form>
      </Segment>
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || "",
      email: values.email || "",
      phone: values.phone || "",
      address: values.address || "",
      type: values.user || ""
    };
  },
  handleSubmit(values, props) {
    axios
      .post(
        "https://donation-management.herokuapp.com/donate/register/user",
        values
      )
      .then(res => {
        console.log("res", res);
        alert("An Account was created. Please Login.");
      })
      .then(res => {
        props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  }
})(SignUp);
export default FormikForm;
