import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/Navbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

class App extends React.Component {

  render(){

    let backdrop;
    if (this.props.sideDrawerOpen){
      backdrop = <Backdrop />
    }

    return (
      <div className="App" style={{height: '100%'}} >
      <NavBar />
      <SideDrawer />
      {backdrop}
      <main style={{marginTop: '50px'}}>
        Personal Site for John-Louis Rumingan 
      </main>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
   return {
    sideDrawerOpen: state.sideDrawerOpen
   }
}

export default connect(mapStateToProps)(App);
