import React from 'react'
import './Container.css'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import ProjectCard from '../Components/ProjectCard'

const ProjectContainer = (props) => {

    return (
        <div className='container-page'>
            Projects page:
            <Card.Group>
                {props.projects? props.projects.map( project => <ProjectCard info={project}/>) : null }
            </Card.Group>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        projects: state.projectList
    }
}

export default connect(mapStateToProps)(ProjectContainer)