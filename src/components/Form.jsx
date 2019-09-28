import { withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import DonorForm from "./DonorForm";
import CampaignForm from "./CampaignForm";
import { axiosWithAuth } from "../utilities/axiosWithAuth";


export const FormikLoginForm1 = withFormik({
  mapPropsToValues({ name, email }) {
    return {
      name: name || "",
      email: email || "",
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3)
      .required(),
    email: Yup.string()
      .email()
      .required()
  }),

  handleSubmit(values, { resetForm, setStatus }) {
    const sentData = {
      name: values.name,
      email: values.email,
    };

    const authorization = localStorage.getItem('token')
    axios.post('https://donation-management.herokuapp.com/donate/donor/', sentData,
      { headers: { Authorization: authorization } }
    )
      .then(data => {
        setStatus(data.data)
        resetForm();
      }
      )
  }
})(DonorForm);


export const FormikLoginForm2 = withFormik({
  mapPropsToValues({ name, email, goal }) {
    return {
      name: name || "",
      email: email || "",
      goal: goal || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3)
      .required(),
    email: Yup.string()
      .email()
      .required(),
    goal: Yup.string()
      .required(),
  }),

  handleSubmit(values, { resetForm, setStatus }) {
    const sentData = {
      name: values.name,
      // email: values.email,
      goal: values.goal

    };
    console.log(values)

    const authorization = localStorage.getItem('token')
    axios.post('https://donation-management.herokuapp.com/donate/campaign/', sentData,
      { headers: { Authorization: authorization } }
    )
      .then(data => {
        setStatus(data.data)
        resetForm();
      }
      )
      // axiosWithAuth()
      //   .post("/campaign", sentData)
      //   .then(response => {
      //     setStatus(response.data);
      //     resetForm();
      //   })
      .catch(error => {
        console.log(error);
      });
  }
})(CampaignForm);
