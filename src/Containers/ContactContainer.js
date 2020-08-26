import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import ContactCard from '../Components/ContactCard'

const Contact = () => {

    return (
        <main id="contact">  
            <h1 className="lg-heading contact">
                Contact <span className="text-secondary">Me</span> 
            </h1>
            <h2 className="sm-heading">
                Get in touch 
            </h2>
            <h3>
                <span className="text-secondary">I'm on these platforms:</span>
            </h3>
            <ContactCard align="left"/>
            <br></br>
            <h3>
                <span className="text-secondary">Or you can contact me here:</span>
            </h3>
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