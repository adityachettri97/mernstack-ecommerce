import React from 'react'
import playstore from "../images/playstore.jpg";
import appstore from "../images/appstore.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playstore} alt="playstore"/>
            <img src={appstore} alt="Appstore"/>
        </div>

        <div className="midFooter">
            <h1>D-Style</h1>
            <p>High Quality is our first priority</p>

            <p>Copyright 2022 &copy; D-style</p>
        </div>

        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href = " ">Instagram</a>
            <a href = " ">Facebook</a>
            <a href = " ">Twitter</a>
        </div>
        </footer>
  )
}

export default Footer;