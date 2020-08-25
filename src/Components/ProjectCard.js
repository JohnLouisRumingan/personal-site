import React from 'react'
import { Icon } from 'semantic-ui-react'
import codenamesImage from '../dist/img/codenames-small.png'
import bgImage from '../dist/img/bg-small.png'
import poketraderImage from '../dist/img/poketrader-small.png'
import { connect } from 'react-redux'
import { projectClick } from '../redux/actions'

const ProjectCard = (props) => {

    let {name, description, url, image} = props.info

    let imgSource = {
        "codenames": codenamesImage,
        "pokemon": poketraderImage,
        "boardgame": bgImage,
    }

    return (
        <div className="item">
            <a href="#" onClick={() => {
                props.clickHandler()
            }}>
                <img src={imgSource[image]} alt={name} />
            </a>
            {/* <a href="#" className="btn-light">
            </a> */}
            <span className="btn-light">
                {/* <Icon name='eye'/> */}Project {name} 
            </span>
            <a href={url} onClick={(e) => {
                        e.preventDefault();
                        window.open(url);
                        }} className="btn-dark">
                <Icon name='github' /> Github
            </a>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        clickHandler: () => dispatch(projectClick())
    }
}

export default connect(null, mapDispatchToProps)(ProjectCard);
