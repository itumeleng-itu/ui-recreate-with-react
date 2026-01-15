import React from 'react';

type ServiceCardProps = {
  title: string;
  text: string;
  pic: string;
  textColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, text, pic, textColor }) => {
  return (
    <div
      className="servicecard"
      style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="cardcontents">
        <h3 
          className="servicetitle"
          style={textColor ? { color: textColor } : undefined}
        >
          {title}
        </h3>
        <p 
          className="servicetext"
          style={textColor ? { color: textColor } : undefined}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
