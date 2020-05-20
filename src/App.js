import React from 'react';
import './App.scss';
/* image imports */
import logo from './images/logo.svg';
import snappyIcon from './images/icon-snappy-process.svg';
import affordableIcon from './images/icon-affordable-prices.svg';
import peopleIcon from './images/icon-people-first.svg';
import BurgerDropdown from './images/icon-hamburger.svg';
import CloseIcon from './images/icon-close.svg';
import familyMobile from './images/image-intro-mobile.jpg';
import familyDesktop from './images/image-intro-desktop.jpg';
import bgIntroDesktopLeft from './images/bg-pattern-intro-left-desktop.svg';
import bgHwwDesktop from './images/bg-pattern-how-we-work-desktop.svg';
import bgIntroMobileRight from './images/bg-pattern-intro-right-mobile.svg';
import bgIntroDesktopRight from './images/bg-pattern-intro-right-desktop.svg';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isClicked: false,
            isDesktop: true
        };
        /* bind custom functions */
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.getDesktopHeader = this.getDesktopHeader.bind(this);
        this.getMobileHeader = this.getMobileHeader.bind(this);
    }
    componentDidMount() { // every time the component is successfully called, this event is triggered
        window.addEventListener("resize", this.updateBrowserWidth = this.updateBrowserWidth.bind(this));
        this.updateBrowserWidth();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateBrowserWidth = this.updateBrowserWidth.bind(this));
    }
    updateBrowserWidth() {
        if (window.innerWidth <= 500) { // size in pixels
            this.setState({
                isDesktop: false
            })
        }
        else {
            this.setState({
                isDesktop: true
            })
        }
    }
    toggleDropdown(event) {
        event.preventDefault();
        this.setState(state => ({
            isClicked: !state.isClicked // setting to opposite of current state
        }));

    }
    getMobileHeader() {
        let ddownContent; // rendering content separately in order to align to viewport properly
        if (this.state.isClicked === true) {
            ddownContent =
                <div className="ddown-content">
                    <a href="/" alt="how-we-work">How we work</a>
                    <a href="/" alt="blog">Blog</a>
                    <a href="/" alt="account">Account</a>
                    <a href="/" alt="view-plans" className="button" id="header-button">View plans</a>
                </div>;
        }
        return (
            <header>
                <div className="header-parent">
                    <div className="header-logo"><img src={logo} alt="company-logo" /></div>
                    <div className="dropdown-container"></div>
                    {
                        this.state.isClicked ? (
                            <div>
                                <img onClick={this.toggleDropdown} className="ddown-button close" src={CloseIcon} alt="close-navigation" />
                            </div>

                        ) : (
                                <div>
                                    <img onClick={this.toggleDropdown} className="ddown-button burger" src={BurgerDropdown} alt="burger-dropdown" />
                                </div>
                            )
                    }

                </div>
                {ddownContent}
                <img src={familyMobile} alt="family" id="family-photo" />
            </header>
        )
    }
    getDesktopHeader() {
        return (
            <header className="header-parent">
                <div className="logo"><img src={logo} alt="company-logo" /></div>
                <div className="align-items">
                    <div className="header-items">How we work</div>
                    <div className="header-items">Blog</div>
                    <div className="header-items">Account</div>
                    <div className="header-items button" id="header-button">View plans</div>
                </div>
            </header>
        )
    }
    render() {
        if (this.state.isDesktop) {
            return (this.getDesktopHeader());
        }
        else {
            return (this.getMobileHeader());
        }

    }
}

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            isDesktop: true
        }
    }
    componentDidMount() { // every time the component is successfully called, this event is triggered
        window.addEventListener("resize", this.updateBrowserWidth = this.updateBrowserWidth.bind(this));
        this.updateBrowserWidth();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateBrowserWidth = this.updateBrowserWidth.bind(this));
    }
    updateBrowserWidth() {
        if (window.innerWidth <= 500) { // size in pixels
            this.setState({
                isDesktop: false
            })
        }
        else {
            this.setState({
                isDesktop: true
            })
        }
    }
    render() {
        if (this.state.isDesktop) {
            return (
                <div className="intro-container">
                    <hr className="line-decoration"></hr>
                    <h2 className="title" id="intro-title">Humanizing your insurance.</h2>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                    <div className="button" id="intro-button">View plans</div>
                    <img src={familyDesktop} alt="family" id="family-photo" />
                    <img src={bgIntroDesktopRight} alt="wavy background" id="wavy-right-bg" />
                    <img src={bgIntroDesktopLeft} alt="wavy-bg" id="wavy-left-bg" />
                </div>
            );
        }
        else {
            return (
                <div className="intro-container">
                    <h2 className="title" id="intro-title">Humanizing your insurance.</h2>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                    <div className="button" id="intro-button">View plans</div>
                    <img src={bgIntroMobileRight} alt="wavy background" id="wavy-transition-bg" />
                </div>
            );
        }
    }
}

class AtAGlance extends React.Component {
    render() {
        return (
            <div className="at-a-glance">
                <hr className="line-decoration"></hr>
                <h2 className="title">We’re different</h2>
                <div className="feature-list">
                    <div className="feature-item">
                        <img src={snappyIcon} alt="snappy-icon" />
                        <h2 className="title subtitle">Snappy Process</h2>
                        <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
                    </div>

                    <div className="feature-item" id="middle-item">
                        <img src={affordableIcon} alt="people-icon" />
                        <h2 className="title subtitle">Affordable Prices</h2>
                        <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                    </div>

                    <div className="feature-item">
                        <img src={peopleIcon} alt="people-icon" />
                        <h2 className="title subtitle">People First</h2>
                        <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
                    </div>
                </div>
            </div>
        )
    }
}

class HowWeWork extends React.Component {
    constructor() {
        super();
        this.state = {
            isDesktop: true
        }
        this.getDesktopView = this.getDesktopView.bind(this);
        this.getMobileView = this.getMobileView.bind(this);
    }
    componentDidMount() { // every time the component is successfully called, this event is triggered
        window.addEventListener("resize", this.updateBrowserWidth = this.updateBrowserWidth.bind(this));
        this.updateBrowserWidth();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateBrowserWidth = this.updateBrowserWidth.bind(this));
    }
    updateBrowserWidth() {
        if (window.innerWidth <= 500) { // size in pixels
            this.setState({
                isDesktop: false
            })
        }
        else {
            this.setState({
                isDesktop: true
            })
        }
    }
    getDesktopView() {
        return (
            <div className="how-we-work">
                <h2 className="title">Find out more about how we work</h2>
                <div className="button" id="hww-button">How we work</div>
                <img src={bgHwwDesktop} alt="hww-button" id="hww-wavy-bg" />
            </div>
        )
    }
    getMobileView() {
        return (
            <div className="how-we-work">
                <h2 className="title">Find out more about how we work</h2>
                <div className="button" id="hww-button">How we work</div>
            </div>
        )
    }
    render() {
        if (this.state.isDesktop) {
            return (this.getDesktopView());
        }
        else {
            return (this.getMobileView());
        }
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer className="contact-container">
                <div className="icon-bar">
                    <img src={logo} alt="company-logo" className="logo" />
                    <div className="socials-container">
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path fill="#837D88" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </span>

                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                                <path fill="#837D88" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" />
                            </svg>
                        </span>

                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path fill="#837D88" d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                            </svg>
                        </span>

                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path fill="#837D88" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </span>
                    </div>
                </div>

                <hr></hr>
                <div className="footer-items">
                    <div className="footer-section">
                        <p className="link-section">Our company</p>
                        <p className="link">How we work</p>
                        <p className="link">Why Insure?</p>
                        <p className="link">View plans</p>
                        <p className="link">Reviews</p>
                    </div>

                    <div className="footer-section">
                        <p className="link-section">Help me</p>
                        <p className="link">FAQ</p>
                        <p className="link">Terms of use</p>
                        <p className="link">Privacy policy</p>
                        <p className="link">Cookies</p>
                    </div>

                    <div className="footer-section">
                        <p className="link-section">Contact</p>
                        <p className="link">Sales</p>
                        <p className="link">Support</p>
                        <p className="link">Live chat</p>
                    </div>

                    <div className="footer-section">
                        <p className="link-section">Others</p>
                        <p className="link">Careers</p>
                        <p className="link">Press</p>
                        <p className="link">Licenses</p>
                    </div>
                </div>
            </footer>
        )
    }
}

function App() {
    return (
        <div className="App">
            <Header />
            <Intro />
            <AtAGlance />
            <HowWeWork />
            <Footer />
        </div>
    )
}
export default App;
