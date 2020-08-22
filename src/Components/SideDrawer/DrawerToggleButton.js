import React from 'react';
import './DrawerToggleButton.css';
import '../../dist/css/main.css'
import {drawerClickHandler} from '../../redux/actions'
import { connect } from 'react-redux'

const drawerToggleButton = props => {

    return (
        <div className="menu-btn" onClick={props.click}>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>   
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        click: () => dispatch(drawerClickHandler())
    }
}

export default connect(null, mapDispatchToProps)(drawerToggleButton)