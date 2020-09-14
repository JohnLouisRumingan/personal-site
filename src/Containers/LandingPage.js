import React from 'react'
import ContactCard from '../Components/ContactCard'

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
            <ContactCard align="right"/>
        </main>
    )
}

export default LandingPage