import React from 'react';
import '../App.css';
import bgPattern from '../images/bg-pattern-how-we-work-desktop.svg';

class HowWeWork extends React.Component {
    render() {
        return (
            <div class="how-we-work">
                <p>Find out more about how we work</p>
                <div class="button">How we work</div>
                <img src={bgPattern} alt="bg-pattern" id="bg-hww" />
            </div>
        )
    }
}

export default HowWeWork;
