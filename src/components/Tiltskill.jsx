import React, { Component } from 'react';
import Tilt from 'react-tilt'

class Tiltskill extends Component {
    render() {
        return (
            <>
                <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 25, width: 25 }} >
                    <div className="Tilt-inner">
                        <a className="icon" href={this.props.info}>
                            {this.props.icon}
                        </a>
                    </div>
                </Tilt>
            </>
        )
    }
}
export default Tiltskill