import React, { Component } from 'react';
import NetlifyForm from 'react-netlify-form'
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <NetlifyForm
                    name='contact'
                    recaptcha={{
                        sitekey: "6LdWCLkZAAAAADVErQMMfky7cx6hv3KKF6PjFaVt",
                        size: 'normal'
                    }}
                >
                    {({ loading, error, recaptchaError, success, recaptcha }) => (
                        <div>
                            {loading &&
                                <div>Loading...</div>
                            }
                            {error &&
                                <div>Your information was not sent. Please try again later.</div>
                            }
                            {recaptchaError &&
                                <div>Recaptcha did not match. Please make sure the box is checked.</div>
                            }
                            {success &&
                                <div>Thank you for contacting us!</div>
                            }
                            {!loading && !success &&
                                <div className="mf-form">
                                    <input type="hidden" name="form-name" value="contact" required />
                                    <p className="input-p"><label>Your Name:</label></p>
                                    <p>
                                        <input className="input-info" type="text" name="name" />
                                    </p>
                                    <hr className="form-hr" />
                                    <p className="input-p"><label>Your Email:</label></p>
                                    <p>
                                        <input className="input-info " type="email" name="email" required />
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
                                    <p className="input-p"> <label>Message:</label></p>
                                    <textarea name="message" required></textarea>

                                    <p>
                                    </p>
                                    <div data-netlify-recaptcha="true"></div>
                                    <p>
                                        <button className="btn" type="submit">Send</button>
                                    </p>

                                </div>
                            }
                        </div>
                    )}
                </NetlifyForm >
                {/* <div className="mf-form">
                    <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" autocomplete="off">
                        <input type="hidden" name="form-name" value="contact" required />
                        <p className="input-p"><label>Your Name:</label></p>
                        <p>
                            <input className="input-info" type="text" name="name" />
                        </p>
                        <hr className="form-hr" />
                        <p className="input-p"><label>Your Email:</label></p>
                        <p>
                            <input className="input-info " type="email" name="email" required />
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
                        <p className="input-p"> <label>Message:</label></p>
                        <textarea name="message" required></textarea>

                        <p>
                        </p>
                        <div data-netlify-recaptcha="true"></div>
                        <p>
                            <button className="btn" type="submit">Send</button>
                        </p>
                    </form>
                </div> */}
            </div >)
    }
}
export default Contact