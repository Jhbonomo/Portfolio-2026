import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ContactForm as ContactFormData } from '../types';
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const onSubmit = async (data: ContactFormData) => {
    setStatus('sending');
    try {
      await axios.post('/api/contact', data);
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <motion.div
          className="contact-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourprofile
                </a>
              </div>
              <div className="contact-item">
                <strong>GitHub:</strong>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  github.com/yourusername
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                {...register('message', { required: 'Message is required' })}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="error-message">{errors.message.message}</span>}
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="status-message success">Message sent successfully!</div>
            )}
            {status === 'error' && (
              <div className="status-message error">Failed to send message. Please try again.</div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
