// import React from 'react'
import { ProfileContainer } from '../style';
import noImg from "../../../assets/img/noUser.webp"


export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContainer.Image src={noImg} />
      <div>
        <ProfileContainer.Name>
          <h2>Umarali Khashimov</h2>
        </ProfileContainer.Name>
        <ProfileContainer.Email>
          <h3>khashimov@gmail.com</h3>
        </ProfileContainer.Email>
      </div>
    </ProfileContainer>
  )
}

export default Profile