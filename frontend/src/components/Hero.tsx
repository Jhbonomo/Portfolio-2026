import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I build exceptional digital experiences with modern web technologies.
            Specializing in React, Node.js, and TypeScript.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
