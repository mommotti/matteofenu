import React, { Component } from 'react';
import NetlifyForm from 'react-netlify-form'
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <p>email: matfen97@gmail.com</p>

                <NetlifyForm
                    name='Form With Invisible Recaptcha'
                    recaptcha={{
                        sitekey: 'my_recaptcha_site_key',
                        size: 'invisible'
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
                                <div>
                                    <input type='text' name='Name' required />
                                    <textarea name='Message' required />
                                    <button>Submit</button>
                                </div>
                            }
                            {/* Invisible reCAPTCHA must be kept outside of conditionals */}
                            {recaptcha}
                        </div>
                    )}
                </NetlifyForm>

            </div>)
    }
}
export default Contact