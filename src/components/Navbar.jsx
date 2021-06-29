import React, { Component } from 'react';
import Navitem from './Navitem';
import Particles from "react-particles-js";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <>
                <i onClick={() => this.setState({ active: !this.state.active })} class="fa fa-bars  fa-2x" aria-hidden="true"></i>
                <nav className={this.state.active ? 'appear' : null} >
                    <Particles className="particles"

                        params={{
                            "particles": {
                                "number": {
                                    "value": 35,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "size": {
                                    "value": 2.5,
                                    "random": true,
                                    "anim": {
                                        "speed": 4,
                                        "size_min": 0.1
                                    }
                                },
                                "line_linked": {
                                    "enable": false
                                },
                                "move": {
                                    "random": true,
                                    "speed": 0.5,
                                    "direction": "top",
                                    "out_mode": "out"
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "bubble"
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                },
                                "modes": {
                                    "bubble": {
                                        "distance": 100,
                                        "duration": 1,
                                        "size": 0,
                                        "opacity": 0
                                    },
                                    "repulse": {
                                        "distance": 200,
                                        "duration": 4
                                    }
                                }
                            }
                        }} />
                    <ul onClick={() => this.setState({ active: !this.state.active })}>
                        <Navitem item="About" tolink="/" active={this.activeitem}></Navitem>

                        <Navitem item="UX" tolink="/ux" active={this.activeitem}></Navitem>

                        <Navitem item="Skills" tolink="/skills" active={this.activeitem}></Navitem>

                        <Navitem item="Projects" tolink="/projects" active={this.activeitem}></Navitem>

                        <Navitem item="Graphics" tolink="/graphics" active={this.activeitem}></Navitem>

                        <Navitem item="Animations" tolink="/animations" active={this.activeitem}></Navitem>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navbar