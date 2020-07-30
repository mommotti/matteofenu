import React, { Component } from 'react';
import Tilt from 'react-tilt'
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['HTML', 'CSS', 'JS', 'NODEJS', 'REACT JS', 'FIREBASE', 'GIT']
        };
    }
    render() {
        return (
            <div className="condiv skill-wrapper">
                <div className="skills">
                    <h1 className="subtopic">My Skills</h1>
                    <ul>{this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    }
                    )
                    }
                    </ul>
                </div>
                <div className="skill-grid"></div>
                <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 20, width: 20 }} >
                    <div className="Tilt-inner">
                        <a href={{}}> <i class="fab fa-html5 fa-4x"></i>
                        </a>
                    </div>
                </Tilt>
            </div>
        )
    }
}
export default Skills