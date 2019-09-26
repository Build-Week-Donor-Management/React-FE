import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// import CampaignForm from "./CampaignForm"


function Campaigns(props) {
  return (
    <>
    <nav>
        <h1>Campaigns Page</h1>
        <Link to="/campaignForm">Create Campaign</Link>
      </nav>
    <div className="characters-list-wrapper">
      {props.campaignList.map(campaign => (
        <div className="character-card" keys={campaign.id}>
          <h3 onClick={() => props.history.push(`/campaign/${campaign.id}/email`)}>Our campaign name is {campaign.last_name} </h3>
          <p>Managed by {campaign.first_name}  </p>
          <p>({campaign.email})</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Campaigns;

