import React from 'react'


const StoryContainer = () => {

    return (
        // <div className='container-page'>
        //     <div>
        //         <h1>My Story:</h1>
        //         <p>
        //             Full-stack web developer based in Washington, DC Metro Area. Passion for bringing people together 
        //             through code. Fluent in JavaScript, React.js, Ruby, and Ruby on Rails.
        //             Self-driven problem solver and effective communicator seeking to make an impact with cutting-edge technology.
        //         </p>
        //     </div>
        // </div>
        <div>
            <main id="about">
                <h1 className="lg-heading">
                    My <span class="text-secondary">Story</span>
                </h1>
                <h2 className="sm-heading">
                    Some things about me
                </h2>
            </main>
            
        </div>
    )
}

export default StoryContainer;