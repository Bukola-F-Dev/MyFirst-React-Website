import React from 'react'
import './Footer.css'
import footer_logo from '../assests/logo.avif'
import facebook from '../assests/facebook.png'
import whatsapp from '../assests/whatsapp.png'
import instagram from '../assests/instagram.png'
import linkedin from '../assests/linkedin.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src= {footer_logo} alt=""></img>
                <p>VibeCulture</p>
            </div>
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>About</li>
                <li>Blog</li> 
                <li>Contact</li>
            </ul>
            <div className="social-media-icons">
            <div className="social-links-whatsapp">
                <img src={whatsapp} alt="" className="social-links-whatsapp"></img>
            </div>
            <div className="social-links-facebook">
                <img src={facebook} alt="" className="social-links-facebook"></img>
            </div>
            <div className="social-links">
                <img src={instagram} alt=""></img>
            </div>
            <div className="social-links">
                <img src={linkedin} alt=""></img>
            </div>
            </div>

            <div className="footer-copyright">
                <hr></hr>
                <p>Copyright @ 2025 - All Right reserved.</p>
            </div>
        </div>
    )
}

export default Footer
