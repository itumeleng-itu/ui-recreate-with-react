import React, { useState } from 'react';

type ContentSectionProps = {
  title: string;
  text: string;
  linkText: string;
  background: string;
  reversed?: boolean;
  linkColor?: 'yellow' | 'pink';
  onLearnMoreClick?: () => void;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  text, 
  linkText = "LEARN MORE", 
  background, 
  reversed = false,
  linkColor = 'yellow',
  onLearnMoreClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionClass = `contentsection${reversed ? ' reversed' : ''}`;
  
  return (
    <section className={sectionClass}>
      <div className="contentarea">
        <h2 className="sectiontitle">{title}</h2>
        <p className="sectiontext">{text}</p>
        <button 
          className={`learnmore ${linkColor === 'pink' ? 'pink' : ''}`}
          onClick={onLearnMoreClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            borderBottom: isHovered ? '5px solid red' : '5px solid transparent',
            transition: 'border-bottom 0.3s ease'
          }}
        >
          {linkText}
        </button>
      </div>
      <div 
        className="art" 
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </section>
  );
};

export default ContentSection;