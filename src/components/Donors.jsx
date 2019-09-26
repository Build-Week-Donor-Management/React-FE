import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";



function Donors(props) {
    return (
      <div>
        <h1>Donor Page</h1>
        <Link to="/donorForm">Register Donor</Link>
        {props.donorList.map(donor => (
          <div keys={donor.id}>
            <img src={donor.avatar} alt={donor.first_name} />
            <h3 onClick={() => props.history.push(`/donor/${donor.id}/email`)}>({donor.first_name} {donor.last_name})</h3>
  
            {/* <p>({donor.first_name} {donor.last_name})</p> */}
  
          </div>
        ))}
      </div>
    );
  }


export default Donors;
