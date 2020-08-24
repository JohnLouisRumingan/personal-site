import React from 'react';
import './dist/css/main.css';
import DrawerToggleButton from './Components/SideDrawer/DrawerToggleButton'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux'
import About from './Containers/About'
import LandingPage from './Containers/LandingPage'
import StoryContainer from './Containers/StoryContainer';
import ArtContainer from './Containers/ArtContainer';
import ProjectContainer from './Containers/ProjectContainer';
import Copyright from './Containers/Copyright';
import BlogContainer from './Containers/BlogContainer';
// removed Redirect and withRouter from react-router-dom import 

class App extends React.Component {

  render(){

    return (
      <div className={this.props.navigation === "/personal-site" ? "App bg-image" : "App"} style={{height: '100%'}} >
        <header>
          <DrawerToggleButton />
          <SideDrawer />
        </header>
        <Switch>
          <Route exact path='/about' render={() => <About />}/>
          <Route exact path ='/art' render={() => <ArtContainer />}/>
          <Route exact path='/blog' render={() => <BlogContainer />}/>
          <Route exact path='/personal-site' render={() => <LandingPage />}/>
          <Route exact path='/projects' render={() => <ProjectContainer />}/>
          <Route exact path='/story' render={() => <StoryContainer />}/>
        </Switch>
        {this.props.navigation === "/personal-site" ? null : <Copyright />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   return {
    sideDrawerOpen: state.sideDrawerOpen,
    navigation: state.navigationPage,
   }
}

export default connect(mapStateToProps)(App);