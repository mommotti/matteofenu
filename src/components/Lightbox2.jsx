import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import ai1 from "../img/images/ai1.png"
import ai2 from "../img/images/ai2.png"
import ai3 from "../img/images/ai3.png"
import ai4 from "../img/images/ai4.png"
import ai5 from "../img/images/ai5.png"
import ai6 from "../img/images/ai6.png"
import ai7 from "../img/images/ai7.png"
import ai8 from "../img/images/ai8.jpg"
import ps1 from "../img/images/ps1.png"
import ps2 from "../img/images/ps2.png"
import ps3 from "../img/images/ps3.png"
import ps4 from "../img/images/ps4.png"
import ps5 from "../img/images/ps5.png"
import ps6 from "../img/images/ps6.jpg"
import ps7 from "../img/images/ps7.jpg"
import ps8 from "../img/images/ps8.jpg"
const images = [
    ai1,
    ai2,
    ai3,
    ai4,
    ai5,
    ai6,
    ai7,
    ai8,
    ps1,
    ps2,
    ps3,
    ps4,
    ps5,
    ps6,
    ps7,
    ps8
];

export default class LightboxExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div>
                <div className="row">
                    <div class="gallery">
                        <div class="card" onClick={() => this.setState({ isOpen: true })}> <img
                            src={`${ai8}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Illustrator App Prototype</h1>
                            </div>
                        </div>
                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ps6}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Photoshop</h1>
                            </div>
                        </div>
                        <div class="card" onClick={() => this.setState({ isOpen: true })}> <img
                            src={`${ai1}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Illustrator</h1>
                            </div>
                        </div>
                        <div class="card" onClick={() => this.setState({ isOpen: true })}> <img
                            src={`${ps1}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Photoshop</h1>
                            </div>
                        </div>
                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ai2}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Illustrator</h1>
                            </div>
                        </div>
                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ps2}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Photoshop</h1>
                            </div>
                        </div >
                        <div class="card" onClick={() => this.setState({ isOpen: true })}> <img
                            src={`${ai3}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Illustrator</h1>
                            </div>
                        </div >
                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ps3}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Photoshop</h1>
                            </div>
                        </div >
                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ai4}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Illustrator</h1>
                            </div>
                        </div >
                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ps4}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Photoshop</h1>
                            </div>
                        </div>
                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ai5}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Illustrator</h1>
                            </div>
                        </div >
                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ps5}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Photoshop</h1>
                            </div>
                        </div>
                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ai6}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Illustrator</h1>
                            </div>
                        </div>

                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ps7}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Photoshop</h1>
                            </div>
                        </div>

                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ai7}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Illustrator</h1>
                            </div>
                        </div >
                        <div class="card" onClick={() => this.setState({ isOpen: true })}><img
                            src={`${ps8}?nf_resize=fit&w=400&h=300`} alt=""></img>
                            <div class="info">
                                <h1>Adobe Photoshop</h1>
                            </div>
                        </div>
                    </div >
                </div >

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )
                }
            </div>
        );
    }
}