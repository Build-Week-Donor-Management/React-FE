import { withFormik } from "formik";
import * as Yup from "yup";
// import axios from "axios";

import DonorForm from "./DonorForm";
import CampaignForm from "./CampaignForm";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

export const FormikLoginForm1 = withFormik({
  mapPropsToValues({ name, mName, lName, mList, email }) {
    return {
      name: name || "",
      mName: mName || "",
      lName: lName || "",
      email: email || "",
      mList: mList || ""
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
      mName: values.mName,
      lName: values.lName,
      email: values.email,
      mList: values.mList
    };

    axiosWithAuth()
      .post("/donor", sentData)
      .then(response => {
        setStatus(response.data);
        resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  }
})(DonorForm);


export const FormikLoginForm2 = withFormik({
  mapPropsToValues({ cName, email }) {
    return {
      cName: cName || "",
      email: email || ""
    };
  },

  validationSchema: Yup.object().shape({
    cName: Yup.string()
      .min(3)
      .required(),
    email: Yup.string()
      .email()
      .required()
  }),

  handleSubmit(values, { resetForm, setStatus }) {
    const sentData = {
      cName: values.cName,
      email: values.email
    };

    axiosWithAuth()
      .post("/campaign", sentData)
      .then(response => {
        setStatus(response.data);
        resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  }
})(CampaignForm);
