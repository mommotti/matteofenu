import React, { Component } from 'react';
class About extends Component {
    render() {
        return (
            <div className="condiv skills-height">
                <h1 className="subtopic">About Me</h1>
                <h4>Hello,</h4>
                <h2>I'm Matteo Fenu</h2>
                <h3>Junior Web <u className="dev">Developer</u> | UI/UX <u className="des">Designer</u>
                </h3>
                <br></br>
                <p className="about_me">
                    I have a great passion for UX and UI.
                    I've been using Photoshop for a while and I'm now studying web development via Udemy and Youtube!
                    The tools I use to design:
                    Photoshop, Illustrator, After Effects and Adobe Xd.
                    The technologies I use:
                    HTML5, CSS3, JavaScript, VueJS, ReactJS, NodeJS and more!
            </p>
            </div>)
    }
}
export default About