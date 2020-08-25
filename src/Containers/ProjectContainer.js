import React from 'react'
import { connect } from 'react-redux'
import ProjectCard from '../Components/ProjectCard'

const ProjectContainer = (props) => {

    return (
        <main id="work">
            <h1 className="lg-heading">
                My <span className="text-secondary">Work</span>
            </h1>
            <h2 className="sm-heading">
                Some projects I've made
            </h2>
            <div className="projects">
                {props.projects? props.projects.map(project => <ProjectCard info={project} key={project.url}/>) : null }
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