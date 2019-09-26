import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


// const DonorCard = () => {
//   return (
//     <div>
//       <h3></h3>
//       <p></p>
//       <p></p>
//       <p></p>
//     </div>
//   );
// };
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
      <img className="character-image" src={donorcard.avatar} alt={donorcard.first_name} />
      <div>
        <h1>{donorcard.first_name} {donorcard.last_name}</h1>
        <h4>({donorcard.email})</h4>

        <nav>
          <Link to={`/donor/${donorcard.id}/email`}>Email</Link>
        </nav>
        <Route
          path="/donor/:id/email"
          render={props => (
            <DonorCardEmail {...props} donorcard={donorcard} />
          )}
        />
      </div>
    </div>
  );
}


export default DonorCard;
