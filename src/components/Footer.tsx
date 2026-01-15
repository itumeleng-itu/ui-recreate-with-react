import React from 'react';
import facebookIcon from '../assets/images/icon-facebook.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import logoImg from '../assets/images/logo.svg';

type NavItem = {
  label: string;
  sectionId: string;
};

interface FooterProps {
  id?: string;
  logo?: string;
  navItems?: NavItem[];
  onNavClick?: (sectionId: string) => void;
}

const defaultNavItems: NavItem[] = [
  { label: "About", sectionId: "about" },
  { label: "Services", sectionId: "services" },
  { label: "Projects", sectionId: "projects" }
];

const socialIcons = [
  { src: facebookIcon, alt: 'Facebook', href: 'https://facebook.com' },
  { src: instagramIcon, alt: 'Instagram', href: 'https://instagram.com' },
  { src: twitterIcon, alt: 'Twitter', href: 'https://twitter.com' },
  { src: pinterestIcon, alt: 'Pinterest', href: 'https://pinterest.com' },
];

const Footer: React.FC<FooterProps> = ({ 
  id,
  logo = logoImg,
  navItems = defaultNavItems,
  onNavClick = () => {}
}) => {
  return (
    <footer id={id} className="footer">
      <div className="footer-logo">
        <img src={logo} alt="sunnyside" />
      </div>
      
      <nav className="footer-nav">
        {navItems.map((item, index) => (
          <button 
            key={index} 
            onClick={() => onNavClick(item.sectionId)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      
      <div className="social-icons">
        {socialIcons.map((icon, index) => (
          <a 
            key={index} 
            className="social-icon" 
            href={icon.href} 
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.alt}
          >
            <img src={icon.src} alt="" aria-hidden="true" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
