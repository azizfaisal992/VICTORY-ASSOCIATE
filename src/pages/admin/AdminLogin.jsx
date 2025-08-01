import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, Shield } from 'lucide-react';
import './AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    adminId: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock admin credentials (in real app, this would be handled by backend)
  const mockAdmins = [
    { id: 'admin001', email: 'admin@victoryassociate.com', password: 'admin123' },
    { id: 'admin002', email: 'manager@victoryassociate.com', password: 'manager123' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const admin = mockAdmins.find(
        a => a.id === formData.adminId && a.password === formData.password
      );

      if (admin) {
        // Store admin session (in real app, use proper authentication)
        localStorage.setItem('adminSession', JSON.stringify({
          id: admin.id,
          email: admin.email,
          loginTime: new Date().toISOString()
        }));
        navigate('/admin/dashboard');
      } else {
        setError('Invalid Admin ID or Password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-header">
          <div className="login-icon">
            <Shield size={40} />
          </div>
          <h1>Admin Login</h1>
          <p>Victory Associate Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="adminId">
              <User size={18} />
              Admin ID
            </label>
            <input
              type="text"
              id="adminId"
              name="adminId"
              value={formData.adminId}
              onChange={handleInputChange}
              required
              placeholder="Enter your admin ID"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <Lock size={18} />
              Password
            </label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="login-footer">
          <p>Demo Credentials:</p>
          <div className="demo-credentials">
            <p><strong>Admin ID:</strong> admin001 | <strong>Password:</strong> admin123</p>
            <p><strong>Admin ID:</strong> admin002 | <strong>Password:</strong> manager123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;