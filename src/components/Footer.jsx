import './Footer.css';

const Footer = () => {
  return (
    <footer className='vr-footer'>
        <div className='vr-footer-content'>
            <a href='#home' className='vr-footer-logo'>
                VR
            </a>
            <p>Designed and built with intention.</p>
            <div className='vr-footer-links'>
                <a href='#work'>Work</a>
                <a href='#about'>About</a>
                <a href='#experience'>Experience</a>
                <a href='#contact'>Contact</a>
            </div>
            <p className='vr-footer-copyright'>
                &#169; {new Date().getFullYear()} VR All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer
