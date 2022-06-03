import React from 'react'
import "./footer.css"
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram} from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            {/* eslint-disable-next-line */}
           <a href="#" className="footer__logo"> carthworks</a>
            <ul className="permalinks">
                {/* eslint-disable-next-line */}
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#contact"> Contact us</a></li>
            </ul>
            <ul className="footer__socials">
                {/* eslint-disable-next-line */}
                <li><a href="http://facebook.com"><FaFacebookF/></a></li>
                <li><a href="http://instagram.com"><FiInstagram/></a></li>
                <li><a href="http://facebook.com"><IoLogoTwitter /></a></li>
            </ul>
            <div className="footer__copyright">
                <small> &copy; carthworks. All right reserved</small>
            </div>
        </footer>
    )
}

export default Footer
