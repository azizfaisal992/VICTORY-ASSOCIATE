import React, { useState } from 'react';
import { Search, MapPin, Clock, Users, Briefcase, Filter } from 'lucide-react';
import './Career.css';

const Career = () => {
  const [activeTab, setActiveTab] = useState('office');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const officeJobs = [
    {
      id: 1,
      title: 'HR Executive',
      department: 'Human Resources',
      location: 'Dhaka Office',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Handle recruitment processes and employee relations',
      requirements: ['Bachelor\'s degree in HR or related field', 'Experience in recruitment', 'Good communication skills'],
      category: 'hr'
    },
    {
      id: 2,
      title: 'Documentation Officer',
      department: 'Operations',
      location: 'Dhaka Office',
      type: 'Full-time',
      experience: '1-2 years',
      description: 'Manage visa processing and document verification',
      requirements: ['Bachelor\'s degree', 'Attention to detail', 'Knowledge of visa processes'],
      category: 'operations'
    },
    {
      id: 3,
      title: 'Marketing Executive',
      department: 'Marketing',
      location: 'Dhaka Office',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Develop marketing strategies and manage campaigns',
      requirements: ['Marketing degree', 'Digital marketing experience', 'Creative thinking'],
      category: 'marketing'
    },
    {
      id: 4,
      title: 'Accounts Officer',
      department: 'Finance',
      location: 'Dhaka Office',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Handle financial transactions and reporting',
      requirements: ['Accounting degree', 'Experience with accounting software', 'Analytical skills'],
      category: 'finance'
    }
  ];

  const laborJobs = [
    {
      id: 1,
      title: 'Construction Worker',
      country: 'Saudi Arabia',
      sector: 'Construction',
      salary: '45,000 - 55,000 SAR/year',
      contract: '2 years',
      description: 'General construction work including building and infrastructure',
      requirements: ['Physical fitness', 'Construction experience preferred', 'Willingness to work abroad'],
      category: 'construction'
    },
    {
      id: 2,
      title: 'Factory Worker',
      country: 'Malaysia',
      sector: 'Manufacturing',
      salary: '1,500 - 2,000 MYR/month',
      contract: '3 years',
      description: 'Manufacturing and assembly line work',
      requirements: ['Basic education', 'Factory experience', 'Good health condition'],
      category: 'manufacturing'
    },
    {
      id: 3,
      title: 'Hotel Staff',
      country: 'UAE',
      sector: 'Hospitality',
      salary: '2,500 - 3,500 AED/month',
      contract: '2 years',
      description: 'Hotel operations including housekeeping and service',
      requirements: ['Service industry experience', 'English communication', 'Customer service skills'],
      category: 'hospitality'
    },
    {
      id: 4,
      title: 'Agricultural Worker',
      country: 'Qatar',
      sector: 'Agriculture',
      salary: '1,800 - 2,200 QAR/month',
      contract: '2 years',
      description: 'Farm work including crop cultivation and livestock care',
      requirements: ['Agricultural experience', 'Physical fitness', 'Outdoor work capability'],
      category: 'agriculture'
    },
    {
      id: 5,
      title: 'Driver',
      country: 'Kuwait',
      sector: 'Transportation',
      salary: '300 - 400 KWD/month',
      contract: '3 years',
      description: 'Professional driving services for companies',
      requirements: ['Valid driving license', 'Clean driving record', 'Navigation skills'],
      category: 'transportation'
    },
    {
      id: 6,
      title: 'Cleaner',
      country: 'Maldives',
      sector: 'Services',
      salary: '8,000 - 12,000 MVR/month',
      contract: '2 years',
      description: 'Cleaning and maintenance services',
      requirements: ['Attention to detail', 'Physical fitness', 'Reliability'],
      category: 'services'
    }
  ];

  const categories = {
    office: [
      { value: 'all', label: 'All Departments' },
      { value: 'hr', label: 'Human Resources' },
      { value: 'operations', label: 'Operations' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'finance', label: 'Finance' }
    ],
    labor: [
      { value: 'all', label: 'All Sectors' },
      { value: 'construction', label: 'Construction' },
      { value: 'manufacturing', label: 'Manufacturing' },
      { value: 'hospitality', label: 'Hospitality' },
      { value: 'agriculture', label: 'Agriculture' },
      { value: 'transportation', label: 'Transportation' },
      { value: 'services', label: 'Services' }
    ]
  };

  const filterJobs = (jobs) => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (job.department && job.department.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           (job.sector && job.sector.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const currentJobs = activeTab === 'office' ? officeJobs : laborJobs;
  const filteredJobs = filterJobs(currentJobs);

  return (
    <div className="career">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="container">
          <div className="career-hero-content">
            <h1>Career Opportunities</h1>
            <p>
              Join our team or find your dream job abroad. We offer opportunities 
              for both office positions and overseas employment.
            </p>
          </div>
        </div>
      </section>

      {/* Career Tabs */}
      <section className="career-section">
        <div className="container">
          <div className="career-tabs">
            <button 
              className={`tab-btn ${activeTab === 'office' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('office');
                setSelectedCategory('all');
                setSearchTerm('');
              }}
            >
              <Briefcase size={20} />
              Office Positions
            </button>
            <button 
              className={`tab-btn ${activeTab === 'labor' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('labor');
                setSelectedCategory('all');
                setSearchTerm('');
              }}
            >
              <Users size={20} />
              Overseas Jobs
            </button>
          </div>

          {/* Filters */}
          <div className="career-filters">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder={`Search ${activeTab === 'office' ? 'office positions' : 'overseas jobs'}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="category-filter">
              <Filter size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories[activeTab].map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="jobs-grid">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className="job-type">
                      {activeTab === 'office' ? job.type : job.contract}
                    </span>
                  </div>
                  
                  <div className="job-meta">
                    {activeTab === 'office' ? (
                      <>
                        <div className="meta-item">
                          <Briefcase size={16} />
                          <span>{job.department}</span>
                        </div>
                        <div className="meta-item">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="meta-item">
                          <Clock size={16} />
                          <span>{job.experience}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="meta-item">
                          <MapPin size={16} />
                          <span>{job.country}</span>
                        </div>
                        <div className="meta-item">
                          <Briefcase size={16} />
                          <span>{job.sector}</span>
                        </div>
                        <div className="meta-item">
                          <Clock size={16} />
                          <span>{job.salary}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <p className="job-description">{job.description}</p>

                  <div className="job-requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="apply-btn">
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <div className="no-jobs">
                <h3>No jobs found</h3>
                <p>Try adjusting your search criteria or check back later for new opportunities.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-work-with-us">
        <div className="container">
          <h2 className="section-title">Why Work With Victory Associate?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Users size={30} />
              </div>
              <h3>Great Team</h3>
              <p>Work with experienced professionals in a supportive environment</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Briefcase size={30} />
              </div>
              <h3>Career Growth</h3>
              <p>Opportunities for professional development and advancement</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <MapPin size={30} />
              </div>
              <h3>Global Opportunities</h3>
              <p>Access to international job placements and experiences</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;