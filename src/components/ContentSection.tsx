import React from 'react';

type ContentSectionProps ={
  title: string;
  text: string;
  linkText: string;
  background:string;
  reversed?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, text, linkText = "LEARN MORE", background, reversed = false, }) => {
  const sectionClass = `content-section${reversed ? ' reversed' : ''}`;
  
  return (
    <section className={sectionClass}>
      <div className="content-area" style={{ 
            backgroundColor:"white",
            textAlign:"start",
            
          }}>

        <h2 className="section-title" style={{
          fontFamily:"Barlow",
          fontWeight:"600",
        }}>{title}</h2>
        <p className="section-text" style={{
          fontSize:"12.8px"
        }}>{text}</p>
        <a href="#" className="learn-more" style={{
          fontFamily:"Fraunces",
          fontWeight:"900",
        }}>{linkText}</a>
      </div>
      <div className="art" style={{
        backgroundImage:`url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        //minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}></div>
    </section>
  );
};

export default ContentSection;
