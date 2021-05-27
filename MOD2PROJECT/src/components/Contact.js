import React from 'react'
import Form from './Form'

const Contact = () => {

    const email = ''

    return(
        <div className="signup-wrapper">
        <h2> SIGN UP TO OUR NEWSLETTER! </h2>   
        <p> Please leave your email address to be added to our mailing list.</p>
        <Form email={email}/>
    </div>
    );
}

export default Contact;

