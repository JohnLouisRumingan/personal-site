import React from 'react'
import pfp from '../dist/img/pfp\ portfolio.jpeg'


const StoryContainer = () => {

    return (
        <main id="about">
            <h1 className="lg-heading">
                My <span class="text-secondary">Story</span>
            </h1>
            <h2 className="sm-heading">
                Some things about me
            </h2>
            <div className="about-info">
                <img src={pfp} alt="Picture of John-Louis Rumingan" className="bio-image"/>
                <div className="bio">
                    <h3 className="text-secondary">Bio</h3>
                    <p>
                    Full-stack web developer based in Washington, DC Metro Area. Passion for bringing people together 
                    through code. Fluent in JavaScript, Ruby, HTML, and CSS. I enjoy finding solutions to difficult problems and 
                    using technology to do it.
                    </p>
                </div>
                <div className="job past-1">
                    <h3>Experience</h3>
                    <p>
                        <span className="text-secondary">Investment Analyst</span>
                        <ul>
                            <li>Collected data from various sources to analyze pricing trends</li>
                            <li>Utilized Python to reduce overall research time by hundreds of hours by leveraging automation</li>
                        </ul>
                        <br></br>
                        <span className="text-secondary">Artist and Graphics Designer</span>
                        <ul>
                            <li>Worked with repeat clients on commissions</li>
                            <li>Created layouts with designs considering accessibility and user experience</li>
                        </ul>
                    </p>
                </div>
                <div className="job techstack-2">
                    <h3>Technology I know</h3>
                    <span className="text-secondary">Languages and Frameworks</span>
                    <div className="icons-container">
                        <i class="devicon-javascript-plain colored"></i>
                        <i class="devicon-react-original-wordmark colored"></i>
                        <i class="devicon-redux- colored"></i>
                        <i class="devicon-nodejs-plain-wordmark colored"></i>
                        <i class="devicon-html5-plain-wordmark colored"></i>
                        <i class="devicon-css3-plain-wordmark colored"></i>
                        <i class="devicon-sass-original colored"></i>
                        <img
                            src="https://www.getdeveloper.net/wp-content/uploads/2018/02/semantic.png"
                            alt="semantic ui logo"
                            class="s-logo"
                        />
                        <i class="devicon-ruby-plain-wordmark colored"></i>
                        <i class="devicon-rails-plain-wordmark colored"></i>
                        <i class="devicon-postgresql-plain-wordmark colored"></i>
                        <i class="devicon-mysql-plain-wordmark colored"></i>
                        <i class="devicon-linux-plain colored"></i>
                    </div>
                </div>
                <div className="job student-3">
                    <h3>Full-Stack Developer</h3>
                    <p>
                        <span className="text-secondary">Flatiron School</span>
                        <ul>
                        <li>Finished a 15-week immersive program for software engineering</li>
                        <li>Experience in paired program, SOLID principles, and agile best practices</li>
                        <li>Wrote and presented blog articles about the use and development of technology</li>
                        </ul>

                    </p>
                </div>
            </div>
        </main>
    )
}

export default StoryContainer;