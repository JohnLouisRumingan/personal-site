import React from 'react'
import { Icon } from 'semantic-ui-react'

const ContactCard = (props) => {

    return (
        <div className={`icons ${props.align}`}>
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
    )
}

export default ContactCard