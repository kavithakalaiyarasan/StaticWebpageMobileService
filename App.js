import React from 'react';
import './App.css';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Creative Studio</h1>
        <p>Your one-stop solution for web, mobile, and cloud services.</p>
        <button className="cta-button">Get Started</button>
      </header>
      
      <section className="services">
        <h2>Our Core Services</h2>
        <div className="service-cards">
          <div className="card">
            <i className="fa-code"></i>
            <h3>Web Development</h3>
            <p>Building fast, responsive, and modern websites that scale.</p>
          </div>
          <div className="card">
            <i className="fa-mobile-alt"></i>
            <h3>Mobile Development</h3>
            <p>Developing mobile apps for Android and iOS platforms.</p>
          </div>
          <div className="card">
            <i className="fa-cloud"></i>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure solutions for modern businesses.</p>
          </div>
        </div>
      </section>
      
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"The best development team I've worked with. Delivered quality work on time!"</p>
          <span>- Ram, CEO at TechStart</span>
        </div>
        <div className="testimonial">
          <p>"Great communication and top-notch skills. Our app is now performing better than ever!"</p>
          <span>- Kavitha, CTO at CloudCorp</span>
        </div>
      </section>
      
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>We'd love to work with you. Let's build something great together!</p>
       
      </section>
      
      <footer>
        <p>© 2024 Our Creative Studio | Designed with ♥ by Us</p>
      </footer>
    </div>
  );
}

export default App;
