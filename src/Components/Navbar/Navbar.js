import React from 'react'
// import './navbar.css'
// import '../../dist/css/main.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <DrawerToggleButton/> 
            <nav className="menu">
                <div className="menu-branding">
                    <div className="portrait"></div>
                </div>
            </nav>
        </header>
    )
}


export default Navbar