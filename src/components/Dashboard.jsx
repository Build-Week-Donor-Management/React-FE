import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./Home";
import Donors from "./Donors";
import DonorCard from "./DonorCard";
import Campaigns from "./Campaigns";
import CampaignForm from "./CampaignForm"
import CampaignCard from "./CampaignCard";
import Logout from "./Logout";



// import { useState, useEffect } from "react";
// import { withFormik, Form as FormikForm, Field as FormikField } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { Button, Checkbox, Form, Dropdown} from "semantic-ui-react";


// import { Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'

// const ThemingLayout = () => (
//   <Container style={{ marginTop: '3em' }}>
// <Grid columns={3} doubling>
//       <Grid.Column>
//         <Menu
//           items={[
//             { key: '1', href: "/logout", name: 'link-1', content: 'Link' },
//             { key: '2', name: 'link-2', content: 'Link' },
//             { key: '3', name: 'link-3', content: 'Link' },
//           ]}
//           pointing
//           secondary
//         />
//       </Grid.Column>
//       </Grid>
//   </Container>
//   )


//  const Display1 = props => {
//   return (
//     <div>
//       <h3>Registered Donors</h3>
//       {props.users.map(user => (
//         <>
//           First Name: {user.fName} <br />
//           Middle Name: {user.mName} <br />
//           Last Name: {user.lName} <br />
//           Email: {user.email} <br />
//           {/* Mailing List: {user.mList} <br /><br /><br /> */}
//         </>
//       ))}
//     </div>
//   );
// };

//  const Display2 = props => {
//   return (
//     <div>
//       <h3>Registered Campaign</h3>
//       {props.users.map(user => (
//         <>
//           First Name: {user.cName} <br />
//           Email: {user.email} <br />
//           <br />
//           <br />
//         </>
//       ))}
//     </div>
//   );
// };








const data = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  },
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
  }
]



// //dashboard component
function DashBoard(params) {

  return (

    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/campaign">Campaigns</Link>
          </li>
          <li>
            <Link to="/donor">Donors</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>

      <Route exact path="/" component={Home} />

      <Route exact path="/campaign"
        render={props => (
          <Campaigns {...props} campaignList={data} />
        )}
      />
      {/* <Route
        path exact to="/campaignForm"
        component={CampaignForm}
      /> */}
      <Route
        path="/campaign/:id"
        render={props => (
          <CampaignCard {...props} campaignList={data} />
        )}
      />

      <Route
        path="/donor"
        render={props => (
          <Donors {...props} donorList={data} />
        )}
      />

      <Route
        path="/donor/:id"
        render={props => (
          <DonorCard {...props} donorList={data} />
        )}
      />

      <Route path="/logout" component={Logout} />

    </BrowserRouter>

  );
}
export default DashBoard;
