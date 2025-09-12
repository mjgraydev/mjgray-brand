
import styles from '../Components/Home.module.css';
import SoCiti from '../Assets/SoCiti Logo.png';
import Stripe from '../Assets/Stripe.png';
import Apple from '../Assets/Apple Logo.png';
import DesignLab from '../Assets/DL Logo (1).png';
import LinkedIn from '../Assets/LinkedIn Icon.png';
import GitHub from '../Assets/GitHub Icon (1).png';
import YouTube from '../Assets/Final YouTube Logo.png'




function Home() {
  return (
    <>
      <div className={styles['hero-section']}>

            <p>Full Stack Engineer, Founder, Mentor, Thought Leader</p>
            <h2>Michael Gray</h2>
            <p>You already have the tools. Stop shrinking your vision — it’s time to build what you were born to lead.</p>

            <button className={styles['action-btn']}>Get Started</button>
      </div>

      <section id='elevation' className={styles.elevated}>

        <h1>Experiences that Elevate</h1>
        <h3>Guidance, design, code, and clarity for those building with purpose.</h3>

        <div className={styles['elevated-container']}>

          <div className={styles['elevated-item']}>

            <h2>User Experience (UX) Design Coaching </h2>
            <h2>Dare. Dream. Design.</h2>

            <p>Become the UX Designer who creates unparalled experiences for yourself, and your clients.</p>


            <a href="https://calendar.app.google/mxxhCDddyRAGsNJt6" target='blank'><button className={styles['action-btn']} >Learn More</button></a>

          

          </div>
          
          <div div className={styles['elevated-item']}>
          
            <h2>Front End Development Coaching</h2>
            <h2>Ready. Set. Code!</h2>

            <p>You can code. Unleash the full potential of your creativity and bring your ideas and creations to life.</p>

             <a href="https://calendar.app.google/mxxhCDddyRAGsNJt6" target='blank'><button className={styles['action-btn']} >Learn More</button></a>


          </div>
          
          <div div className={styles['elevated-item']}>
          
            <h2>Start Ups, Founders and Co Founders</h2>
            <h2>Scale</h2>

            <p>Started or getting started? The inward outward approach. Learn your personal why then, drive unparalled start up and business growth..</p>

             <a href="https://calendar.app.google/mxxhCDddyRAGsNJt6" target='blank'><button className={styles['action-btn']} >Learn More</button></a>


          </div>
          
          <div div className={styles['elevated-item']}>
          
            <h2>Individual Courses & Group Workshops</h2>
            <h2>One to Many</h2>

            <p>Communal leanring enviroments that fosters collaboration and connectivity, fostering transformative learning.</p>
            

             <a href="https://calendar.app.google/mxxhCDddyRAGsNJt6" target='blank'><button className={styles['action-btn']} >Learn More</button></a>

          </div>
        
        </div>

      </section>


      <section id='speaking' className={styles['speak-container']}> 

    

        <div className={styles['speak-text']} >

            <h1>Book the Voice that Moves Visionaries</h1>
            <p>Michael Gray is a full stack engineer, UX strategist, and mentor with over a decade of experience turning ideas into scalable digital solutions. From leading men’s groups to mentoring the next generation of coders and creators, Michael’s voice carries both clarity and conviction. His talks blend high-performance strategy with grounded leadership — inspiring audiences to stop shrinking their vision and start building the future they were born to lead.</p>


          <p>Book him to speak at your next event, workshop, or retreat — and prepare to shift the room.</p>

          <a href="https://forms.gle/vCBy6FdGgrKn5tgE7" target='blank'> <button className={styles['action-btn']}>Book Michael</button></a>
          

        </div>


        <div>


              <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/a2bSOCIBghI?autoplay=1&mute=1&si=cjpnb2dFan4Cn638"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  autoplay fullscreen
                  allowfullscreen
              ></iframe>
        </div>    
      </section>



      <section className={styles['bcv-section']}>

      <h1>Brands, Clients, and Ventures</h1>

      <div className={styles['bcv-logos']}>
        <div>

          <img className={styles['img-width']} src={SoCiti} alt="SoCiti Logo" />

        </div>

        <div> 

          <img className={styles['img-width']} src={Stripe} alt="Stripe Logo" />

        </div>

        <div>

          <img className={styles['img-width']} src={Apple} alt="Apple Logo" />


        </div>

        <div>
          
          <img className={styles['img-width']} src={DesignLab} alt="DesignLab Logo" />
          
          
          </div>

      </div>



      </section>


      <section id='connect' className={styles['connect-container']}>

          <div className={styles['connect-item']} >

            <h1>Join the Community</h1>
            <p>Each week we send out a curated newsletter with aggregated job opportunities, insights, forecast and best practices to level up in your tech career.</p>

            <p>Occasionally, we host live events where we have give aways, and opportunties to meet with Michael one on one. Join the community and stay connected.</p>

            

            <a href="https://forms.gle/A8PS2jTNq4T1vLEcA" target='blank'><button className={styles['getStarted-btn']}>Subscribe</button></a>

          </div>

          <div className={styles['connect-item']} >

            <h2>Stay Connected</h2>
            <p>After spending over a decade mentoring, teaching, designing and in development, it's only right that I share my experiences with you. Learn from my mistakes and don't strive to be like me, strive to be better.</p>

            <div className={styles['connect-logos']}>

              <div> 
                
                
                <a href="https://www.linkedin.com/in/j-mgray/" target='blank'> <img className={styles['connect-logos']} src={LinkedIn} alt="LinkedIn Logo"/>  </a>
              
              
              
              </div>
              
              <div>

               <a href="https://github.com/mjgraydev/" target='blank'> <img className={styles['connect-logos']} src={GitHub} alt="Github Logo"/> </a>

              </div>

              <div>

               <a href="https://youtube.com/@michaelgraymedia?feature=shared" target='blank'> <img className={styles['connect-logos']} src={YouTube} alt="YouTube Logo"/> </a>

              </div>
              
              
              

            </div>

          </div>

      </section>

   
      
    </>
  );
}

export default Home;