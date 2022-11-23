import React from "react";
import style from "../../styles/Profile/Profile.module.css";
import ProfileInformation from "./ProfileInformation.component";
import ProfileSubscriptionInfo from "./ProfileSubscriptionInfo.component";
import ProfileSection from "./ProfileSection.component";

export default function CustomerCard(props) {
  return (
    <div className={style.section + " container"}>
      <ProfileSection>
        <ProfileSubscriptionInfo since={props.customer.createdAt} />
      </ProfileSection>
      <ProfileSection>
        <ProfileInformation customer={props.customer} />
      </ProfileSection>
      <ProfileSection>INFORMACIÓN DEL PLAN</ProfileSection>
    </div>
  );
}
