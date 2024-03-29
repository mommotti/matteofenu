import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import ai1 from "../img/images/ai1.png";
import ai2 from "../img/images/ai2.png";
import ai3 from "../img/images/ai3.png";
import ai4 from "../img/images/ai4.png";
import ai5 from "../img/images/ai5.png";
import ai6 from "../img/images/ai6.png";
import ai7 from "../img/images/ai7.png";
import ai8 from "../img/images/ai8.jpg";
import ps1 from "../img/images/ps1.png";
import ps2 from "../img/images/ps2.png";
import ps3 from "../img/images/ps3.png";
import ps4 from "../img/images/ps4.png";
import ps5 from "../img/images/ps5.png";
import ps6 from "../img/images/ps6.jpg";
import ps7 from "../img/images/ps7.jpg";
import ps8 from "../img/images/ps8.jpg";
const images = [
  ai8,
  ps6,
  ai1,
  ps1,
  ai2,
  ps2,
  ai3,
  ps3,
  ai4,
  ps4,
  ai5,
  ps5,
  ai6,
  ps7,
  ai7,
  ps8,
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
      <div className="condiv skills-height">
        <h1 className="subtopic">
          My Graphics <br></br>
          <span style={{ fontSize: "0.5em" }}>(Adobe Suite)</span>
        </h1>
        <div className="gallery">
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
          >
            {" "}
            <img src={`${ai8}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Illustrator <br></br>-<br></br> Designflows 2020 UI
                Contest
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
          >
            <img src={`${ps6}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Photoshop<br></br>-<br></br>Digital Painting
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
          >
            {" "}
            <img src={`${ai1}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Illustrator<br></br>-<br></br> Soft Shapes
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
          >
            {" "}
            <img src={`${ps1}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Photoshop<br></br>-<br></br> Photo Manipulation
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
          >
            <img src={`${ai2}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Illustrator <br></br>-<br></br> Waves
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
          >
            <img src={`${ps2}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Photoshop<br></br>-<br></br> Photo Manipulation
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 6, isOpen: true })}
          >
            {" "}
            <img src={`${ai3}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Illustrator<br></br>-<br></br> Minimal Hills
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 7, isOpen: true })}
          >
            <img src={`${ps3}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Photoshop<br></br>-<br></br> Fairy Flower
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 8, isOpen: true })}
          >
            <img src={`${ai4}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Illustrator<br></br>-<br></br> Dots Vortex
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 9, isOpen: true })}
          >
            <img src={`${ps4}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Photoshop<br></br>-<br></br> Fairy Butterfly
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 10, isOpen: true })}
          >
            <img src={`${ai5}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Illustrator<br></br>-<br></br> Minimal Squares
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 11, isOpen: true })}
          >
            <img src={`${ps5}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Photoshop<br></br>-<br></br>Seriously Python
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 12, isOpen: true })}
          >
            <img src={`${ai6}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Illustrator<br></br>-<br></br> Stacking Paper
              </h1>
            </div>
          </div>

          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 13, isOpen: true })}
          >
            <img src={`${ps7}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Photoshop<br></br>-<br></br>Shapes Noise
              </h1>
            </div>
          </div>

          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 14, isOpen: true })}
          >
            <img src={`${ai7}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Illustrator<br></br>-<br></br> Exploding Shapes
              </h1>
            </div>
          </div>
          <div
            className="card"
            onClick={() => this.setState({ photoIndex: 15, isOpen: true })}
          >
            <img src={`${ps8}?nf_resize=fit&w=400&h=300`} alt=""></img>
            <div className="info">
              <h1>
                Adobe Photoshop<br></br>-<br></br>500 Manipulation
              </h1>
            </div>
          </div>

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
          )}
        </div>
      </div>
    );
  }
}
