import './Hero.css';

const Hero = () => {
  return (
    <section className="vr-hero" id='home'>
      <p className='vr-hero-intro'>
        HELLO, I'M
      </p>
      <h1 className='vr-hero-name'>
        Vinil Rathod
      </h1>
      <p className="vr-hero-eyebrow">
        FRONTEND ENGINEER · INDIA 
      </p>
      <h1 className='vr-hero-title'>
        I build thoughtful interfaces and reliable web experiences.
      </h1>
      <p className="vr-hero-description">
        I'm a frontend engineer with 4+ years of experience building and enhancing enterprise web applications. I focus on creating intuitive interfaces, maintainable components and reliable user experiences.
      </p>
      <div className="vr-hero-actions">
        <a href="#work" className="vr-button-primary">
          Explore my work
        </a>
        <a href="#contact" className="vr-button-secondary">
          Get in touch &#8599;
        </a>
      </div>
    </section>
  )
}

export default Hero
