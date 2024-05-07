import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = ({ onSubmitSuccess }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create the customer object to send to the backend
      const customerData = {
        firstName,
        lastName,
        email,
        mobileNumber,
        city,
      };
      console.log(customerData)
      // Make a POST request to the backend to create a new customer
      const response = await axios.post('http://localhost:5000/api/customer/', customerData);

      if (response.status === 201) {
        // Call the onSubmitSuccess callback if provided
        if (onSubmitSuccess) {
          onSubmitSuccess(response.data.customer);
        }

        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobileNumber('');
        setCity('');
        setError(null);
      }
    } catch (error) {
      setError('Failed to create customer. Please check your input or try again later.');
    }
  };

  return (
    <div>
      <h2>Add Customer</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;
