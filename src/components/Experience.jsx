import './Experience.css';
import experiences from '../../src/data/experiences.json';

const Experience = () => {
  return (
    <section className='vr-experience' id='experience'>
        <div className='vr-experience-heading'>
            <p className='vr-experience-eyebrow'>MY JOURNEY</p>
            <h2>Where I've made impact</h2>
        </div>
        <div className='vr-experience-content'>
            {experiences.map(experience => {
                return (
                    <div className='vr-company' key={experience.company}>
                        <div className='vr-company-header'>
                            <h3>{experience.company}</h3>
                            <p>{experience.duration}</p>
                        </div>
                        {experience.roles.map(role => {
                            return (
                                <div className='vr-experience-item' key={role.designation}>
                                    <div className='vr-experience-meta'>
                                        <p>{role.duration}</p>
                                    </div>
                                    <div className='vr-experience-details'>
                                        <h4>{role.designation}</h4>
                                        <p>{role.description}</p>
                                        <div className='vr-experience-tags'>
                                            {role.technologies.map(tech => {
                                                return (
                                                    <span key={tech}>{tech}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Experience
