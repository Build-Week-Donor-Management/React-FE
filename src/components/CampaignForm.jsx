
import React, { useState, useEffect } from "react";
import { Form as FormikForm, Field as FormikField } from "formik";
import { Button, Checkbox, Form } from "semantic-ui-react";


function CampaignForm({ errors, touched, values, status }) {

  const [users, setUsers] = useState([]);
  const [usersState, setUsersState] = useState({ checked: false });

  const toggle = () => setUsersState((prevState) => ({ checked: !prevState.checked }))


  useEffect(() => {
    if (status) {
      setUsers(users.concat(status))
    }

  }, [status])


  return (

    <FormikForm>
      <Form style={{ width: 800, margin: "auto" }}>
        <h1>Campaign Form</h1>
        <br />

        <Form.Field>
          <label>
            Campaign Name:
              <FormikField
              type="text"
              name="cName"
              placeholder="Campaign Name"
            />
            {touched.cName && errors.cName && <p>{errors.cName}</p>}
          </label>
        </Form.Field>

        <Form.Field>
          <label>
            Email:
            <FormikField
              type="email"
              name="email"
              placeholder="Enter organisation email address"
            />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </label>
        </Form.Field>

        <Form.Input label="Office Phone" type="phone" placeholder="+233 888 8888 888" />
        
        <Form.TextArea label="Address" placeholder="Campaign Office Address" />
        
        <Form.TextArea label="Campaign Goals" placeholder="Tell us about your campaign goals and what you aim to achieve with donated funds" />

        <Form.Field>
          <Button animated='fade'>
            <Button.Content visible style={{ width: 100 }}>Submit</Button.Content>
            <Button.Content hidden>Click to Submit</Button.Content>
          </Button>
        </Form.Field>

        {/* <Display users={users} /> */}
      </Form>
    </FormikForm>

  );
}


export default CampaignForm;

