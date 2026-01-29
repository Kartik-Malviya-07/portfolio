import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiMongodb, SiJavascript } from 'react-icons/si'
import { HiCode, HiSparkles } from 'react-icons/hi'
import useTypingEffect from '../hooks/useTypingEffect'

const Hero = () => {
    const typedText = useTypingEffect([
        'Full Stack Developer',
        'React.js Enthusiast',
        'AI/ML Explorer',
        'Problem Solver'
    ])

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-badge"
                >
                    <HiSparkles /> Open to Opportunities
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Hi, I'm <span className="gradient-text">Kartik Malviya</span>
                </motion.h1>

                <motion.div
                    className="hero-typed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="typed-text">{typedText}</span>
                    <span className="cursor">|</span>
                </motion.div>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Passionate about building responsive, user-friendly web applications with
                    modern frontend and backend technologies. Currently pursuing B.E. in Information Technology.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a href="#projects" className="btn btn-primary">
                        <HiCode /> View My Work
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        <FaEnvelope /> Get in Touch
                    </a>
                </motion.div>

                <motion.div
                    className="hero-socials"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <a href="https://github.com/Kartik-Malviya-07" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/kartik-malviya-5915a52b8" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:kartikmalviya64@gmail.com" className="social-link">
                        <FaEnvelope />
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className="compiler-ui glass-card">
                    <div className="compiler-header">
                        <div className="window-controls">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="file-name">solution.js</div>
                    </div>

                    <div className="compiler-body">
                        <div className="code-editor">
                            <div className="line-numbers">
                                {[1, 2, 3, 4, 5].map(n => <span key={n}>{n}</span>)}
                            </div>
                            <div className="code-content">
                                <div className="code-line">
                                    <span className="keyword">const</span> <span className="function">solveProblem</span> = (complexIssue) =&gt; &#123;
                                </div>
                                <div className="code-line indent">
                                    <span className="keyword">return</span> <span className="variable">creativeSolutions</span>
                                </div>
                                <div className="code-line indent">
                                    .collect()
                                </div>
                                <div className="code-line indent">
                                    .apply();
                                </div>
                                <div className="code-line">
                                    &#125;; <span className="cursor">|</span>
                                </div>
                            </div>
                        </div>

                        <div className="terminal-panel">
                            <div className="terminal-header">
                                <span>TERMINAL</span>
                            </div>
                            <div className="terminal-content">
                                <div className="terminal-line typing">
                                    <span className="command">&gt;</span> node solution.js
                                </div>
                                <div className="terminal-line success">
                                    <span className="output">✓ Success:</span> Solution deployed in 124ms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
