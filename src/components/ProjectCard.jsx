import './ProjectCard.css';

const ProjectCard = ({ number, title, description, technologies, projectUrl, image }) => {
  return (
    <article className='vr-project-card'>
      <div className='vr-project-preview'>
        { image ? (
            <img src={image} alt={`${title} project screenshot`}/>
        ) : (
            <span className='vr-preview-label'>VISUALS UNAVAILABLE</span>
        )}
      </div>
      <div className='vr-project-details'>
        <span className='vr-project-number'>{number}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='vr-project-technologies'>
            {technologies.map(technology => {
                return (
                    <span key={technology}>{technology}</span>
                )
            })}
        </div>
        {
            projectUrl && (
                <a 
                    href={projectUrl}
                    className='vr-project-link'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    View Project &#8599;
                </a>
            )
        }
      </div>
    </article>
  )
}

export default ProjectCard
