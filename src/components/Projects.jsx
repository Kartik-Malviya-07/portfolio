import { motion } from 'framer-motion'
import { FaGithub, FaEthereum } from 'react-icons/fa'
import { SiOpenai } from 'react-icons/si'
import { HiExternalLink, HiBriefcase } from 'react-icons/hi'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'
import { link } from 'framer-motion/client'
import { BiBot } from 'react-icons/bi'

const Projects = () => {
    const projects = [
        {
            title: "PreSlideAI",
            subtitle: "AI-Powered Presentation Generator",
            description: "AI platform that generates professional presentations automatically from user input with dashboards, authentication, and interactive slide previews.",
            tech: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
            features: [
                "Responsive frontend with dashboards and authentication",
                "Backend APIs with FastAPI and OpenAI integration",
                "Optimized UX for fast, intuitive performance"
            ],
            link: "https://www.preslideai.com/",
            github: "https://github.com/Quantura1/PreSlideAi.git",
            icon: <SiOpenai />
        },
        {
            title: "Blockchain Credentials",
            subtitle: "Academic Verification System",
            description: "Decentralized platform to securely verify academic certificates using blockchain technology with smart contracts and IPFS integration.",
            tech: ["React", "Node.js", "Solidity", "Ethereum", "IPFS", "MetaMask"],
            features: [
                "Smart contracts for tamper-proof records",
                "Web interface for issuing and verifying credentials",
                "IPFS for decentralized storage"
            ],
            link: "https://github.com/Kartik-Malviya-07/blokchain.git",
            github: "https://github.com/Kartik-Malviya-07/blokchain.git",
            icon: <FaEthereum />,
            showLiveDemo: false
        },
        {
            title: "Project Management Platform",
            subtitle: "Collaboration & Task Tracking",
            description: "Full-stack project management app with real-time task updates, notifications, team chat, and drag-and-drop Kanban board.",
            tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
            features: [
                "Real-time task updates and notifications",
                "JWT authentication and protected routes",
                "Drag-and-drop Kanban board interface"
            ],
            link: "#",
            github: "#",
            icon: <HiBriefcase />,
            showLiveDemo: false
        },
        {
            title: "SLRTCE AI Chatbot",
            subtitle: "An AI-Powered Virtual Assistant for College Events, Examinations, and Student Support",
            description: "An intelligent campus assistant built to simplify student communication.",
            tech: ["JavaScript", "Python", "React", "RESTful API", "OpenAI"],
            features: [
                "AI-powered chatbot",
                "Real-time college event & examination updates",
                "Instant student support",
                "Responsive web interface"
            ],
            link: "https://github.com/Kartik-Malviya-07/bot.git",
            github: "https://github.com/Kartik-Malviya-07/bot.git",
            icon: <BiBot />,
            showLiveDemo: false
        }
    ]

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Some things I've built with passion</p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-card"
                            variants={scaleIn}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-icon">{project.icon}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <span className="project-subtitle">{project.subtitle}</span>
                            <p className="project-description">{project.description}</p>

                            <ul className="project-features">
                                {project.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>

                            <div className="project-tech">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> Code
                                </a>
                                {project.showLiveDemo !== false && project.link && project.link !== "#" && (
                                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <HiExternalLink /> Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
