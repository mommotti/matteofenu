import React, { Component } from 'react';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <div className="mf-form">
                    <form action="./Contact.jsx" name="contact" method="POST" data-netlify="true" autocomplete="off">
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="input-p"><label>Your Name:</label></p>
                        <p>
                            <input className="input-info" type="text" name="name" />
                        </p>
                        <hr className="form-hr" />
                        <p className="input-p"><label>Your Email:</label></p>
                        <p>
                            <input className="input-info" type="email" name="email" />
                        </p>
                        <hr className="form-hr" />
                        <div>
                            <p className="align-radio">
                                <label for="inquire">Inquire</label>
                                <input type="radio" id="inquire" name="role" value="inquire"></input>
                            </p>
                            <p className="align-radio">
                                <label for="other">Other</label>
                                <input type="radio" id="other" name="role" value="other"></input>
                            </p>
                        </div>
                        <hr className="form-hr" />
                        <p className="align-radio">
                            <label>Message: <textarea name="message"></textarea></label>
                        </p>
                        <p>
                        </p>
                        <div data-netlify-recaptcha="true"></div>
                        <p>
                            <button className="btn" type="submit">Send</button>
                        </p>
                    </form>
                </div>
            </div>)
    }
}
export default Contact