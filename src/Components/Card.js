import React from "react";

export const Card = () => {
  const profile = this.props;
  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt="profile-img" />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
};
export default Card;
