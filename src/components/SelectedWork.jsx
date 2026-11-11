import './SelectedWork.css';
import projects from '../../src/data/projects.json';
import ProjectCard from './ProjectCard';

console.log(projects)

const SelectedWork = () => {
  return (
    <section className="vr-selected-work" id="work">
      <div className='vr-section-heading'>
        <p className='vr-section-eyebrow'>
            SELECTED WORK
        </p>
        <h2>
            A selection of work I've built.
        </h2>
        <p>
            A selection of product features and frontend experiences I've contributed to.
        </p>
      </div>
      <div className='vr-projects-grid'>
        {projects.map(project => {
            return (
                <ProjectCard key={project.number} {...project} />
            )
        })}
      </div>
    </section>
  )
}

export default SelectedWork
