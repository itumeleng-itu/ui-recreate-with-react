import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import './App.css';

// Desktop images for content sections
import eggDesktop from './assets/images/desktop/image-transform.jpg';
import cupDesktop from './assets/images/desktop/image-stand-out.jpg';
import graphic from './assets/images/desktop/image-graphic-design.jpg';
import photo from './assets/images/desktop/image-photography.jpg';

// Testimonial avatars
import emily from './assets/images/image-emily.jpg';
import thomas from './assets/images/image-thomas.jpg';
import jennie from './assets/images/image-jennie.jpg';

// Gallery images
import MyGallery from './components/GalleryItem';
import milk from './assets/images/desktop/image-gallery-milkbottles.jpg';
import slice from './assets/images/desktop/image-gallery-orange.jpg';
import cone from './assets/images/desktop/image-gallery-cone.jpg';
import sugar from './assets/images/desktop/image-gallery-sugarcubes.jpg';

// Components
import Testimonial from './components/Testimonial';
import ServiceCard from './components/ServiceCard';


// Helper function to scroll to a section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <div className="agency-website">
      <HeroSection 
        title="WE ARE CREATIVES" 
        showArrow 
        onArrowClick={() => scrollToSection('about')}
        onContactClick={() => scrollToSection('footer')}
        onNavClick={scrollToSection}
      />
      
      {/* Transform your brand section */}
      <section id="about">
        <ContentSection 
          title="Transform your brand"
          text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          background={eggDesktop}
          linkText='LEARN MORE'
          linkColor='yellow'
          onLearnMoreClick={() => scrollToSection('services')}
        />
      </section>
      
      {/* Stand out section */}
      <ContentSection 
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
        background={cupDesktop}
        linkText='LEARN MORE'
        linkColor='pink'
        onLearnMoreClick={() => scrollToSection('services')}
        reversed
      />
      
      {/* Services Section - Graphic Design & Photography */}
      <section id="services" className="servicessection">
        <ServiceCard 
          title="Graphic Design"
          text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
          pic={graphic}
        />
        <ServiceCard 
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          pic={photo}
        />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
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
      
      {/* Gallery Section */}
      <section id="projects" className="gallerysection">
        <MyGallery photo={milk} alt="Milk bottles" />
        <MyGallery photo={slice} alt="Orange slice" />
        <MyGallery photo={cone} alt="Ice cream cone" />
        <MyGallery photo={sugar} alt="Sugar cubes" />
      </section>
      
      {/* Footer */}
      <Footer id="footer" onNavClick={scrollToSection} />
    </div>
  );
}

export default App;
