import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";



import { useState, useEffect } from "react";
import { withFormik, Form as FormikForm, Field as FormikField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
// import { Display2 } from "./Display";


 const Display2 = props => {
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



function CampaignForm ({ errors, touched, values, status }){
  const [users, setUsers] = useState([]);
  const [usersState, setUsersState] = useState({ checked: false });
  const toggle = () =>
    setUsersState(prevState => ({ checked: !prevState.checked }));
  useEffect(() => {
    if (status) {
      setUsers(users.concat(status));
    }
  }, [status]);
  
  return (
    <FormikForm>
      <Form style={{ width: 800, margin: "auto" }}>
        <h1>Campaign Form</h1>
        <br />
        <Form.Field>
          <label>
            Campaign Name
            <FormikField type="text" name="cName" placeholder="Campaign Name" />
            {touched.cName && errors.cName && <p>{errors.cName}</p>}
          </label>
        </Form.Field>
        <br />
        <Form.Field>
          <label>
            Email
            <FormikField
              type="email"
              name="email"
              placeholder="Enter organisation email address"
            />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </label>
        </Form.Field>
        <br />
        <Form.Input
          label="Office Phone"
          type="phone"
          placeholder="+233 888 8888 888"
        />
        <br />

        <Form.TextArea label="Address" placeholder="Campaign Office Address" />
        <br />

        <Form.TextArea
          label="Campaign Goals"
          placeholder="Tell us about your campaign goals and what you aim to achieve with donated funds"
        />
        <br />
        <br />
        <br />
        <Form.Field>
          <Button size="huge" animated="fade">
            <Button.Content visible style={{ width: 100 }}>
              Submit
            </Button.Content>
            <Button.Content hidden>Click to Submit</Button.Content>
          </Button>
        </Form.Field>
        <Display2 users={users} />
      </Form>
    </FormikForm>
  );
}






export const FormikLoginForm2 = withFormik({
  mapPropsToValues({ cName, email }) {
    return {
      cName: cName || "",
      email: email || ""
    };
  },

  validationSchema: Yup.object().shape({
    cName: Yup.string()
      .min(3)
      .required(),
    email: Yup.string()
      .email()
      .required()
  }),

  handleSubmit(values, { resetForm, setStatus }) {
    const sentData = {
      cName: values.cName,
      email: values.email
    };

    axios
      .post("https://reqres.in/api/users", sentData)
      .then(response => {
        setStatus(response.data);
        resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  }
})(CampaignForm);




// export const Display2 = props => {
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


function Home(params) {
  return <h1>Home Page</h1>;
}



//campaign component and sub components
function Campaigns(props) {
  return (
    <div>
      <h1>Campaigns Page</h1>
      {props.campaignList.map(campaign => (
        <div keys={campaign.id}>
          <ul>
            <li>
              <h3 onClick={() => props.history.push(`/campaign/${campaign.id}/email`)}>Our campaign name is {campaign.last_name} </h3>
              <p>Managed by {campaign.first_name}  </p>
              <p>({campaign.email})</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
function CampaignCardEmail(props) {
  return (
    <p>{props.campaigncard.email}</p>
  )
}
function CampaignCard(props) {
  const campaigncard = props.campaignList.find(
    cCard => cCard.id === parseInt(props.match.params.id, 10)
  );

  return (
    <div>
      <h1>Campaign Card</h1>
      <img src={campaigncard.avatar} alt={campaigncard.first_name} />
      <div>
        <h1>{campaigncard.first_name} {campaigncard.last_name}</h1>
        <h4>({campaigncard.email})</h4>

        <nav>
          <Link to={`/campaign/${campaigncard.id}/email`}>Email</Link>
        </nav>
        <Route
          path="/campaign/:id/email"
          render={props => (
            <CampaignCardEmail {...props} campaigncard={campaigncard} />
          )}
        />

      </div>
    </div>
  );
}




//donor component and sub components
function Donors(props) {
  return (
    <div>
      <h1>Donor Page</h1>
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
function DonorCardEmail(props) {
  return (
    <p>{props.donorcard.email}</p>
  )
}
function DonorCard(props) {
  const donorcard = props.donorList.find(
    dCard => dCard.id === parseInt(props.match.params.id, 10)
  );

  return (
    <div>
      <h1>Donor Card</h1>
      <img src={donorcard.avatar} alt={donorcard.first_name} />
      <div>
        <h1>{donorcard.first_name} {donorcard.last_name}</h1>
        <h4>({donorcard.email})</h4>

        <nav>
          <Link to={`/campaign/${donorcard.id}/email`}>Email</Link>
        </nav>
        <Route
          path="/campaign/:id/email"
          render={props => (
            <DonorCardEmail {...props} donorcard={donorcard} />
          )}
        />
      </div>
    </div>
  );
}



//logot component
function Logout(params) {
  return <h1>Logout Page</h1>;
}




//dashboard component
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

      
      <Route path="/campaign"
        render={props => (
          <Campaigns {...props} campaignList={data} />
        )}
      // component={Campaigns}
      />
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
      // component={Donors}
      />
      <Route
        path="/donor/:id"
        render={props => (
          <DonorCard {...props} donorList={data} />
        )}
      />



      <Route path="/logot" component={Logout} />

    </BrowserRouter>
  );
}
export default DashBoard;
