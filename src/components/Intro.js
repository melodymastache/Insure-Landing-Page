import React from 'react';
import Header from './Header';
import '../App.css';
import introImg from '../images/image-intro-desktop.jpg';
// import bgImg_left from '../images/bg-pattern-intro-left-desktop.svg';

class Intro extends React.Component {
    render() {
        return (
            <div class="introContainer">
                <Header />
                <div class="intro-text">
                    <p id="intro-title">Humanizing<br></br>your insurance.</p>
                    <p id="intro-p">Get your life insurance coverage easier and faster. We blend our expertise
                    and technology to help you find the plan that’s right for you. Ensure you
                and your loved ones are protected.</p>
                    <div class="button" id="intro-button">View plans</div>
                </div>

                <div class="overlap">
                    <img id="family-photo" src={introImg} alt="intro-img" />
                </div>
            </div>
        )
    }
}

export default Intro;