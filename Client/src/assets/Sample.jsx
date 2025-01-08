import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Updated to match the OpenAPI base URL and endpoints
console.log();

const Sample = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleForm = () => {
    setIsLogin(false);
    setFormData({ email: '', password: '', name: '' });
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      if (isLogin) {
        const response = await axios.post(`${API_URL}/login`, {
          email: formData.email, // Updated to match API spec
          password: formData.password,
        });
        setMessage(`Login successful! Token: ${response.data.token}`);
      } else {
        const response = await axios.post(`${API_URL}/signup`, {
          username: formData.name, // Updated to match API spec
          email: formData.email,
          password: formData.password,
        });
        setMessage('Signup successful! Please log in.');
        toggleForm();
      }
    } catch (error) {
      setMessage(error.response?.data?.errorMessage || 'An error occurred'); // Updated to match API error format
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="usernamename"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={toggleForm} style={{ marginTop: '10px' }}>
        {isLogin ? 'Switch to Signup' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Sample;
