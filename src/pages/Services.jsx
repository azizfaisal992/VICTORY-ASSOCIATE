import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Stethoscope, 
  Plane, 
  GraduationCap, 
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'visa-processing',
      title: 'Visa Processing & Stamping',
      description: 'Complete visa processing services with guaranteed approval',
      icon: <FileText size={40} />,
      image: 'https://images.pexels.com/photos/7841828/pexels-photo-7841828.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: [
        'Work visa processing',
        'Tourist visa assistance',
        'Family visa support',
        'Visa stamping services',
        'Document verification'
      ]
    },
    {
      id: 'police-clearance',
      title: 'Police Clearance',
      description: 'Fast and reliable police clearance certificate services',
      icon: <Shield size={40} />,
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: [
        'Criminal background check',
        'Character certificate',
        'Fast processing',
        'Government approved',
        'International validity'
      ]
    },
    {
      id: 'medical-testing',
      title: 'Medical Testing',
      description: 'Comprehensive medical testing through authorized centers',
      icon: <Stethoscope size={40} />,
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: [
        'Pre-employment medical',
        'Authorized medical centers',
        'Complete health checkup',
        'X-ray and blood tests',
        'Medical certificate'
      ]
    },
    {
      id: 'flight-ticketing',
      title: 'Flight Ticketing',
      description: 'Convenient flight booking and travel arrangements',
      icon: <Plane size={40} />,
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: [
        'International flight booking',
        'Best price guarantee',
        'Travel insurance',
        'Airport assistance',
        'Group bookings'
      ]
    },
    {
      id: 'pre-departure-training',
      title: 'Pre-departure Training',
      description: 'Essential training programs for overseas employment',
      icon: <GraduationCap size={40} />,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: [
        'Cultural orientation',
        'Language training',
        'Work safety training',
        'Legal rights awareness',
        'Skill development'
      ]
    },
    {
      id: 'document-attestation',
      title: 'Document Attestation',
      description: 'Professional document attestation and legalization services',
      icon: <Award size={40} />,
      image: 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: [
        'Educational certificates',
        'Professional documents',
        'Embassy attestation',
        'Apostille services',
        'Translation services'
      ]
    }
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Comprehensive Services</h1>
            <p>
              From documentation to deployment, we provide end-to-end solutions 
              for your overseas employment journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                </div>
                
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  <div className="service-features">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="feature-item">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/services/${service.id}`} 
                    className="service-link"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="why-choose-services">
        <div className="container">
          <h2 className="section-title">Why Choose Our Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <CheckCircle size={30} />
              </div>
              <h3>Guaranteed Results</h3>
              <p>98% success rate in all our service categories</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Shield size={30} />
              </div>
              <h3>Authorized Partners</h3>
              <p>Working with government-approved agencies and centers</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Award size={30} />
              </div>
              <h3>Expert Team</h3>
              <p>Experienced professionals handling your requirements</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FileText size={30} />
              </div>
              <h3>Complete Documentation</h3>
              <p>End-to-end documentation support and guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your requirements and get a personalized service plan</p>
            <Link to="/contact" className="btn">
              Get Free Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;