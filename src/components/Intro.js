import React from 'react';
import '../App.css';
import introImg from '../images/image-intro-desktop.jpg';
import wavyLeftBg from '../images/bg-pattern-intro-left-desktop.svg'

class Intro extends React.Component {
    render() {
        return (
            <div class="intro-container">
                <hr class="line-decoration"></hr>
                <p class="title" id="intro-title">Humanizing your insurance.</p>
                <p id="intro-p">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                <div class="button" id="intro-button">View plans</div>
                <img src={introImg} alt="family" id="family-photo" />
                <img src={wavyLeftBg} alt="wavy-bg" id="wavy-left-bg" />
            </div>
        )
    }
}

export default Intro;