import React, { useState, useEffect } from "react";
import { Form as FormikForm, Field as FormikField } from "formik";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Display2 } from "./Display";

// import {FormikLoginForm2} from "./Form";


function CampaignForm({ errors, touched, values, status }) {
  const [users, setUsers] = useState([]);
  const [usersState, setUsersState] = useState({ checked: false });
  const toggle = () =>
    setUsersState(prevState => ({ checked: !prevState.checked }));
  useEffect(() => {
    if (status) {
      setUsers(users.concat(status));
    }
  }, [status]);
  return (
    <FormikForm>
      <Form style={{ width: 800, margin: "auto" }}>
        <h1>Campaign Form</h1>
        <br />
        <Form.Field>
          <label>
            Campaign Name
            <FormikField type="text" name="cName" placeholder="Campaign Name" />
            {touched.cName && errors.cName && <p>{errors.cName}</p>}
          </label>
        </Form.Field>
        <br />
        <Form.Field>
          <label>
            Email
            <FormikField
              type="email"
              name="email"
              placeholder="Enter organisation email address"
            />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </label>
        </Form.Field>
        <br />
        <Form.Input
          label="Office Phone"
          type="phone"
          placeholder="+233 888 8888 888"
        />
        <br />

        <Form.TextArea label="Address" placeholder="Campaign Office Address" />
        <br />

        <Form.TextArea
          label="Campaign Goals"
          placeholder="Tell us about your campaign goals and what you aim to achieve with donated funds"
        />
        <br />
        <br />
        <br />
        <Form.Field>
          <Button size="huge" animated="fade">
            <Button.Content visible style={{ width: 100 }}>
              Submit
            </Button.Content>
            <Button.Content hidden>Click to Submit</Button.Content>
          </Button>
        </Form.Field>
        <Display2 users={users} />
      </Form>
    </FormikForm>
  );
  // return <h1>Hello World</h1>
}
export default CampaignForm;
