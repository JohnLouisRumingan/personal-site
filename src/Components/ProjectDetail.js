import React from 'react'
import { Icon } from 'semantic-ui-react'

const ProjectDetail = (props) => {

    let {name, description, url} = props.info;

    return (
        <div className="project-detail">
            <h3 className="sm-heading">
                <span>{name}</span>
            </h3>
            <p>
                {description}
            </p>
            <a href={url} onClick={(e) => {
                        e.preventDefault();
                        window.open(url);
                        }} className="btn-dark">
                <Icon name='github' /> Open Github In New Window 
            </a>
        </div>
    )
};

export default ProjectDetail;