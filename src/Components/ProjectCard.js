import React from 'react'
import { Icon } from 'semantic-ui-react'
import codenamesImage from '../dist/img/codenames-small.png'
import bgImage from '../dist/img/bg-small.png'
import poketraderImage from '../dist/img/poketrader-small.png'
import { connect } from 'react-redux'
import { activateBackdrop, projectClick } from '../redux/actions'

const ProjectCard = (props) => {

    let {name, url, image} = props.info
    // removed description from destructuring, still need it for project detail component

    let imgSource = {
        "codenames": codenamesImage,
        "pokemon": poketraderImage,
        "boardgame": bgImage,
    }

    return (
        <div className="item">
            <button onClick={() => {
                props.clickHandler(props.info)
            }}>
                <img src={imgSource[image]} alt={name} />
            </button>
            <a href={url} onClick={(e) => {
                        e.preventDefault();
                        window.open(url);
                        }} className="btn-dark">
                <Icon name='github' /> Github
            </a>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        clickHandler: (details) => {
            dispatch(activateBackdrop())
            dispatch(projectClick(details))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProjectCard);
