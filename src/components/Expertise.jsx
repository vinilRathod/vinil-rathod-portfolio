import './Expertise.css';

const Expertise = () => {
  return (
    <section className='vr-expertise' id='expertise'>
        <div className='vr-expertise-heading'>
            <p className='vr-expertise-eyebrow'>
                WHAT I WORK WITH
            </p>
            <h2>
                My areas of expertise.
            </h2>
        </div>
        <div className='vr-expertise-grid'>
            <div className='vr-expertise-card'>
                <span className='vr-expertise-number'>01</span>
                <h3>Frontend Development</h3>
                <p>ReactJS · Javascript · HTML5 · CSS3</p>
            </div>
            <div className='vr-expertise-card'>
                <span className='vr-expertise-number'>02</span>
                <h3>UI Engineering</h3>
                <p>Component Architecture · Responsive Design · UI Debugging</p>
            </div>
            <div className='vr-expertise-card'>
                <span className='vr-expertise-number'>03</span>
                <h3>Frameworks & Libraries</h3>
                <p>BackboneJS · ExtJS · jQuery · Material UI</p>
            </div>
            <div className='vr-expertise-card'>
                <span className='vr-expertise-number'>04</span>
                <h3>Tools & Workflow</h3>
                <p>Git · Jenkins · npm · Browser Devtools</p>
            </div>
        </div>
    </section>
  )
}

export default Expertise
