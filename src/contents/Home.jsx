import React, { Component } from 'react';
import profilepic from '../img/img.jpg';
class Home extends Component {
    render() {
        return (
            <div className="condiv home" >
                <img alt="profilepic" src={profilepic} className="profilepic">
                </img>
                <p>Hi, I'm Matteo Fenu 👋, <br></br>UX/UI <u className="des">Designer</u> | Web <u className="dev">Developer</u></p>
<div className="design-text-home" >
I’ve always been intrigued by how a thoughtful design has the ability to change our planet. <br></br>Whether it’s solving an user's problem or providing users with inclusive design solutions,<br></br> I always aspire to create solutions focused on people with impairments first, <br></br> whether it's abstracting complexity from a layout or increasing the font size or contrast. I always look forward to equity. <br></br>In the past few years, I’ve found myself in front-end, back-end, visual design and language learning.
<br></br>
<br></br>
<div style={{textAlign: "left"}}> - Matteo (^o^)/</div>
<br></br><br></br><a style={{color: "blue"}} href="mailto:matfen97@gmail.com">matfen97@gmail.com</a>
</div>
            </div>)
    }
}
export default Home