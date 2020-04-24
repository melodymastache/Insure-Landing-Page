import React from 'react';
import fbIcon from "../images/icon-facebook.svg";
import twitIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instaIcon from "../images/icon-instagram.svg";

class Footer extends React.Component {
    render() {
        return (
            <footer class="contact">
                <div class="icon-bar">
                    <img src={require("../images/logo.svg")} alt="company-logo" class="logo" />
                    <div class="icons">
                        <img src={fbIcon} alt="facebook" />
                        <img src={twitIcon} alt="twitter" />
                        <img src={pinterestIcon} alt="pinterest" />
                        <img src={instaIcon} alt="instagram" />
                    </div>
                </div>

                <hr></hr>
                <div class="footer-items">
                    <div class="footer-section">
                        <p class="link-section">Our company</p>
                        <p class="link">How we work</p>
                        <p class="link">Why Insure?</p>
                        <p class="link">View plans</p>
                        <p class="link">Reviews</p>
                    </div>

                    <div class="footer-section">
                        <p class="link-section">Help me</p>
                        <p class="link">FAQ</p>
                        <p class="link">Terms of use</p>
                        <p class="link">Privacy policy</p>
                        <p class="link">Cookies</p>
                    </div>

                    <div class="footer-section">
                        <p class="link-section">Contact</p>
                        <p class="link">Sales</p>
                        <p class="link">Support</p>
                        <p class="link">Live chat</p>
                    </div>

                    <div class="footer-section">
                        <p class="link-section">Others</p>
                        <p class="link">Careers</p>
                        <p class="link">Press</p>
                        <p class="link">Licenses</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;