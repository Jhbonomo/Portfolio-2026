import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with expertise in building modern web applications.
                With a strong foundation in both frontend and backend technologies, I create seamless
                user experiences backed by robust server architecture.
              </p>
              <p>
                My journey in web development started several years ago, and I've been constantly
                learning and adapting to new technologies. I believe in writing clean, maintainable
                code and following best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">
                <span>Your Photo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
