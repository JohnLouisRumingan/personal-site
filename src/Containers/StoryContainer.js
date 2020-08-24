import React from 'react'


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
                <img src="" alt="Picture of John-Louis Rumingan" className="bio-image"/>
                <div className="bio">
                    <h3 class="text-secondary">Bio</h3>
                    <p>
                    Full-stack web developer based in Washington, DC Metro Area. Passion for bringing people together 
                    through code. Fluent in JavaScript, React.js, Ruby, and Ruby on Rails.
                    Self-driven problem solver and effective communicator seeking to make an impact with cutting-edge technology.
                    </p>
                </div>
                <div className="job past-1">
                    <h3>Experience</h3>
                    <p>
                        Story
                    </p>
                </div>
                <div className="job techstack-2">
                    <h3>Technology I know</h3>
                    <p>
                        List of tech here
                    </p>
                </div>
                <div className="job student-3">
                    <h3>Full-Stack Development Student</h3>
                    <p>

                    </p>
                </div>
            </div>
        </main>
    )
}

export default StoryContainer;