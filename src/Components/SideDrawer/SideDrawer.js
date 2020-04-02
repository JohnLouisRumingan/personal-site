import React from 'react'
import './SideDrawer.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

const SideDrawer = (props) => {

    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = [...drawerClasses, 'open']
    }
    
    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li><Link to="/about">About</Link></li>
                
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