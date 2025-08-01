import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  FileText,
  Shield,
  Stethoscope,
  Plane,
  GraduationCap,
  Award
} from 'lucide-react';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceDetails = {
    'visa-processing': {
      title: 'Visa Processing & Stamping',
      icon: <FileText size={50} />,
      image: 'https://images.pexels.com/photos/7841828/pexels-photo-7841828.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete visa processing services with guaranteed approval for all Middle East destinations.',
      longDescription: 'Our visa processing service is comprehensive and reliable, ensuring your visa application is handled with utmost care and professionalism. We have established partnerships with embassies and consulates to streamline the process.',
      features: [
        'Work visa processing for all categories',
        'Tourist and visit visa assistance',
        'Family visa support and guidance',
        'Professional visa stamping services',
        'Document verification and validation',
        'Embassy liaison and follow-up',
        'Express processing available',
        'Multiple entry visa options'
      ],
      process: [
        'Document collection and verification',
        'Application form completion',
        'Embassy submission',
        'Follow-up and tracking',
        'Visa collection and delivery'
      ],
      duration: '7-15 working days',
      price: 'Starting from ৳15,000',
      countries: ['Saudi Arabia', 'Kuwait', 'Qatar', 'UAE', 'Malaysia', 'Maldives']
    },
    'police-clearance': {
      title: 'Police Clearance',
      icon: <Shield size={50} />,
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fast and reliable police clearance certificate services with government approval.',
      longDescription: 'Our police clearance service ensures you get your criminal background verification quickly and efficiently. We work directly with police headquarters and local stations.',
      features: [
        'Criminal background verification',
        'Character certificate issuance',
        'Fast processing guarantee',
        'Government approved process',
        'International validity assured',
        'Digital and physical copies',
        'Translation services available',
        'Apostille services included'
      ],
      process: [
        'Application submission',
        'Biometric data collection',
        'Background verification',
        'Certificate generation',
        'Quality check and delivery'
      ],
      duration: '3-7 working days',
      price: 'Starting from ৳3,000',
      countries: ['All international destinations']
    },
    'medical-testing': {
      title: 'Medical Testing',
      icon: <Stethoscope size={50} />,
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive medical testing through authorized medical centers.',
      longDescription: 'We partner with government-authorized medical centers to provide comprehensive health checkups required for overseas employment.',
      features: [
        'Pre-employment medical examination',
        'Authorized medical center network',
        'Complete health checkup package',
        'X-ray and laboratory tests',
        'Medical fitness certificate',
        'Vaccination services',
        'Follow-up consultations',
        'Digital report delivery'
      ],
      process: [
        'Medical center appointment',
        'Health examination',
        'Laboratory tests',
        'Report generation',
        'Certificate issuance'
      ],
      duration: '1-3 working days',
      price: 'Starting from ৳8,000',
      countries: ['Saudi Arabia', 'Kuwait', 'Qatar', 'UAE', 'Malaysia']
    },
    'flight-ticketing': {
      title: 'Flight Ticketing',
      icon: <Plane size={50} />,
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Convenient flight booking and travel arrangements with best prices.',
      longDescription: 'Our flight ticketing service offers competitive prices and convenient booking options for all your travel needs to Middle East destinations.',
      features: [
        'International flight booking',
        'Best price guarantee',
        'Travel insurance options',
        'Airport assistance services',
        'Group booking discounts',
        'Flexible date options',
        '24/7 customer support',
        'Baggage allowance guidance'
      ],
      process: [
        'Destination and date selection',
        'Price comparison',
        'Booking confirmation',
        'Ticket issuance',
        'Travel support'
      ],
      duration: 'Instant booking',
      price: 'Market competitive rates',
      countries: ['Saudi Arabia', 'Kuwait', 'Qatar', 'UAE', 'Malaysia', 'Maldives']
    },
    'pre-departure-training': {
      title: 'Pre-departure Training',
      icon: <GraduationCap size={50} />,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Essential training programs for successful overseas employment.',
      longDescription: 'Our comprehensive pre-departure training prepares you for successful integration into your new work environment and culture.',
      features: [
        'Cultural orientation programs',
        'Basic language training',
        'Workplace safety training',
        'Legal rights awareness',
        'Professional skill development',
        'Communication skills',
        'Emergency procedures',
        'Cultural sensitivity training'
      ],
      process: [
        'Training needs assessment',
        'Customized program design',
        'Interactive training sessions',
        'Practical exercises',
        'Certification completion'
      ],
      duration: '3-5 days',
      price: 'Starting from ৳5,000',
      countries: ['All destinations']
    },
    'document-attestation': {
      title: 'Document Attestation',
      icon: <Award size={50} />,
      image: 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional document attestation and legalization services.',
      longDescription: 'We provide complete document attestation services to ensure your certificates and documents are legally recognized internationally.',
      features: [
        'Educational certificate attestation',
        'Professional document verification',
        'Embassy attestation services',
        'Apostille services',
        'Translation services',
        'Notarization services',
        'Digital verification',
        'Express processing options'
      ],
      process: [
        'Document verification',
        'Ministry attestation',
        'Embassy attestation',
        'Final verification',
        'Document delivery'
      ],
      duration: '10-20 working days',
      price: 'Starting from ৳2,000 per document',
      countries: ['All international destinations']
    }
  };

  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="service-detail">
        <div className="container">
          <div className="not-found">
            <h2>Service Not Found</h2>
            <p>The requested service could not be found.</p>
            <Link to="/services" className="btn">
              <ArrowLeft size={20} /> Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-bg">
          <img src={service.image} alt={service.title} />
          <div className="service-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="service-hero-content">
            <Link to="/services" className="back-link">
              <ArrowLeft size={20} /> Back to Services
            </Link>
            <div className="service-hero-info">
              <div className="service-hero-icon">{service.icon}</div>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="container">
          <div className="details-grid">
            <div className="details-main">
              <div className="detail-section">
                <h2>About This Service</h2>
                <p>{service.longDescription}</p>
              </div>

              <div className="detail-section">
                <h2>Service Features</h2>
                <div className="features-grid">
                  {service.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-section">
                <h2>Our Process</h2>
                <div className="process-steps">
                  {service.process.map((step, index) => (
                    <div key={index} className="process-step">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <h4>{step}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-section">
                <h2>Available Countries</h2>
                <div className="countries-list">
                  {service.countries.map((country, index) => (
                    <span key={index} className="country-tag">{country}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="details-sidebar">
              <div className="service-info-card">
                <h3>Service Information</h3>
                <div className="info-item">
                  <Clock size={20} />
                  <div>
                    <strong>Processing Time</strong>
                    <span>{service.duration}</span>
                  </div>
                </div>
                <div className="info-item">
                  <DollarSign size={20} />
                  <div>
                    <strong>Starting Price</strong>
                    <span>{service.price}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn btn-full">
                  Get Quote Now
                </Link>
              </div>

              <div className="contact-card">
                <h3>Need Help?</h3>
                <p>Our experts are ready to assist you with this service.</p>
                <div className="contact-info">
                  <p><strong>Phone:</strong> +880-1234-567890</p>
                  <p><strong>Email:</strong> info@victoryassociate.com</p>
                </div>
                <Link to="/contact" className="btn btn-secondary btn-full">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;