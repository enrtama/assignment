// @flow

/**
* @file Map tooltip
* @author Enrique Tamames
* @module components/Map/Tooltip
* @version 0.0.1
*/

import React from 'react'
import UserImage from '../../../../assets/user.png'

const Tooltip = () => {
  return (
    <div className="profile">
      <h3>Bus Reference: TSZ-913</h3>
      <img className="profile__avatar" src={UserImage} />
      <div className="profile__description">
        <p><b>Name</b>: Lorem Ipsum</p>
        <p><b>Age</b>: 36</p>
        <p><b>Email</b>: bus-driver@bus-driver.com</p>
        <p><b>Phone</b>: 0612345678</p>
        <p><b>Company</b>: ViriCiti</p>
      </div>
    </div>
  )
}

export default Tooltip
