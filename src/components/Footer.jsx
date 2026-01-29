const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="logo-text">Kartik Malviya</span>
                        <p>Building digital experiences with passion</p>
                    </div>
                    <div className="footer-links">
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Kartik Malviya. Built with React & Framer Motion</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
