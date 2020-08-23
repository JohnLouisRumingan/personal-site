import React from 'react'
// import './SideDrawer.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { Icon } from 'semantic-ui-react'
// import { backdropClick } from '../../redux/actions'

const SideDrawer = (props) => {

    let navItems = ["nav-item"];
    if(props.show){
        navItems = [...navItems, 'show'];
        navItems = navItems.join(' ');
    }
    
    return (
        <nav className="menu">
            <div className="menu-branding">
                <div classname="portrait"></div>
            </div>
            <ul className="menu-nav">
                <li className={navItems}><Link to='/personal-site' className="nav-link"><Icon name="home" /><br></br>Main</Link></li> 
                <li className={navItems}><Link to='/story' className="nav-link"><Icon name="book" /><br></br>Story</Link></li> 
                <li className={navItems}><Link to='/projects' className="nav-link"><Icon name="suitcase" /><br></br>Projects</Link></li>
                <li className={navItems}><Link to='/art' className="nav-link"><Icon name="paint brush" /><br></br>Art</Link></li>
                <li className={navItems}><Link to='/about' className="nav-link"><Icon name="help" /><br></br>About</Link></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {

    return{
        show: state.sideDrawerOpen, 
        site: state.navigationPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)