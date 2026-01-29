import { motion } from 'framer-motion'
import { HiBriefcase } from 'react-icons/hi'
import { fadeInUp } from '../utils/animations'

const Experience = () => {
    const experience = {
        title: "Junior AI Trainee Intern",
        company: "Compozent",
        period: "Dec 2024 - Jan 2025",
        points: [
            "Gained hands-on exposure to AI concepts, model workflows, and data processing",
            "Assisted in developing and analyzing AI-based solutions for practical use cases",
            "Learned industry practices for problem-solving, teamwork, and project execution",
            "Actively contributed to tasks with a strong focus on learning and implementation"
        ]
    }

    return (
        <section id="experience" className="experience">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">My professional journey so far</p>
                </motion.div>

                <motion.div
                    className="timeline"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="timeline-item glass-card">
                        <div className="timeline-marker">
                            <HiBriefcase />
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3>{experience.title}</h3>
                                <span className="timeline-company">{experience.company}</span>
                            </div>
                            <span className="timeline-period">{experience.period}</span>
                            <ul className="timeline-points">
                                {experience.points.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
