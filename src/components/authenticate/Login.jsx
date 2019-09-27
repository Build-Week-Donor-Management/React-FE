import React from "react";
import { Form as Formik, Field, withFormik } from "formik";
import { Segment, Form, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogIn = props => {
  return (
    <Segment raised compact>
      <div className="login-cta">
        <h1>Please Log In</h1>
      </div>
      <Form>
        <Formik>
          <Form.Field>
            <label>Username</label>
            <Field type="text" name="username" placeholder="username" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Field type="password" name="password" placeholder="password" />
          </Form.Field>
          <Form>
            <Field component="select" name="type">
              <option value="user">User</option>
              <option value="board">Boardmember</option>
              <option value="campaign">Campaign</option>
            </Field>
          </Form>
          <Button type="submit">Login</Button>
        </Formik>
        <Link to="/signup">
          <p>Need to create an Account?</p>
        </Link>
      </Form>
    </Segment>
  );
};

const FormikForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || "",
      type: values.user || values.board || values.campaign || "user"
    };
  },
  handleSubmit(values, props) {
    axios
      .post("https://donation-management.herokuapp.com/donate/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log("res login", res);
      })
      .then(res =>
        setTimeout(() => {
          props.props.history.push("/dashboard");
        }, 1000)
      )
      .catch(err => console.log(err));
  }
})(LogIn);

export default FormikForm;
