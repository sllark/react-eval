import React from "react";
import '@splidejs/splide/dist/css/splide.min.css';



const Footer = (props) => {
  return (
    <footer className='footer'>
      <p>
        Copyright © {new Date().getFullYear()}. Dapp University. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;