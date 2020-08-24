import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'

const ProjectCard = (props) => {

    let {name, description, url, imgSource} = props.info

    return (
        <div className="item">
            <a href="#">
                <img src={imgSource} alt={name}></img>
            </a>
            <a href="#" className="btn-light">
                <Icon name='eye'/> Project {name}
            </a>
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