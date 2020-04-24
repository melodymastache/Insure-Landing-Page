import React from 'react';
import '../App.css';
import logo from '../images/logo.svg';


/* {process.env.PUBLIC_URL + '/images/favicon-32x32.png'}: process.env.PUBLIC_URL refers to the public folder. In React, our app cannot call anything outside of the src folder without this env variable */
class Header extends React.Component {
    render() {
        return (
            <header class="header-parent">
                <div class="logo"><img src={logo} alt="company-logo" /></div>
                <div class="align-items">
                    <div class="header-items">How we work</div>
                    <div class="header-items">Blog</div>
                    <div class="header-items">Account</div>
                    <div class="header-items button" id="header-button">View plans</div>
                </div>
            </header>
        )
    }
}

export default Header;