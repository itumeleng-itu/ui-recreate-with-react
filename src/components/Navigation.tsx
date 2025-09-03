import React from 'react';
import logoImg from '../assets/images/logo.svg'

type NavigationProps ={
  logo?: string;
  menuItems?: string[];
  contactText?: string;
  onContactClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({logo = logoImg,menuItems = ["About", "Services", "Projects"],contactText = "CONTACT",onContactClick = () => {}}) => {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src={logo} alt="sunnyside" style={{ height: 24 }} />
      </div>
      <ul className="nav-menu">
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="contact-btn" onClick={onContactClick}>
        {contactText}
      </button>
    </nav>
  );
};

export default Navigation;
