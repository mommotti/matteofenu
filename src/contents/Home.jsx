import React, { Component } from 'react';
import profilepic from '../img/img.jpg';
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic">
                </img>
                <p>Hi, I'm Matteo Fenu, Web <u className="dev">Developer</u> | UI/UX <u className="des">Designer</u></p>
            </div>)
    }
}
export default Home