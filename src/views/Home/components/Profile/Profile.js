import React from "react";
import {
  ProfileContainer,
  ImageProfileContainer,
  ImageProfile,
  TextName,
  TextCharge,
} from "./Style";
import profilePhoto from "./../../../../assets/images/profile_photo.jpg";
import Accounts from "../../../../components/Accounts";

const Profile = () => {
  return (
    <ProfileContainer>
      <ImageProfileContainer>
        <ImageProfile src={profilePhoto} alt="Profile Image" />
      </ImageProfileContainer>
      <TextName>Miguel Valencia</TextName>
      <TextCharge>I'm a Developer</TextCharge>
      <Accounts />
    </ProfileContainer>
  );
};

export default Profile;
