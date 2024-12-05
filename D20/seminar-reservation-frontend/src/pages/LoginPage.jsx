import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed.');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Save token and redirect if needed
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard'; // Redirect to dashboard
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 dark:bg-gray-800">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 dark:text-gray-100"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 dark:text-gray-100"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              placeholder="Enter your password"
              required
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300 dark:text-gray-100">
            Don't have an account?{' '}
            <a
              href="#"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
