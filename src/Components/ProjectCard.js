import React from 'react'
import { Icon } from 'semantic-ui-react'
import codenamesImage from '../dist/img/codenames-small.png'
import bgImage from '../dist/img/bg-small.png'
import poketraderImage from '../dist/img/poketrader-small.png'

const ProjectCard = (props) => {

    let {name, description, url, image} = props.info

    let imgSource = {
        "codenames": codenamesImage,
        "pokemon": poketraderImage,
        "boardgame": bgImage,
    }

    return (
        <div className="item">
            <a href="#">
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

export default ProjectCard