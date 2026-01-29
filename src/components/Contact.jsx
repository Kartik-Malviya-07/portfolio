import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Let's work together on something great</p>
                </motion.div>

                <motion.div
                    className="contact-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.div className="contact-card glass-card" variants={scaleIn}>
                        <div className="contact-icon"><FaEnvelope /></div>
                        <h3>Email</h3>
                        <a href="mailto:kartikmalviya64@gmail.com">kartikmalviya64@gmail.com</a>
                    </motion.div>

                    <motion.div className="contact-card glass-card" variants={scaleIn}>
                        <div className="contact-icon"><FaPhone /></div>
                        <h3>Phone</h3>
                        <a href="tel:+919166166028">+91 9166166028</a>
                    </motion.div>

                    <motion.div className="contact-card glass-card" variants={scaleIn}>
                        <div className="contact-icon"><FaMapMarkerAlt /></div>
                        <h3>Location</h3>
                        <span>Santacruz(E), Mumbai, India</span>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="contact-socials"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <a href="https://github.com/Kartik-Malviya-07" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/kartik-malviya-5915a52b8" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="mailto:kartikmalviya64@gmail.com" className="social-btn primary">
                        <FaEnvelope /> Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
