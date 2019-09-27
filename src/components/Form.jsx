import { withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import DonorForm from "./DonorForm";
import CampaignForm from "./CampaignForm";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

export const FormikLoginForm1 = withFormik({
  mapPropsToValues({ name, mName, lName, mList, email }) {
    return {
      name: name || "",
      // mName: mName || "",
      // lName: lName || "",
      email: email || "",
      // mList: mList || ""
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
      // email: values.email,
    };
    
    // const sentData = {
    //   name: values.name,
    //   mName: values.mName,
    //   lName: values.lName,
    //   email: values.email,
    //   mList: values.mList
    // };

    // axiosWithAuth()
    //   .post("/donor", sentData)
    //   .then(response => {
    //     console.log("pppp: ", response)
    //     setStatus(response.data);
    //     resetForm();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  
    const authorization = localStorage.getItem('token') 
    axios.put('https://donation-management.herokuapp.com/donate/donor/:id' + sentData,
    { headers: { Authorization: authorization } }
  )
    .then (data =>   
      {
        console.log("pppp: ", data)
        setStatus(data.data)
        resetForm();
     }
  )


  }
})(DonorForm);


export const FormikLoginForm2 = withFormik({
  mapPropsToValues({ name, email }) {
    return {
      name: name || "",
      email: email || ""
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
