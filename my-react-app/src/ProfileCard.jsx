import React from "react";

function ProfileCard(props) {
    return (
        <div className="profile-card">
            <img src={props.image} alt="profile" width="100" />
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </div>
    );
}

export default ProfileCard;
