import React from 'react';
import logoImg from '../assets/images/logo.svg'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'

type NavigationProps ={
  logo?: string;
  menuItems?: string[];
  contactText?: string;
  onContactClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  logo = logoImg,
  menuItems = ["About", "Services", "Projects"],
  contactText = "CONTACT",
  onContactClick = () => {}
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

      <button
        className="hamburger"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        <img src={hamburgerIcon} alt="menu" style={{ width: 24, height: 18 }} />
      </button>

      {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <button className="mobile-menu-item" onClick={() => setIsMenuOpen(false)}>{item}</button>
              </li>
            ))}
            <li>
              <button className="mobile-contact-btn" onClick={() => { setIsMenuOpen(false); onContactClick(); }}>
                {contactText}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
