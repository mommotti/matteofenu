import React, { Component } from 'react';
import profilepic from '../img/img.jpg';
import Social from '../components/Social'
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic">
                </img>
                <p>Hi, I'm Matteo Fenu, a junior web developer</p>
                <Social />
            </div>)
    }
}
export default Home