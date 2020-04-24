import React from 'react';
import snappyIcon from '../images/icon-snappy-process.svg';
import affordableIcon from '../images/icon-affordable-prices.svg';
import peopleIcon from '../images/icon-people-first.svg';

class AtAGlance extends React.Component {
    render() {
        return (
            <div class="at-a-glance">
                <hr class="line-decoration"></hr>
                <h1 class="title">We’re different</h1>
                <div class="feature-list">
                    <div class="feature-item">
                        <img src={snappyIcon} id="snappy" alt="snappy-icon" />
                        <h2 class="title subtitle">Snappy Process</h2>
                        <p>Our application process can be completed in minutes, not hours. Don’t get
                stuck filling in tedious forms.</p>
                    </div>

                    <div class="feature-item" id="middle-item">
                        <img src={affordableIcon} id="affordable-icon" alt="people-icon" />
                        <h2 class="title subtitle">Affordable Prices</h2>
                        <p>We don’t want you worrying about high monthly costs. Our prices may be low,
                but we still offer the best coverage possible.</p>
                    </div>

                    <div class="feature-item">
                        <img src={peopleIcon} id="people-icon" alt="people-icon" />
                        <h2 class="title subtitle">People First</h2>
                        <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make
                sure you’re covered when you need it.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AtAGlance;