import React from 'react'
import './navbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div><DrawerToggleButton /*click={this.props.drawerClickHandler}*/ /> </div>
                <div className="spacer"></div>
                <div className="toolbar_logo"><Link to='/personal-site'>JLR</Link></div>
                <div className="toolbar_navigation_items">
                    <ul>
                        <li><Link to='/story'><Icon name="help" /><br></br>Story</Link></li> 
                        <li><Link to='/projects'><Icon name="help" /><br></br>Projects</Link></li> 
                        <li><Link to='/hobbies'><Icon name="gamepad" /><br></br>Hobbies</Link></li>
                        <li><Link to='/about'><Icon name="help" /><br></br>About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Navbar