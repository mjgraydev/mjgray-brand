
import styles from '../Components/Home.module.css';



function Home() {
  return (
    <>
      <div className={styles['hero-section']}>

            <p>Full Stack Engineer, Founder, Mentor, Thought Leader</p>
            <h2>Michael Gray</h2>
            <p>You already have the tools. Stop shrinking your vision — it’s time to build what you were born to lead.</p>

            <button>Get Started</button>
      </div>

      <section className={styles.elevated}>

        <h1>Experiences that Elevate</h1>
        <h3>Guidance, design, code, and clarity for those building with purpose.</h3>

        <div className={styles['elevated-container']}>

          <div className={styles['elevated-item']}>

            <h2>User Experience (UX) Design Coaching </h2>
            <h2>Dare. Dream. Design.</h2>

            <p>Become the UX Designer who creates unparalled experiences for yourself, and your clients.</p>

            <button>Learn More</button>

          </div>
          
          <div div className={styles['elevated-item']}>
          
            <h2>Front End Development Coaching</h2>
            <h2>Ready. Set. Code!</h2>

            <p>You can code. Unleash the full potential of your creativity and bring your ideas and creations to life.</p>

            <button>Learn More</button>


          </div>
          
          <div div className={styles['elevated-item']}>
          
            <h2>Start Ups, Entrenprenuers and Founders</h2>
            <h2>Scale</h2>

            <p>Started or getting started? The inward outward approach. Learn your personal why then, drive unparalled start up and business growth..</p>

            <button>Learn More</button>


          </div>
          
          <div div className={styles['elevated-item']}>
          
            <h2>Individual Courses & Group Workshops</h2>
            <h2>One to Many</h2>

            <p>Communal leanring enviroments that fosters collaboration and connectivity, fostering transformative learning.</p>
            

            <button>Learn More</button>

          </div>
        
        </div>

      </section>


      <section className={styles['speak-container']}> 

    

        <div >

            <h1>Book the Voice that Moves Visionaries</h1>
            <p>Michael Gray is a full stack engineer, UX strategist, and mentor with over a decade of experience turning ideas into scalable digital solutions. From leading men’s groups to mentoring the next generation of coders and creators, Michael’s voice carries both clarity and conviction. His talks blend high-performance strategy with grounded leadership — inspiring audiences to stop shrinking their vision and start building the future they were born to lead.</p>


          <p>Book him to speak at your next event, workshop, or retreat — and prepare to shift the room.</p>


          <button>Book Michael</button>

        </div>


        <div>


      <video width="640" height="480" autoPlay muted style={{ 
    borderRadius: '15px',
    WebkitBorderRadius: '15px',
    clipPath: 'inset(0px round 15px)'
  }}>
        <source src="/gray_speaking.mp4" type="video/mp4" />
        Your browser doesn't support the video tag.
      </video>

        </div>    
      </section>


      <section className={styles['connect-container']}>

          <div>

            <h1>Join the Community</h1>
            <p>Each week we send out a curated newsletter with aggregated job opportunities, insights, forecast and best practices to level up in your tech career.</p>

            <p>Occasionally, we host live events where we have give aways, and opportunties to meet with Michael one on one. Join the community and stay connected.</p>

          </div>

          <div>

            <h2>Stay Connected</h2>
            <p>After spending over a decade mentoring, teaching, designing and in development, it's only right that I share my experiences with you. Learn from my mistakes and don't strive to be like me, strive to be better.</p>

            <div>

              <div> LinkedIn</div>
              <div>TikTok</div>
              <div>Youtube</div>

            </div>

          </div>

      </section>

   
      
    </>
  );
}

export default Home;