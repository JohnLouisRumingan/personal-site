import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'

const ProjectCard = (props) => {

    let {name, description, url, imgSource} = props.info

    return (
        <div className='project-box'>
            <Card>
                {imgSource? <Image src={imgSource} wrapped ui={false}/> : null }
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
                    <div className='scrollable-description'>
                    {description}
                    </div>
                </Card.Description>
            </Card>
        </div>
    )
}

export default ProjectCard