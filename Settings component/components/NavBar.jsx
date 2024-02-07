import React from 'react'
import {Link, NavLink} from "react-router-dom"
import pencil from   "../src/assets/pencil.png"
import user from "../src/assets/user.png"
import notifications from "../src/assets/bell.png"
import lock from "../src/assets/lock.png"


export default function NavBar() {
    const activeStyles = {
        backgroundColor: "#262b15",
        borderRadius: "50px",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px"
    }


  return (
    <>
    <nav className='nav-settings'>
        <NavLink 
            to=""
            style={({isActive}) => isActive ? activeStyles : null}
        >
            <img src={pencil} alt="image of a pencil" className='setting-option-icon' /> General
            
        </NavLink>

        <NavLink 
            to="account"
            style={({isActive}) => isActive ? activeStyles : null}
                >
           <img src={user} alt="image of a person" className='setting-option-icon' /> Account
        </NavLink>

        <NavLink 
            to="notifications"
            style={({isActive}) => isActive ? activeStyles : null}
        >
           <img src={notifications} alt="image of a bell" className='setting-option-icon' /> Notifications
        </NavLink>

        <NavLink 
            to="privacy"
            style={({isActive}) => isActive ? activeStyles : null}
        >
           <img src={lock} alt="image of a lock" className='setting-option-icon' /> Privacy
        </NavLink>
        <button className='done-button'>Done</button>
    </nav>
    </>
  )
}
