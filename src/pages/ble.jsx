import React from 'react';
import styles from '../Components/ble.module.css';
import backgroundImg from '../Assets/sean-michael-stripe_VSCO.JPG';
import CalIcon from '../Assets/calendar_icon_white.svg';
import StripeLogo from '../Assets/Stripe.png';
import BLELogo from '../Assets/Bulld Luanch Earn .png';
import LocationIcon from '../Assets/location_icon_white.svg';
import GrayHeadshot from '../Assets/Final MGray.png';
import SeanHeadshot from '../Assets/Sean P. Headshot.png';
import LinkedInIcon from '../Assets/Blue LinkedIn Icon.png';
import WebsiteIcon from '../Assets/Bluex Website Icon.png';
import GitHubIcon from '../Assets/Blue Github Icon.png';
import TwitterIcon from '../Assets/Blue X Logo.png';
import MGLogo from '../Assets/Final MG White.png'
import TextLogo from '../Assets/MG Logo - White - Final.png';

const BLE = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="https://michaelgray.co/" target="_blank" rel="noopener noreferrer">
          <img src={TextLogo} alt="Michael Gray Logo" />
        </a>
         <a href="https://luma.com/2tpf8zvs" target="_blank" rel="noopener noreferrer" className={styles.registerBtn}>
              <button className={styles.filledBtn}>Register</button>
            </a>
      </header>

      <main>
        <section className={styles.sectionOne}>
          <img 
            className={styles.bleImg} 
            src={BLELogo}
            alt="Build. Launch. Earn. Logo" 
          />
          <h2>A Community for Web Designers</h2>
          
          <div className={styles.stripeShoutout}>
            <p>In partnership with</p>
            <img className={styles.stripeLogo} src={StripeLogo}alt="Stripe Logo" />
          </div>
          
          <p className={styles.scrollText}>Scroll For More</p>
        </section>

        <section className={styles.sectionTwo}>
          <div className={styles.sectionTwoItem}>
            <img src={CalIcon} alt="" />
            <p>Friday, September 26, at 1:00pm EDT</p>
          </div>
          <div className={styles.sectionTwoItem}>
            <img src={LocationIcon} alt="Location Icon" />
            <p>Streaming Live from The Content House</p>
          </div>
        </section>

        <section className={styles.videoSection}>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/1HbnqufJ27o?si=3_ngn5uxF9PmP9xf"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title='Build.Launch.Earn. - Weve Got Another Live Stream'
            ></iframe>
          </div>
        </section>

        <section className={styles.sectionThree}>
          <div className={styles.sectionThreeItem}>
            <h2>Turn any website into a membership business.</h2>
          </div>

          <div className={styles.sectionThreeItem}>
            <p>
              Whether you’re freelancing as a web designer or building your next product, one of the most powerful ways to grow is by adding membership functionality to your sites. From logins and gated content to integrated payments and client management, memberships unlock recurring revenue and bigger opportunities.
            </p>

            <p>
              This week’s guest presenter is Geoff Roberts, co-founder of Outseta. Geoff will show how designers and builders can add memberships, payments, CRM, email, and support into their projects — whether you’re working in Webflow, Squarespace, Framer, React, or more. He’ll also highlight how startups can launch faster with MVPs that are ready to scale.
            </p>

            <p>In this workshop, you'll learn how to:</p>

            <ul>
              <li>Add login and membership features to your sites</li>
              <li>Integrate Stripe payments for subscriptions, services, and access control</li>
              <li>Use Outseta to manage memberships alongside CRM, email, and support tools</li>
              <li>osition yourself as a designer who delivers more than just static websites</li>
              <li>THelp startups and clients build faster, more scalable MVPs</li>
            </ul>

            <p>
              Stick around for a live Q&A to get practical answers to your questions.
            </p>

            <p>
              Build, Launch, Earn is a free community workshop series for web designers, created in partnership with Stripe.
            </p>

            <a href="https://luma.com/2tpf8zvs" target="_blank" rel="noopener noreferrer" className={styles.registerBtn}>
              <button className={styles.filledBtn}>Register</button>
            </a>
          </div>
        </section>

        <section className={styles.sectionFour}>
          <div className={styles.sectionFourItem}>
            <h2>Your Host</h2>
          </div>

          <div className={styles.hostCard}>
            <img className={styles.photoResize} src={GrayHeadshot} alt="Michael Gray" />
            <h2>Michael Gray</h2>
            <p>Design-led full stack engineer with a deep product mindset—translating user needs into engineered outcomes.</p>
            
            <div className={styles.socialLinks}>
              <div>
                <a href="https://www.linkedin.com/in/j-mgray/" target="_blank" rel="noopener noreferrer">
                  <img className={styles.iconResize} src={LinkedInIcon} alt="LinkedIn" />
                </a>
              </div>
              <div>
                <a href="https://michaelgray.co/" target="_blank" rel="noopener noreferrer">
                  <img className={styles.iconResize} src={WebsiteIcon} alt="Website" />
                </a>
              </div>
              <div>
                <a href="https://github.com/mjgraydev/" target="_blank" rel="noopener noreferrer">
                  <img className={styles.iconResize} src={GitHubIcon} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.hostCard}>
            <img className={styles.photoResize} src={SeanHeadshot} alt="Sean Pritzkau Headshot" />
            <h2>Sean Pritzkau</h2>
            <p>Marketing strategist helping designers and founders turn scattered efforts into systems that scale.</p>
            
            <div className={styles.socialLinks}>
              <div>
                <a href="https://www.linkedin.com/in/seanpritzkau/" target="_blank" rel="noopener noreferrer">
                  <img className={styles.iconResize} src={LinkedInIcon} alt="LinkedIn" />
                </a>
              </div>
              <div>
                <a href="https://seanpritzkau.com/" target="_blank" rel="noopener noreferrer">
                  <img className={styles.iconResize} src={WebsiteIcon}alt="Website" />
                </a>
              </div>
              <div>
                <a href="https://x.com/seanpritzkau" target="_blank" rel="noopener noreferrer">
                  <img className={styles.iconResize} src={TwitterIcon} alt="X (Twitter)" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionFive}
        
          style={{ 
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        
        
        
        >
          <div className={styles.overlay}>
            <div className={styles.overlayWidth}>
              <h1>You're invited to the live session</h1>
              <p>Ask questions, join the chat, and learn alongside designers building independent businesses and studios—solving real problems for great clients.</p>
            </div>
            <a href="https://luma.com/2tpf8zvs" target="_blank" rel="noopener noreferrer" className={styles.registerBtn}>
              <button className={styles.filledBtn}>Register</button>
            </a>
          </div>
        </section>
      </main>
        {/* NHPro 24: 3*/}
      <footer className={styles.footer}>
        <img src={MGLogo}alt="MG Logo" />
        <p>Michael Gray &copy; 2025</p>
        <p className={styles.creditText}>Design & Developed by Michael Gray</p>

        
      </footer>
    </div>
  );
};

export default BLE;