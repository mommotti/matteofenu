import React, { Component } from 'react';
import profilepic from '../img/img.jpg';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="condiv home" >
                <img alt="profilepic" src={profilepic} className="profilepic">
                </img>
                <p>Hi, I'm Matteo Fenu 👋, <br></br>UX/UI <u className="des">Designer</u> | Web <u className="dev">Developer</u></p>
<p className="design-text-home" >
I’ve always been intrigued by how a thoughtful design has the ability to change our planet. <br></br>Whether it’s solving an user's problem or providing users with inclusive design solutions,<br></br> I always aspire to create solutions focused on people with impairments first. <br></br> Whether it's abstracting complexity from a layout or increasing the font size or contrast, I always look forward to equity. <br></br>In the past few years, I’ve found myself in front-end, back-end, visual design and language learning.
<br></br>
<br></br>
<div style={{textAlign: "left"}}> - Matteo (^o^)/ <br /><h5>Trieste, Italy
</h5></div>
<br></br>
<div style={{textAlign: "left"}}> <a style={{ borderBottom:"2px solid blue" ,color: "blue"}} href="mailto:matfen97@gmail.com">matfen97@gmail.com</a></div>
<br></br>
<br></br>
<br></br>
<hr />
<br></br>
“The design It's not just what it looks like and feels like. Design is how it works.” - Steve Jobs
</p>
<Link to="/ux"><h1 className="design-text">UX ➔</h1></Link>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
            </div>)
    }
}
export default Home