import './About.css';

const About = () => {
  return (
    <section className='vr-about' id='about'>
        <div className='vr-about-heading'>
            <p className='vr-section-eyebrow'>A LITTLE ABOUT ME</p>
            <h2>Beyound writing code.</h2>
        </div>
        <div className='vr-about-content'>
            <p>
                I'm a frontend engineer who enjoys turning complex
                requirements into intuitive and meaningful user
                experiences.
            </p>

            <p>
                Over the past 4 years, I've worked on enterprise
                applications, building interfaces, improving existing
                features and solving frontend challenges using
                React, JavaScript and modern web technologies.
            </p>

            <p>
                I believe good frontend engineering is about more
                than making things look right. It's about building
                interfaces that are accessible, maintainable and
                reliable.
            </p>
        </div>
    </section>
  )
}

export default About
