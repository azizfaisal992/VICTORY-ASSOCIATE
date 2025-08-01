import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  FileText, 
  BarChart3, 
  Settings, 
  LogOut, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Bell,
  Calendar,
  Globe,
  TrendingUp
} from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [adminInfo, setAdminInfo] = useState(null);

  useEffect(() => {
    // Check if admin is logged in
    const session = localStorage.getItem('adminSession');
    if (!session) {
      navigate('/admin/login');
      return;
    }
    setAdminInfo(JSON.parse(session));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    navigate('/admin/login');
  };

  // Mock data for dashboard
  const dashboardStats = [
    { title: 'Total Workers Placed', value: '5,247', change: '+12%', icon: <Users size={24} /> },
    { title: 'Active Applications', value: '342', change: '+8%', icon: <FileText size={24} /> },
    { title: 'Countries Served', value: '6', change: '0%', icon: <Globe size={24} /> },
    { title: 'Success Rate', value: '98%', change: '+2%', icon: <TrendingUp size={24} /> }
  ];

  const recentApplications = [
    { id: 1, name: 'Mohammad Ali', service: 'Visa Processing', country: 'Saudi Arabia', status: 'In Progress', date: '2024-01-15' },
    { id: 2, name: 'Fatima Rahman', service: 'Medical Testing', country: 'UAE', status: 'Completed', date: '2024-01-14' },
    { id: 3, name: 'Abdul Karim', service: 'Police Clearance', country: 'Qatar', status: 'Pending', date: '2024-01-13' },
    { id: 4, name: 'Rashida Begum', service: 'Flight Ticketing', country: 'Kuwait', status: 'Completed', date: '2024-01-12' },
    { id: 5, name: 'Ibrahim Hassan', service: 'Document Attestation', country: 'Malaysia', status: 'In Progress', date: '2024-01-11' }
  ];

  const services = [
    { id: 1, name: 'Visa Processing & Stamping', price: '৳15,000', duration: '7-15 days', active: true },
    { id: 2, name: 'Police Clearance', price: '৳3,000', duration: '3-7 days', active: true },
    { id: 3, name: 'Medical Testing', price: '৳8,000', duration: '1-3 days', active: true },
    { id: 4, name: 'Flight Ticketing', price: 'Variable', duration: 'Instant', active: true },
    { id: 5, name: 'Pre-departure Training', price: '৳5,000', duration: '3-5 days', active: true },
    { id: 6, name: 'Document Attestation', price: '৳2,000', duration: '10-20 days', active: true }
  ];

  const renderDashboard = () => (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <div className="dashboard-actions">
          <button className="btn-secondary">
            <Download size={18} />
            Export Report
          </button>
          <button className="btn">
            <Plus size={18} />
            New Application
          </button>
        </div>
      </div>

      <div className="stats-grid">
        {dashboardStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
              <span className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'neutral'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="recent-applications">
          <div className="section-header">
            <h3>Recent Applications</h3>
            <button className="btn-text">View All</button>
          </div>
          <div className="applications-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Service</th>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map(app => (
                  <tr key={app.id}>
                    <td>{app.name}</td>
                    <td>{app.service}</td>
                    <td>{app.country}</td>
                    <td>
                      <span className={`status ${app.status.toLowerCase().replace(' ', '-')}`}>
                        {app.status}
                      </span>
                    </td>
                    <td>{app.date}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-icon"><Eye size={16} /></button>
                        <button className="btn-icon"><Edit size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="quick-stats">
          <h3>Quick Statistics</h3>
          <div className="quick-stat-item">
            <span>Today's Applications</span>
            <strong>23</strong>
          </div>
          <div className="quick-stat-item">
            <span>Pending Reviews</span>
            <strong>45</strong>
          </div>
          <div className="quick-stat-item">
            <span>Completed This Week</span>
            <strong>156</strong>
          </div>
          <div className="quick-stat-item">
            <span>Revenue This Month</span>
            <strong>৳2,45,000</strong>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="services-content">
      <div className="section-header">
        <h2>Service Management</h2>
        <button className="btn">
          <Plus size={18} />
          Add New Service
        </button>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-header">
              <h3>{service.name}</h3>
              <div className="service-status">
                <span className={`status ${service.active ? 'active' : 'inactive'}`}>
                  {service.active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
            <div className="service-details">
              <p><strong>Price:</strong> {service.price}</p>
              <p><strong>Duration:</strong> {service.duration}</p>
            </div>
            <div className="service-actions">
              <button className="btn-secondary">
                <Edit size={16} />
                Edit
              </button>
              <button className="btn-danger">
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderApplications = () => (
    <div className="applications-content">
      <div className="section-header">
        <h2>Application Management</h2>
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Search applications..." />
          </div>
          <button className="btn-secondary">
            <Filter size={18} />
            Filter
          </button>
          <button className="btn">
            <Upload size={18} />
            Import
          </button>
        </div>
      </div>

      <div className="applications-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Service</th>
              <th>Country</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentApplications.map(app => (
              <tr key={app.id}>
                <td>#{app.id.toString().padStart(4, '0')}</td>
                <td>{app.name}</td>
                <td>{app.service}</td>
                <td>{app.country}</td>
                <td>
                  <span className={`status ${app.status.toLowerCase().replace(' ', '-')}`}>
                    {app.status}
                  </span>
                </td>
                <td>{app.date}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-icon"><Eye size={16} /></button>
                    <button className="btn-icon"><Edit size={16} /></button>
                    <button className="btn-icon"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="settings-content">
      <h2>System Settings</h2>
      <div className="settings-grid">
        <div className="settings-section">
          <h3>General Settings</h3>
          <div className="setting-item">
            <label>Company Name</label>
            <input type="text" defaultValue="Victory Associate" />
          </div>
          <div className="setting-item">
            <label>Contact Email</label>
            <input type="email" defaultValue="info@victoryassociate.com" />
          </div>
          <div className="setting-item">
            <label>Phone Number</label>
            <input type="tel" defaultValue="+880-1234-567890" />
          </div>
        </div>

        <div className="settings-section">
          <h3>Service Settings</h3>
          <div className="setting-item">
            <label>Default Processing Time</label>
            <select>
              <option>7-15 days</option>
              <option>3-7 days</option>
              <option>1-3 days</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Auto-notifications</label>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
      </div>
      <button className="btn">Save Settings</button>
    </div>
  );

  if (!adminInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Victory Associate</h2>
          <p>Admin Panel</p>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart3 size={20} />
            Dashboard
          </button>
          <button 
            className={`nav-item ${activeTab === 'applications' ? 'active' : ''}`}
            onClick={() => setActiveTab('applications')}
          >
            <FileText size={20} />
            Applications
          </button>
          <button 
            className={`nav-item ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            <Users size={20} />
            Services
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} />
            Settings
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="admin-info">
            <p><strong>{adminInfo.id}</strong></p>
            <p>{adminInfo.email}</p>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      <div className="admin-main">
        <div className="admin-header">
          <h1>
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'applications' && 'Applications'}
            {activeTab === 'services' && 'Services'}
            {activeTab === 'settings' && 'Settings'}
          </h1>
          <div className="header-actions">
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <div className="admin-avatar">
              <span>{adminInfo.id.charAt(0).toUpperCase()}</span>
            </div>
          </div>
        </div>

        <div className="admin-content">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'applications' && renderApplications()}
          {activeTab === 'services' && renderServices()}
          {activeTab === 'settings' && renderSettings()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;