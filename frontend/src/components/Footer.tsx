import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
