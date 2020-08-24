import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'

const ProjectCard = (props) => {

    let {name, description, url, imgSource} = props.info

    return (
        // <div className='project-box'>
        //     <Card>
        //         {imgSource? <Image src={imgSource} wrapped ui={false}/> : null }
        //         <Card.Header>
        //             <h2>{name}</h2>
        //         </Card.Header>
        //         <br></br>
        //         <Button onClick={(e) => {
        //             window.open(url)
        //         }}>
        //             <Icon name='github'/>
        //             View this project on Github
        //         </Button>
        //         <br></br>
        //         <Card.Description>
        //             <div className='scrollable-description'>
        //             {description}
        //             </div>
        //         </Card.Description>
        //     </Card>
        // </div>

        <div className="item">
            <a href={url} onClick={(e) => {
                        e.preventDefault();
                        window.open(url);
                        }}>
                <img src={imgSource} alt={name}></img>
            </a>
            <a href="#" className="btn-light">
                <i className="fas fa-eye"></i>
                <Icon name='eye'/> Project {name}
            </a>
            <a href="#" className="btn-dark">
                <Icon name='github' /> Github
            </a>
        </div>
    )
}

export default ProjectCard