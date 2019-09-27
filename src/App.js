import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import SignUp from "./components/authenticate/SignUp";
import LogIn from "./components/authenticate/Login";
import { UserContext } from "./components/Context/UserContext";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/authenticate/PrivateRoute";

function App() {
  return (
    <div className="App">
      <UserContext.Provider>

        {//co}
        <Switch>
          <Route exact path="/SignUP" render={props => <SignUp {...props} />} />
          <Route path="/login" render={props => <LogIn {...props} />} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
