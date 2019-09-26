import React, { useState } from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import axios from "axios";
import { Segment, Form, Button, Select, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Form as Formik, Field, withFormik } from "formik";

const accountOptions = [
  { key: "u", text: "User", value: "user" },
  { key: "b", text: "Boardmember", value: "board" },
  { key: "c", text: "Campaign", value: "campaign" }
];

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
            {/* <Form.Field
              control={Select}
              options={accountOptions}
              name="dropdown"
              type=
              label={{
                children: "Account type",
                htmlFor: "form-select-control-type"
              }}
              placeholder="Account type"
              search
              searchInput={{ id: "form-select-control-type" }}
              required
            /> */}
            <Form>
              <label>Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Register your Email"
                required
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
      address: values.address || ""
    };
  },
  handleSubmit(values, props) {
    axios
      .post(
        // `https://donation-management.herokuapp.com/donate/register/${dropdown}`,
        "https://donation-management.herokuapp.com/donate/register/user",
        values
      )
      .then(res => {
        console.log("res", res);
        alert("An Account was created. Please Login.");
      })
      // .then(res => {
      //   props.history.push("/login");
      // })
      .catch(err => {
        console.log(err);
      });
  }
})(SignUp);
export default FormikForm;

// const SignUp = props => {
//   return (
//     <Segment raised compact>
//       <Form>
//         <Formik>
//           <Form.Field>
//             <Field
//               type="text"
//               name="username"
//               placeholder="Please enter a username"
//             />
//           </Form.Field>
//           <Form.Field>
//             <Field
//               type="password"
//               name="password"
//               placeholder="Please enter your password"
//             />
//           </Form.Field>
//           <Button type="submit">Register</Button>
//           <Link to="/login">
//             <p>Already have an Account?</p>
//           </Link>
//         </Formik>
//       </Form>
//     </Segment>
//   );
// };

// const FormikForm = withFormik({
//   mapPropsToValues(values) {
//     return {
//       username: values.username || "",
//       password: values.password || ""
//     };
//   },
//   handleSubmit(values, props) {
//     console.log(values);
//     axios
//       .post(
//         "https://donation-management.herokuapp.com/donate/register/user",
//         values
//       )
//       .then(res => {
//         //localStorage.setItem('token', res.data.payload)
//         alert("Account was created. You will be redirected to login.");
//       })
//       .then(res =>
//         setTimeout(() => {
//           props.props.history.push("/login");
//         }, 1000)
//       )
//       .catch(err => console.log(err));
//   }
// })(SignUp);

// export default FormikForm;
