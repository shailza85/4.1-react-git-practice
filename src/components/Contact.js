import React from 'react';

class Contact extends React.Component
{
    render ()
    {
        return(
            <>
            <h2>Contact Us</h2>
            <p>
                Please contact us if you have any questions. You can reach s through....
            </p>
            <dl>
                <dt>Phone</dt>
                <dd>+1 (780) 123-4567</dd>
                <dt>Email</dt>
                <dd>abc@example.com</dd>
            </dl>
            </>
        );
    }
}

export default Contact;