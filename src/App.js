import React from "react";
// import "./App.css";
import { Route, Switch } from "react-router-dom";
//components
import SignUp from "./components/authenticate/SignUp";
import LogIn from "./components/authenticate/Login";
import { UserContext } from "./components/Context/UserContext";
import Dashboard from "./components/Dashboard";
// import { FormikLoginForm1, FormikLoginForm2 } from "./components/Dashboard";
// import { FormikLoginForm1, FormikLoginForm2 } from "./components/Form";

import PrivateRoute from "./components/authenticate/PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider>
        <Switch>
          <Route exact path="/signup" render={props => <SignUp {...props} />} />
          <Route path="/login" render={props => <LogIn {...props} />} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </UserContext.Provider> */}
      {/* <FormikLoginForm1 />
      <FormikLoginForm2 /> */}
      <Dashboard />
    </div>
  );
}

export default App;
