import React from "react";

export const Display1 = props => {
  return (
    <div>
      <h3>Registered Donors</h3>
      {props.users.map(user => (
        <>
          First Name: {user.fName} <br />
          Middle Name: {user.mName} <br />
          Last Name: {user.lName} <br />
          Email: {user.email} <br />
          {/* Mailing List: {user.mList} <br /><br /><br /> */}
        </>
      ))}
    </div>
  );
};

export const Display2 = props => {
  return (
    <div>
      <h3>Registered Campaign</h3>
      {props.users.map(user => (
        <>
          First Name: {user.cName} <br />
          Email: {user.email} <br />
          <br />
          <br />
        </>
      ))}
    </div>
  );
};
