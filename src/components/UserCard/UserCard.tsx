import React from 'react';

import { Link } from 'react-router-dom';

import { SidebarData } from '../../globals/constants/sidebarData';

import './UserCard.scss';
import earth from "../../assets/earth.png";


const UserCard = () => {
    return (
      <div className="userCard-wrapper">
        <img className="user-avatar" src={earth} alt="User Image"/>
        <div className="user-info">
          <p className="userinfo-lable">Jeremy Zuck</p>
          <p className="userinfo-lable">Travel Enthusiast</p>
        </div>
      </div>
    )
}

export default React.memo(UserCard);