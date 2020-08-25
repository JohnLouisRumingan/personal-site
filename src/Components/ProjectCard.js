import React from 'react'
import { Icon } from 'semantic-ui-react'
import codenamesImage from '../dist/img/codenames\ guess.png'

const ProjectCard = (props) => {

    let {name, description, url, img} = props.info

    let imgSource = {
        "codenames": codenamesImage,
    }

    return (
        <div className="item">
            <a href="#">
                {img? <img src={imgSource[url]} alt={name} /> : null }
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