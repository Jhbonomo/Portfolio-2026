import { motion } from 'framer-motion';
import { Skill } from '../types';
import './Skills.css';

const skillsData: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'AWS', level: 65, category: 'tools' },
  { name: 'Vite', level: 80, category: 'tools' }
];

const Skills = () => {
  const categories = {
    frontend: skillsData.filter(s => s.category === 'frontend'),
    backend: skillsData.filter(s => s.category === 'backend'),
    tools: skillsData.filter(s => s.category === 'tools')
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-categories">
          {Object.entries(categories).map(([category, skills]) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="skills-list">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
