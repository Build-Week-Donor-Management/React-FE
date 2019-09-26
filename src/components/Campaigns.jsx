import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// import CampaignForm from "./CampaignForm"


function Campaigns(props) {
    return (
        <div>
            <h1>Campaigns Page</h1>
            {/* <Link to="/campaignForm">Create Campaign</Link> */}
            
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

export default Campaigns;

