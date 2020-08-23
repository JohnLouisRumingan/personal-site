import React from 'react'
// import './css/landing-page.css'
import { Icon } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'


const LandingPage = () => {

    return (
        <main >  
            <div className='landing-page'>
                <div className='my-name'>
                John-Louis Rumingan
                </div>
                <div className='subtext-box'>

                    <p>
                    Web Developer | Programmer | Designer | Artist
                    </p>
                </div>
                <div className='sub-icon-background'>
                    <div className='sub-icon-box'>
                        <a href='https://github.com/JohnLouisRumingan'
                            onClick={(e) => {
                                e.preventDefault();
                                window.open("https://github.com/JohnLouisRumingan");}}>
                            <Icon name='github' size='small' />
                        </a>
                        <a href='https://www.linkedin.com/in/john-louis-rumingan/'
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://www.linkedin.com/in/john-louis-rumingan/')}}>
                            <Icon name='linkedin' size='small'/>
                        </a>
                        <a href='https://medium.com/@john.louis.rumingan'
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://medium.com/@john.louis.rumingan')}}>
                            <Icon name='medium' size='small'/>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LandingPage