import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/Navbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import About from './Components/About'
import LandingPage from './Components/LandingPage'
import HobbyContainer from './Containers/HobbyContainer'
import StoryContainer from './Containers/StoryContainer';
import ArtContainer from './Containers/ArtContainer';
import ProjectContainer from './Containers/ProjectContainer';

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
      <main>
        <Switch>
          <Route exact path='/about' render={() => <About />}/>
          <Route exact path ='/art' render={() => <ArtContainer />}/>
          <Route exact path='/hobbies' render={() => <HobbyContainer />}/>
          <Route exact path='/personal-site' render={() => <LandingPage />}/>
          <Route exact path='/projects' render={() => <ProjectContainer />} />
          <Route exact path='/story' render={() => <StoryContainer />}/>
        </Switch>
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
