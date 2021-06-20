import React, { Component } from 'react';
import profilepic from '../img/img.jpg';
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img alt="profilepic" src={profilepic} className="profilepic">
                </img>

                <p>Hi, I'm Matteo Fenu, UX/UI <u className="des">Designer</u> | Web <u className="dev">Developer</u></p>
            </div>)
    }
}
export default Home