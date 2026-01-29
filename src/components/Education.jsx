import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { fadeInUp } from '../utils/animations'

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">My academic background</p>
                </motion.div>

                <motion.div
                    className="education-card glass-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="education-icon">
                        <HiAcademicCap />
                    </div>
                    <div className="education-content">
                        <h3>Bachelor of Engineering (B.E.)</h3>
                        <span className="education-field">Information Technology</span>
                        <p className="education-institution">Shree L.R. Tiwari College of Engineering, Mira Road</p>
                        <span className="education-period">2023 - 2027</span>
                        <div className="education-courses">
                            <span className="tag">Operating Systems</span>
                            <span className="tag">Computer Networks</span>
                            <span className="tag">Network Design</span>
                            <span className="tag">Artificial Intelligence</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Education
