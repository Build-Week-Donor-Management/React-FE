import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


// const CampaignCard = () => {
//   return (
//     <div>
//       <h3>Campaign Title</h3>
//       <p>Description</p>
//       <p>Donation Goal</p>
//     </div>
//   );
// };

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
      <img className="character-image" src={campaigncard.avatar} alt={campaigncard.first_name} />
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



export default CampaignCard;
