import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
//components
import SignUp from "./components/authenticate/SignUp";
import LogIn from "./components/authenticate/Login";
import { UserContext } from "./components/Context/UserContext";
import Dashboard2 from "./components/Dashboard2";
import PrivateRoute from "./components/authenticate/PrivateRoute";

function App() {
  return (
    <div className="App">
      <UserContext.Provider>
        <Switch>
          <Route exact path="/signup" render={props => <SignUp {...props} />} />
          <Route path="/login" render={props => <LogIn {...props} />} />
          <PrivateRoute path="/" component={Dashboard2} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
