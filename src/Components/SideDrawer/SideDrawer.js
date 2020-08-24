import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { Icon } from 'semantic-ui-react'
import {navigateSite} from '../../redux/actions'
import {drawerClickHandler} from '../../redux/actions'

const SideDrawer = (props) => {

    function toggleShowClass (name, link) {

        let className = [name];
        if(props.show){
            className = [...className, "show"];
        }

        if(props.currentSite === link){
            className = [...className, "current"]
        }

        className = className.join(' ');
        return className;
    }
    
    return (
        <nav className={toggleShowClass("menu")}>
            <div className={toggleShowClass("menu-branding")}>
                <div className="portrait"></div>
            </div>
            <ul className={toggleShowClass("menu-nav")} onClick={props.click}>
                <li className={toggleShowClass("nav-item", "/personal-site")}><Link to='/personal-site' className="nav-link" onClick={() => props.navigate("/personal-site")}>
                    <Icon name="home" />Main</Link>
                </li> 
                <li className={toggleShowClass("nav-item", "/story")}><Link to='/story' className="nav-link" onClick={() => props.navigate("/story")}>
                    <Icon name="book" />My Story</Link>
                </li> 
                <li className={toggleShowClass("nav-item", "/projects")}><Link to='/projects' className="nav-link" onClick={() => props.navigate("/projects")}>
                    <Icon name="suitcase" />My Projects</Link>
                </li>
                <li className={toggleShowClass("nav-item", "/blog")}><Link to='/blog' className="nav-link" onClick={() => props.navigate("/blog")}>
                    <Icon name="pencil" />Technical Blog</Link>
                </li>
                <li className={toggleShowClass("nav-item", "/about")}><Link to='/about' className="nav-link" onClick={() => props.navigate("/about")}>
                    <Icon name="help" />About</Link>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {

    return{
        show: state.sideDrawerOpen, 
        currentSite: state.navigationPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        navigate: (target) => dispatch(navigateSite(target)),
        click: () => dispatch(drawerClickHandler())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)