import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://donation-management.herokuapp.com/donate",
    headers: {
      Authorization: token
    }
  });
};
// if else if check with properiety, rneder private route. case swtich with redux, manage state through each of the cases, ture if user, false for other user types. action create switch , if true render

//if state is user get this axios call
//use state and if else statement to conditional do the axios
//look at first testing project for help
