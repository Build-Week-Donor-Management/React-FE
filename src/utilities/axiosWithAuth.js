import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://donation-token.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};
