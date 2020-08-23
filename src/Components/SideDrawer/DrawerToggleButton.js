import React from 'react';
import './DrawerToggleButton.css';
import '../../dist/css/main.css'
import {drawerClickHandler} from '../../redux/actions'
import { connect } from 'react-redux'

const drawerToggleButton = props => {

    let menuBtn = ["menu-btn"];
    if(props.show){
        menuBtn = [...menuBtn, "close"];
        menuBtn = menuBtn.join(' ');
    }

    return (
        <div className={menuBtn} onClick={props.click}>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>   
        </div>
    )
}

const mapStateToProps = (state) => {

    return{
        show: state.sideDrawerOpen
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        click: () => dispatch(drawerClickHandler())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(drawerToggleButton)