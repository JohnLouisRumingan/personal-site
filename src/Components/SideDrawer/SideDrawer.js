import React from 'react'
// import './SideDrawer.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { Icon } from 'semantic-ui-react'
// import { backdropClick } from '../../redux/actions'

const SideDrawer = (props) => {

    // let navItems = ["nav-item"];
    // if(props.show){
    //     navItems = [...navItems, 'show'];
    //     navItems = navItems.join(' ');
    // }
    // below is better and more generic. Would have to add new lines to the top for every new element class we wanted to include. 
    // still included in comments for comparison

    function toggleShowClass (nameOfClass) {
        if(props.show){
            return `${nameOfClass} show`;
        }
        else {
            return nameOfClass;
        }
    }
    
    return (
        <nav className={toggleShowClass("menu")}>
            <div className={toggleShowClass("menu-branding")}>
                <div classname="portrait"></div>
            </div>
            <ul className={toggleShowClass("menu-nav")}>
                <li className={toggleShowClass("nav-item")}><Link to='/personal-site' className="nav-link"><Icon name="home" /><br></br>Main</Link></li> 
                <li className={toggleShowClass("nav-item")}><Link to='/story' className="nav-link"><Icon name="book" /><br></br>Story</Link></li> 
                <li className={toggleShowClass("nav-item")}><Link to='/projects' className="nav-link"><Icon name="suitcase" /><br></br>Projects</Link></li>
                <li className={toggleShowClass("nav-item")}><Link to='/art' className="nav-link"><Icon name="paint brush" /><br></br>Art</Link></li>
                <li className={toggleShowClass("nav-item")}><Link to='/about' className="nav-link"><Icon name="help" /><br></br>About</Link></li>
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