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
                <nav className={this.state.active ? 'appear' : null}>
                    <Particles className="particles"

                        params={{
                            particles: {
                                number: {
                                    value: 20,
                                    density: {
                                        enable: true,
                                        value_area: 800
                                    }
                                }
                            }
                        }} />
                    <ul onClick={() => this.setState({ active: !this.state.active })}>
                        <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                        <hr />
                        <Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem>
                        <hr />
                        <Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem>
                        <hr />
                        <Navitem item="Projects" tolink="/projects" activec={this.activeitem}></Navitem>
                        <hr />
                        <Navitem item="Graphics" tolink="/graphics" activec={this.activeitem}></Navitem>
                        <hr />
                        <Navitem item="Animations" tolink="/animations" activec={this.activeitem}></Navitem>
                        <hr />
                        <Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navbar