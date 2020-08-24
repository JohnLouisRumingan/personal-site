import React from 'react'
// import './Container.css'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import ProjectCard from '../Components/ProjectCard'

const ProjectContainer = (props) => {

    return (
        <main id="work">
            <h1 className="lg-heading">
                My <span class="text-secondary">Work</span>
            </h1>
            <h2 className="sm-heading">
                Some projects I've made
            </h2>
            <div className="projects">
                {props.projects? props.projects.map(project => <ProjectCard info={project}/>) : null }
            </div>
        </main>
    )
}


const mapStateToProps = (state) => {
    return {
        projects: state.projectList
    }
}

export default connect(mapStateToProps)(ProjectContainer)