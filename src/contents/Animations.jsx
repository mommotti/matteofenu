import React from 'react';
import Lottie from 'react-lottie';
import Animation1 from '../img/Lotties/dataCube.json';
import Animation2 from '../img/Lotties/dataSun.json';
import Animation3 from '../img/Lotties/dataEye.json';
import Animation4 from '../img/Lotties/dataAllSet.json';
import Animation5 from '../img/Lotties/dataPoly.json';
import Animation6 from '../img/Lotties/dataFern.json';
export default function App() {
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: Animation1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: Animation2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: Animation3,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: Animation4,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions5 = {
        loop: true,
        autoplay: true,
        animationData: Animation5,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions6 = {
        loop: true,
        autoplay: true,
        animationData: Animation6,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="condiv animations-grid">
            <div className="anim first-anim">
                <Lottie options={defaultOptions1} />
            </div>
            <div className="anim">
                <Lottie options={defaultOptions2} />
            </div >
            <div className="anim">
                <Lottie options={defaultOptions3} />
            </div>
            <div className="anim">
                <Lottie options={defaultOptions4} />
            </div>
            <div className="anim last-anim">
                <Lottie options={defaultOptions5} />
            </div>
            {/* <div className="anim">
                <Lottie options={defaultOptions6} />
            </div> */}
        </div>
    );
}
