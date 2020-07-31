import React, { Component } from 'react';
import NetlifyForm from 'react-netlify-form'
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <p>email: matfen97@gmail.com</p>
                {/* 
                <form name="contact" method="POST" data-netlify="true" autocomplete="off" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <label for="inquire">Inquire</label>
                    <input type="radio" id="inquire" name="role" value="inquire"></input>
                    <label for="other">Other</label>
                    <input type="radio" id="other" name="role" value="other"></input>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <div class="captcha" data-netlify-recaptcha="true"></div>
                    </p>
                    <div data-netlify-recaptcha="true"></div>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form> */}

                <NetlifyForm name='contact'>
                    {({ loading, error, success }) => (
                        <div>
                            {loading &&
                                <div>Loading...</div>
                            }
                            {error &&
                                <div>Your information was not sent. Please try again later.</div>
                            }
                            {success &&
                                <div>Thank you for contacting us!</div>
                            }
                            {!loading && !success &&
                                <div>
                                    <input type='text' name='Name' required />
                                    <textarea name='Message' required />
                                    <button>Submit</button>
                                </div>
                            }
                        </div>
                    )}
                </NetlifyForm>
            </div>)
    }
}
export default Contact