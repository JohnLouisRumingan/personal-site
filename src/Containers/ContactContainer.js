import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const Contact = () => {

    return (
        <main id="contact">  
            <h1 className="lg-heading contact">
                Contact <span className="text-seconary">Me</span> 
            </h1>
            <h2 className="sm-heading">
                Get In Touch
            </h2>

            <Form
            action="https://formspree.io/meqrwylr"
            method="POST">
            <label>Your Name</label>
            <input type="text" name="name"></input>
            <label>
                Your E-Mail
                <input type="text" name="_replyto" />
            </label>
            <label>
                Subject
                <input type="text" name="subject"></input>
            </label>
            <label>
                Your message:
                <textarea name="message"></textarea>
            </label>
            <Button type="submit">Send</Button>
            </Form>
        </main>
    )
}

export default Contact 