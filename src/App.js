import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/Navbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import About from './Components/About'

class App extends React.Component {

  render(){

    let backdrop;
    if (this.props.sideDrawerOpen){
      backdrop = <Backdrop />
    }

    //switch statement here in lieu of links, page site is handled via state

    return (
      <div className="App" style={{height: '100%'}} >
      <NavBar />
      <SideDrawer />
      {backdrop}
      <main style={{marginTop: '5%'}}>
        <Switch>
          <Route exact path='/about' render={() => <About />}/>
        </Switch>

        Personal Site for John-Louis Rumingan.
        <br />
        Page built using CSS and HTML. Rehaul of site using React/Redux.
        <br></br>
        {/* <p>
          Please note: This website is a single-page app using react-router-dom Link components.
          However, due to github.io's method of allowing react repositories, copy pasting the 
          URL will not actually work. 
        </p> */}
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
