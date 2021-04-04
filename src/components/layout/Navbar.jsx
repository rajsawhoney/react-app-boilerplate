import React from 'react'
import brand from './wallet-brand.png'
import './Navbar.css'
import { KeyboardArrowDown, Notifications } from '@material-ui/icons'
import { Avatar, Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className="navbar__container">
      <div className="navbar__left">
          <img src={brand} alt='wallet-brand'/>
          <Link to="/dashboard/home">EASY PAY</Link>
      </div>
      <div className="navbar__right">
      <Badge
        badgeContent={2}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            color="secondary"
            >
          <Notifications/>
          </Badge>
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-nuV0ZgVE5_03umB6O1Bk_SO-Kty1FV9yFHhHbqg=s32-c-mo" alt="user-profile"/>
          <h1>
              <span>Razz Sawhoney</span>
              <KeyboardArrowDown/>
           </h1>
      </div>
    </div>
  )
}

export default Navbar
