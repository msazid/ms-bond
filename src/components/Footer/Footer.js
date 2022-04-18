import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="fixed-bottom bg-light text-center text-lg-start">
        <div class="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
          © 2022 Copyright:
          <Link to='/' class="text-dark">mrbond.com</Link>
        </div>
      </footer>
    );
};

export default Footer;