import React from 'react';
import facebookIcon from '../assets/images/icon-facebook.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import logoImg from '../assets/images/logo.svg'


interface FooterProps {
  logo?: string;
  navItems?: string[];
}

const Footer: React.FC<FooterProps> = ({ logo =logoImg,navItems = ["About", "Services", "Projects"],}) => {
  const icons = [
    { src: facebookIcon, alt: 'Facebook', href: '#' },
    { src: instagramIcon, alt: 'Instagram', href: '#' },
    { src: twitterIcon, alt: 'Twitter', href: '#' },
    { src: pinterestIcon, alt: 'Pinterest', href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="sunnyside" style={{ height: 24 }} />
      </div>
      <nav className="footer-nav">
        {navItems.map((item, index) => (
          <a key={index} href="#">{item}</a>
        ))}
      </nav>
      <div className="social-icons">
        {icons.map((icon, index) => (
          <a key={index} className="social-icon" href={icon.href} aria-label={icon.alt}>
            <img src={icon.src} alt={icon.alt} style={{ width: 18, height: 18 }} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
