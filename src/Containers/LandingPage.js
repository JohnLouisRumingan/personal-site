import React from 'react'
import { Icon } from 'semantic-ui-react'

const LandingPage = () => {

    return (
        <main id="home">  
            <h1 className="lg-heading">
                John-Louis <span className="text-secondary">Rumingan</span>
            </h1>
            <h2 className="sm-heading landing">
                Web Developer | Programmer | Designer | Artist
            </h2>
            <h2 className="sub-heading">
                // learn. code. develop.
            </h2>
            <div className="icons">
                <a href='https://github.com/JohnLouisRumingan'
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("https://github.com/JohnLouisRumingan");}}>
                    <Icon name='github' size='huge' />
                </a>
                <a href='https://www.linkedin.com/in/john-louis-rumingan/'
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('https://www.linkedin.com/in/john-louis-rumingan/')}}>
                    <Icon name='linkedin' size='huge'/>
                </a>
                <a href='https://medium.com/@john.louis.rumingan'
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('https://medium.com/@john.louis.rumingan')}}>
                    <Icon name='medium' size='huge'/>
                </a>
            </div>
        </main>
    )
}

export default LandingPage