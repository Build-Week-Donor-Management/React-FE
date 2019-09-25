import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
function Home(params) {
  return <h1>Home Page</h1>;
}
function Campaigns(params) {
  return <h1>Campaign Page</h1>;
}
function Donor(params) {
  return <h1>Donor Page</h1>;
}
function DashBoard2(params) {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/campaign">Campaign</Link>
      <Link to="/donor">Donor</Link>
      {/* <Route></Route> */}
    </BrowserRouter>
  );
}
export default DashBoard2;
