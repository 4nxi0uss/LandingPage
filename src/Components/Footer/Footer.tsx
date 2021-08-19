
import Logo from '../../img/logoFooter.svg'
// import { ReactComponent as ReactLogo } from '../../img/logo.svg'
import fb from '../../img/icon-facebook.svg'
import inst from '../../img/icon-instagram.svg'
import twitter from '../../img/icon-twitter.svg'
import pinterest from '../../img/icon-pinterest.svg'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <img className='footerLogo' src={Logo} alt="sunnyside logo" />
            {/* <ReactLogo /> */}


            <div className='btnWraper'>
                <button className='footerAboutBtn'>About</button>
                <button className='footerServicesBtn'>Services</button>
                <button className='footerProjectsBtn'>Projects</button>
            </div>
            <div className='socialIconWraper'>
                <img src={fb} alt="Facebook icon" />
                <img src={inst} alt="Instagram icon" />
                <img src={twitter} alt="Twitter icon" />
                <img src={pinterest} alt="Printerest icon" />
            </div>
        </footer>
    )
}

export default Footer