import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'
import { fadeInUp, fadeInLeft, staggerContainer, scaleIn } from '../utils/animations'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Get to know me a little better</p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInLeft}
                    >
                        <div className="glass-card">
                            <p>
                                I'm a <strong>passionate Full Stack Developer</strong> with hands-on experience in building
                                responsive, user-friendly web applications. I thrive in developing scalable solutions
                                and delivering seamless digital experiences.
                            </p>
                            <p>
                                Currently pursuing my <strong>Bachelor of Engineering in Information Technology</strong> at
                                Shree L.R. Tiwari College of Engineering, I combine academic knowledge with practical
                                experience gained through internships and personal projects.
                            </p>
                            <p>
                                My recent experience as a <strong>Junior AI Trainee Intern at Compozent</strong> helped me
                                gain exposure to AI concepts, model workflows, and data processing, further expanding
                                my technical toolkit.
                            </p>

                            <div className="about-info">
                                <div className="info-item">
                                    <FaMapMarkerAlt />
                                    <span>Santacruz(E), Mumbai, India</span>
                                </div>
                                <div className="info-item">
                                    <FaEnvelope />
                                    <span>kartikmalviya64@gmail.com</span>
                                </div>
                                <div className="info-item">
                                    <FaPhone />
                                    <span>+91 9166166028</span>
                                </div>
                                <div className="info-item">
                                    <HiAcademicCap />
                                    <span>B.E. in IT (2023 - 2027)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-stats"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.div className="stat-card glass-card" variants={scaleIn}>
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Major Projects</span>
                        </motion.div>
                        <motion.div className="stat-card glass-card" variants={scaleIn}>
                            <span className="stat-number">1+</span>
                            <span className="stat-label">Internship</span>
                        </motion.div>
                        <motion.div className="stat-card glass-card" variants={scaleIn}>
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Technologies</span>
                        </motion.div>
                        <motion.div className="stat-card glass-card" variants={scaleIn}>
                            <span className="stat-number">3rd</span>
                            <span className="stat-label">Year Student</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
