import React from 'react';
import Navigation from './Navigation';
import arrow from '../assets/images/icon-arrow-down.svg';
import back from '../assets/images/desktop/image-header.jpg'

type HeroSectionProps = {
  title: string;
  showArrow?: boolean;
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, showArrow }) => {
  return (
    <section className="herosection" style={{
      backgroundImage: `url(${back})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Navigation />
      <div className="herocontent">
        <h1 className="herotitle">{title}</h1>

        {showArrow && (
          <div className="arrowdown">
            <img src={arrow} alt="Scroll down" />
          </div>
        )}
      </div>

    </section>
  );
};

export default HeroSection;
