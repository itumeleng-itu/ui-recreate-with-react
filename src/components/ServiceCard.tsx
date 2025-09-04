import React from 'react';

type ServiceCardProps= {
  title: string;
  text: string;
  pic: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({title, text, pic }) => {
  return (
    <div
      className="servicecard"
      style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: "24px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <div className="cardcontents" style={{ 
        maxWidth: "520px",
        width: "100%",
        position:"relative",
        bottom:"-100px",
        padding:"15%",
        alignItems:"center"


        }}>
        <h3
          className="servicetitle"
          style={{
            fontFamily: "Fraunces",
            fontWeight: 900,
            margin: "2%",
            color: "#1b1b1b",
          }}
        >
          {title}
        </h3>
        <p
          className="servicetext"
          style={{
            marginTop: "12px",
            marginBottom: 0,
            lineHeight: 1.6,
            color: "#3b3b3b",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
