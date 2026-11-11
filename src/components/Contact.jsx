import './Contact.css';

const Contact = () => {
  return (
    <section className='vr-contact' id='contact'>
        <div className='vr-contact-content'>
            <p className='vr-contact-eyebrow'>
                WHAT'S NEXT?
            </p>
            <h2>
                Have a project or opportunity
                <span> in your organization?</span>
            </h2>
            <p className='vr-contact-description'>
                I'm open to discussing interesting frontend-focused opportunities and meaningful work.
            </p>
            <a
                href="mailto:vinilrathod5@gmail.com"
                className='vr-contact-button'
            >
                Get in touch <span>&#8599;</span>
            </a>
        </div>
    </section>
  )
}

export default Contact
