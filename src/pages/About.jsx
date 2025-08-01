import React from 'react';
import { Users, Target, Eye, Award, Calendar } from 'lucide-react';
import './About.css';

const About = () => {
  const leadership = [
    {
      name: 'Mohammad Rahman',
      position: 'Managing Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: '15+ years in recruitment'
    },
    {
      name: 'Fatima Ahmed',
      position: 'General Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: '12+ years in HR'
    },
    {
      name: 'Abdul Karim',
      position: 'HR Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: '10+ years in operations'
    },
    {
      name: 'Rashida Begum',
      position: 'Operations Manager',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300',
      experience: '8+ years in client relations'
    }
  ];

  const achievements = [
    { year: '2018', milestone: 'Company Founded' },
    { year: '2019', milestone: '1000+ Workers Placed' },
    { year: '2020', milestone: 'Expanded to 4 Countries' },
    { year: '2021', milestone: '3000+ Successful Placements' },
    { year: '2022', milestone: 'Added Malaysia & Maldives' },
    { year: '2023', milestone: '5000+ Workers Placed' },
    { year: '2024', milestone: 'Industry Recognition Award' }
  ];

  const coreValues = [
    {
      icon: <Users size={40} />,
      title: 'People First',
      description: 'We prioritize the welfare and success of every worker we place'
    },
    {
      icon: <Target size={40} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in all our services'
    },
    {
      icon: <Eye size={40} />,
      title: 'Transparency',
      description: 'Clear communication and honest dealings with all stakeholders'
    },
    {
      icon: <Award size={40} />,
      title: 'Integrity',
      description: 'Ethical practices and trustworthy relationships'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Victory Associate</h1>
            <p>
              Empowering dreams and building careers since 2018. We are Bangladesh's 
              trusted partner in connecting skilled professionals with opportunities 
              across the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <div className="story-item">
                <Calendar className="story-icon" />
                <div>
                  <h3>Founded in 2018</h3>
                  <p>
                    Victory Associate was established with a vision to bridge the gap 
                    between skilled Bangladeshi workers and international opportunities. 
                    Starting with a small team and big dreams, we have grown to become 
                    one of the most trusted names in manpower recruitment.
                  </p>
                </div>
              </div>
              <div className="story-item">
                <Users className="story-icon" />
                <div>
                  <h3>What We Do</h3>
                  <p>
                    We specialize in comprehensive recruitment services, from initial 
                    documentation to final deployment. Our services include visa processing, 
                    medical testing, police clearance, flight ticketing, pre-departure 
                    training, and document attestation.
                  </p>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Our team at work" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <Target className="mv-icon" />
              <h3>Our Mission</h3>
              <p>
                To provide comprehensive, reliable, and ethical manpower recruitment 
                services that connect skilled Bangladeshi professionals with rewarding 
                career opportunities in the Middle East, while ensuring their welfare 
                and success throughout the process.
              </p>
            </div>
            <div className="mv-card">
              <Eye className="mv-icon" />
              <h3>Our Vision</h3>
              <p>
                To be the leading manpower recruitment agency in Bangladesh, recognized 
                for our integrity, excellence, and commitment to transforming lives 
                through meaningful employment opportunities across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="achievements">
        <div className="container">
          <h2 className="section-title">Our Journey & Achievements</h2>
          <div className="timeline">
            {achievements.map((achievement, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{achievement.year}</div>
                <div className="timeline-content">
                  <h4>{achievement.milestone}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">
            Meet the experienced professionals who guide Victory Associate
          </p>
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <img src={leader.image} alt={leader.name} />
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <h4>{leader.position}</h4>
                  <p>{leader.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;