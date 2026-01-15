import React from 'react';
import logoImg from '../assets/images/logo.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';

type NavItem = {
  label: string;
  sectionId: string;
};

type NavigationProps = {
  logo?: string;
  menuItems?: NavItem[];
  contactText?: string;
  onContactClick?: () => void;
  onNavClick?: (sectionId: string) => void;
}

const defaultMenuItems: NavItem[] = [
  { label: "About", sectionId: "about" },
  { label: "Services", sectionId: "services" },
  { label: "Projects", sectionId: "projects" }
];

const Navigation: React.FC<NavigationProps> = ({
  logo = logoImg,
  menuItems = defaultMenuItems,
  contactText = "CONTACT",
  onContactClick = () => {},
  onNavClick = () => {}
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavClick(sectionId);
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    onContactClick();
  };

  return (
    <nav className="navigation">
      <div className="logo">
        <img src={logo} alt="sunnyside" />
      </div>

      <ul className="nav-menu">
        {menuItems.map((item, index) => (
          <li 
            key={index} 
            onClick={() => handleNavClick(item.sectionId)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick(item.sectionId)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <button className="contact-btn" onClick={handleContactClick}>
        {contactText}
      </button>

      <button
        className="hamburger"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        <img src={hamburgerIcon} alt="" aria-hidden="true" />
      </button>

      {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <button 
                  className="mobile-menu-item" 
                  onClick={() => handleNavClick(item.sectionId)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button 
                className="mobile-contact-btn" 
                onClick={handleContactClick}
              >
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
