import React from 'react'
import './SideDrawer.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { Icon } from 'semantic-ui-react'

const SideDrawer = (props) => {

    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = [...drawerClasses, 'open']
    }
    
    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li><Link to='/personal-site'><Icon name="home" /><br></br>Main</Link></li> 
                <li><Link to='/story'><Icon name="book" /><br></br>Story</Link></li> 
                <li><Link to='/projects'><Icon name="suitcase" /><br></br>Projects</Link></li>
                <li><Link to='/art'><Icon name="paint brush" /><br></br>Art</Link></li>
                <li><Link to='/hobbies'><Icon name="gamepad" /><br></br>Hobbies</Link></li>
                <li><Link to='/about'><Icon name="help" /><br></br>About</Link></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {

    return{
        show: state.sideDrawerOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)