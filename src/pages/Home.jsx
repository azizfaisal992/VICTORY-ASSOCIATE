import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Award, CheckCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
  const services = [
    {
      title: 'Visa Processing',
      description: 'Complete visa processing and stamping services',
      image: 'https://images.pexels.com/photos/7841828/pexels-photo-7841828.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Medical Testing',
      description: 'Authorized medical center integration',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Flight Ticketing',
      description: 'Convenient flight booking services',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const destinations = [
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Kuwait', flag: '🇰🇼' },
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Maldives', flag: '🇲🇻' }
  ];

  const stats = [
    { number: '5000+', label: 'Workers Placed' },
    { number: '6+', label: 'Countries' },
    { number: '6+', label: 'Years Experience' },
    { number: '98%', label: 'Success Rate' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Professional workers" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Your Gateway to Middle East Opportunities</h1>
            <p>
              Victory Associate has been connecting skilled Bangladeshi professionals 
              with prestigious opportunities across the Middle East since 2018.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn">
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Comprehensive recruitment solutions tailored for your success
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services" className="service-link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="destinations">
        <div className="container">
          <h2 className="section-title">Our Destinations</h2>
          <p className="section-subtitle">
            We connect you with opportunities across these countries
          </p>
          <div className="destinations-grid">
            {destinations.map((destination, index) => (
              <div key={index} className="destination-card">
                <span className="flag">{destination.flag}</span>
                <h3>{destination.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose Victory Associate?</h2>
              <div className="features">
                <div className="feature">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h4>Trusted Since 2018</h4>
                    <p>6+ years of proven excellence in manpower recruitment</p>
                  </div>
                </div>
                <div className="feature">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h4>Complete Solutions</h4>
                    <p>End-to-end services from documentation to deployment</p>
                  </div>
                </div>
                <div className="feature">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h4>Authorized Partners</h4>
                    <p>Working with certified medical centers and agencies</p>
                  </div>
                </div>
                <div className="feature">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h4>Success Guarantee</h4>
                    <p>98% success rate in job placements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-choose-image">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Professional team" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of successful professionals who trusted Victory Associate</p>
            <Link to="/contact" className="btn">
              Contact Us Today <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;