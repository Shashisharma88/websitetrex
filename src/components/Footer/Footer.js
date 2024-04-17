import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'; // Import your CSS styles
import logo from "../../../assets/logo.png"
import favicon from "../../../assets/favicon.png"
import { MdCopyright } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import {
	BsFacebook,
	BsInstagram,
	BsTwitterX,
	BsLinkedin,
	BsTelegram,
	BsReddit,
	BsMedium,
	BsMegaphone,
} from "react-icons/bs";
import coingeckosocial from "../../../assets/coingeckosocial.png"
const Footer = () => {
    
  return (
    <footer className="footer">
      <div className="footer-section">
        {/* Company logo and description */}
        <div className="company">
              <img src={logo} alt='company logo' className='logo-text'/>
          <p className="description">TREX20 is leading a revolution in GameFi by leveraging the Bitcoin Protocol, offering multiple games, an NFTFi Marketplace for borrowing, lending, and trading NFTs, along with a progressive lotto, all within a single platform.</p>
        </div>
      </div>
      <div className="footer-section">
        <div className='social-container'>
        <p className='footer-header'>Socials</p>
        <div className="socials">
          <a href="https://t.me/trex20OfficialAnnouncement" target='_blank'><BsMegaphone className='socialLinks' /></a>
          <a href="https://t.me/trex20OfficialChat" target='_blank'><BsTelegram className='socialLinks' /></a>
          <a href="https://twitter.com/trex20_official" target='_blank'><BsTwitterX className='socialLinks' /></a>
          <a href="https://medium.com/@trex20" target='_blank'><BsMedium className='socialLinks' /></a>
          {/* <a href="https://coinmarketcap.com/" target='_blank'><SiCoinmarketcap style={{height:"30px",width:"50px"}} className='icon'/></a> */}
          {/* <a href="https://example.com"><img src={coingeckosocial} style={{height:"35px",width:"35px"}} className='icon' /></a> */}
        </div>
      </div>
      </div>
      {/* <div className="footer-section">
    
    <div className="socials">
    <h1>Socials</h1>
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
  </div> */}
      <div className="footer-section">
    
        <div className="contacts" >
        <p className='footer-header' >Contacts</p>
        <a href='#contact'> <p >Contact us</p></a>
        <div style={{display:"flex"}}>
       <p>Reach us at &nbsp;</p>
       <a href="mailto:info@trex20.xyz" target='_self'><p style={{color:"#fba117"}}>info@trex20.xyz</p></a> </div>
          
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-section">

        <div className="legal">
          <div className='legal-privacy' >
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of service</Link></div>
          <p style={{display:"flex",alignItems:"center",opacity:"80%"}} ><FaRegCopyright /> &nbsp;{new Date().getFullYear()} Trex20. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
