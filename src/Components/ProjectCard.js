import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

const ProjectCard = (props) => {

    let {name, description, url} = props.info

    return (
        <div className='project-box'>
            <Card>
                <Card.Header>
                    <h2>{name}</h2>
                </Card.Header>
                <br></br>
                <Button onClick={(e) => {
                    window.open(url)
                }}>
                    <Icon name='github'/>
                    View this project on Github
                </Button>
                <br></br>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card>
        </div>
    )
}

export default ProjectCard