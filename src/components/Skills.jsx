import { motion } from 'framer-motion'
import { FaGithub, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa'
import {
    SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb,
    SiPostgresql, SiExpress, SiVercel, SiPostman
} from 'react-icons/si'
import { HiCode } from 'react-icons/hi'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "C", icon: <HiCode /> },
                { name: "C++", icon: <HiCode /> },
                { name: "Python", icon: <FaPython /> }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React.js", icon: <FaReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "GitHub", icon: <FaGithub /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "Vercel", icon: <SiVercel /> }
            ]
        }
    ]

    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">Technologies I work with</p>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-category glass-card"
                            variants={scaleIn}
                        >
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="skill-item"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
