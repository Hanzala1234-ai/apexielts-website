import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Users, Brain, Award, Star, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const features = [
    {
      icon: <Play className="feature-icon" style={{color: '#2563eb'}} />,
      title: "AI-Powered Speaking Practice",
      description: "Train with advanced AI speaking partners. Get real-time feedback on pronunciation, fluency, and speaking patterns to accelerate your improvement."
    },
    {
      icon: <Users className="feature-icon" style={{color: '#16a34a'}} />,
      title: "Complete Mock Examinations", 
      description: "Experience authentic IELTS simulations with comprehensive performance analytics and targeted improvement recommendations for optimal results."
    },
    {
      icon: <Brain className="feature-icon" style={{color: '#9333ea'}} />,
      title: "Intelligent Band Scoring",
      description: "Receive precise band score predictions through our sophisticated AI assessment engine that analyzes your performance across all IELTS modules."
    },
    {
      icon: <Award className="feature-icon" style={{color: '#ea580c'}} />,
      title: "Expert-Led Training",
      description: "Learn from certified IELTS professionals with extensive teaching experience and proven track records of student success worldwide."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      score: "Band 8.5", 
      text: "The AI feedback system helped me improve my speaking skills dramatically. Highly recommended!",
      avatar: "SJ"
    },
    {
      name: "Mohammed Ali",
      score: "Band 8.0",
      text: "Mock tests were exactly like the real exam. The detailed analysis helped me focus on weak areas.",
      avatar: "MA" 
    },
    {
      name: "Priya Sharma",
      score: "Band 7.5",
      text: "Excellent teaching methodology and personalized attention. Achieved my target score in first attempt!",
      avatar: "PS"
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <div className="logo-text">ApexIELTS</div>
            </div>

            {/* Desktop Menu */}
            <div className="nav-menu">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
              <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
              <button className="cta-button">Get Started</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-button">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hamburger">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-items">
                <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
                <button onClick={() => scrollToSection('features')} className="mobile-nav-link">Features</button>
                <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">Testimonials</button>
                <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
                <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
                <button className="mobile-cta-button">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Achieve Your Dream
                <span className="gradient-text"> IELTS Score</span>
              </h1>
              <p className="hero-subtitle">
                Master IELTS with our AI-powered learning platform. Get personalized feedback, 
                practice with real exam simulations, and achieve your target band score faster.
              </p>
              <div className="hero-buttons">
                <button className="primary-button">Start Free Trial</button>
                <button className="secondary-button">Watch Demo</button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <Star className="stat-icon" style={{color: '#fbbf24'}} />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="stat-item">
                  <Users className="stat-icon" style={{color: '#2563eb'}} />
                  <span>10,000+ Students</span>
                </div>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="score-card">
                <div className="score-display">
                  <div className="score-number">8.5</div>
                  <div className="score-label">Average Band Score</div>
                  <div className="score-sublabel">Our Students Achieve</div>
                </div>
              </div>
              <div className="success-badge">Success Guaranteed!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ApexIELTS?</h2>
            <p className="section-subtitle">
              Our comprehensive platform combines cutting-edge technology with proven teaching methods 
              to help you achieve your IELTS goals efficiently.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Hear from our students who achieved their dream scores
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="avatar">{testimonial.avatar}</div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <div className="testimonial-score">{testimonial.score}</div>
                  </div>
                </div>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="star" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About ApexIELTS</h2>
            <p className="section-subtitle">
              With over 10 years of experience in IELTS preparation, we have helped thousands of students 
              achieve their dream scores. Our expert trainers and cutting-edge technology combine to create 
              the most effective IELTS preparation experience.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number blue">10,000+</div>
              <div className="stat-label">Successful Students</div>
              <p className="stat-description">Students who achieved their target scores</p>
            </div>
            <div className="stat-card">
              <div className="stat-number green">8.2</div>
              <div className="stat-label">Average Band Score</div>
              <p className="stat-description">Higher than global average of 6.0</p>
            </div>
            <div className="stat-card">
              <div className="stat-number purple">95%</div>
              <div className="stat-label">Success Rate</div>
              <p className="stat-description">Students pass in their first attempt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">ApexIELTS</div>
              <p className="footer-description">
                Transform your IELTS preparation with our comprehensive learning platform. 
                Join thousands of successful students worldwide who achieved their dreams.
              </p>
              <div className="social-links">
                <Facebook className="social-icon" />
                <Twitter className="social-icon" />
                <Instagram className="social-icon" />
                <Linkedin className="social-icon" />
              </div>
            </div>

            <div className="footer-links">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="links-list">
                <li><button onClick={() => scrollToSection('about')} className="footer-link">About Us</button></li>
                <li><button onClick={() => scrollToSection('features')} className="footer-link">Features</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="footer-link">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('home')} className="footer-link">Practice Tests</button></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="footer-heading">Contact Info</h4>
              <div className="contact-list">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>contact@apexielts.com</span>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <span>123 Learning St, Education City</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 ApexIELTS. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;