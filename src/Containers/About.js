import React from 'react'
// import {Icon} from 'semantic-ui-react'

const About = () => {


    return (
        <main id="description">  
            <h1 className="lg-heading">
                About <span className="text-secondary">This </span> Page
            </h1>
            <h2 className="sm-heading">
                HTML | JavaScript | React | CSS | SASS | Semantic
            </h2>
            <div className="site-description">
                <p>
                Page built using the above technlogies.
                Please note: This website is a single-page app using react-router-dom components.
                </p>
                <p>
                    Updated 2020.9.14: Changed BrowserRouter to HashRouter. Visitors can now correctly copy-paste the URL with #/route.
                </p>
                <p>
                    Updated 2020.8.25: more responsive site! Still uses React but now with SASS
                </p>
                <p>
                    Background photograph by Kevin Ku.
                </p>
            </div>
        </main>
    )
}

export default About 