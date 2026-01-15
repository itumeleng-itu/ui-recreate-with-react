import React from 'react';
import Navigation from './Navigation';
import arrow from '../assets/images/icon-arrow-down.svg';
import desktopHeader from '../assets/images/desktop/image-header.jpg';
import mobileHeader from '../assets/images/mobile/image-header.jpg';

type HeroSectionProps = {
  title: string;
  showArrow?: boolean;
  onArrowClick?: () => void;
  onContactClick?: () => void;
  onNavClick?: (sectionId: string) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  showArrow, 
  onArrowClick,
  onContactClick,
  onNavClick 
}) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      className="herosection" 
      style={{
        backgroundImage: `url(${isMobile ? mobileHeader : desktopHeader})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <Navigation 
        onContactClick={onContactClick}
        onNavClick={onNavClick}
      />
      <div className="herocontent">
        <h1 className="herotitle">{title}</h1>

        {showArrow && (
          <div 
            className="arrowdown" 
            onClick={onArrowClick}
            role="button"
            aria-label="Scroll to content"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onArrowClick?.()}
          >
            <img src={arrow} alt="Scroll down" />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
