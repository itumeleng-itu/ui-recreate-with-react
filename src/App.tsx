//import React from 'react';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
//import ServicesSection from './components/ServicesSection';
//import TestimonialsSection from './components/TestimonialsSection';
//import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import './App.css';
import egg from './assets/images/mobile/image-transform.jpg'
import cup from './assets/images/mobile/image-stand-out.jpg'
import graphic from './assets/images/desktop/image-graphic-design.jpg'
import photo from './assets/images/desktop/image-photography.jpg'
import emily from './assets/images/image-emily.jpg'
import thomas from './assets/images/image-thomas.jpg'
import jennie from './assets/images/image-jennie.jpg'
import MyGallery from './components/GalleryItem';
import milk from './assets/images/desktop/image-gallery-milkbottles.jpg'
import slice from './assets/images/desktop/image-gallery-orange.jpg'
import cone from './assets/images/desktop/image-gallery-cone.jpg'
import sugar from './assets/images/desktop/image-gallery-sugarcubes.jpg'
import Testimonial from './components/Testimonial'
import ServiceCard from './components/ServiceCard'



function App() {

  return (
    <div className="agency-website">
      <HeroSection title="WE ARE CREATIVES" showArrow />
      
      <ContentSection 
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        background={egg}
        linkText='LEARN MORE'
      />
      
      <ContentSection 
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
        background={cup}
        linkText='LEARN MORE'
        reversed
      />
      
      <div className="servicessection">
        <ServiceCard 
          title="Graphic Design"
          text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention"
          pic={graphic}
        />
        <ServiceCard 
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          pic={photo}
        />
      </div>
      
      <section className="testimonials">
        <h2 className="testimonialstitle">Client Testimonials</h2>
        <div className="testimonialsgrid">
          <Testimonial 
            text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit." 
            author="Emily R." 
            role="Marketing Director" 
            pic={emily}
          />
          <Testimonial 
            text="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." 
            author="Thomas S." 
            role="Chief Operating Officer" 
            pic={thomas}
          />
          <Testimonial 
            text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!" 
            author="Jennie F." 
            role="Business Owner" 
            pic={jennie}
          />
        </div>
      </section>
      
      <div className="gallerysection" style={{
        display:"grid",
        gridTemplateColumns:"repeat(4, 1fr)",
        
      }}>
        <MyGallery photo={milk} onClick={() => console.log('milk clicked')} />
        <MyGallery photo={slice} onClick={() => console.log('orange slice clicked')} />
        <MyGallery photo={cone} onClick={() => console.log('ice cream cone clicked')} />
        <MyGallery photo={sugar} onClick={() => console.log('sugar cubes clicked')} />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
