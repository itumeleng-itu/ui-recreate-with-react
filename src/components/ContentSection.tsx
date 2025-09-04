import React from 'react';

type ContentSectionProps ={
  title: string;
  text: string;
  linkText: string;
  background:string;
  reversed?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, text, linkText = "LEARN MORE", background, reversed = false, }) => {
  const sectionClass = `contentsection${reversed ? ' reversed' : ''}`;
  
  return (
    <section className={sectionClass}>
      <div className="contentarea" style={{ 
            backgroundColor:"white",
            textAlign:"start",
            
          }}>

        <h2 className="sectiontitle" style={{
          fontFamily:"Barlow",
          fontWeight:"600",
        }}>{title}</h2>
        <p className="sectiontext" style={{
          fontSize:"12.8px"
        }}>{text}</p>
        <a href="#" className="learnmore" style={{
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
