import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const TicketBookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save ticket booking details to local storage
    const bookingDetails = {
      movieId: id,
      name,
      email,
    };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

    // Redirect to confirmation page
    window.location.href = '/confirmation';
  };

  return (
    <div className="container mt-4">
      <h1>Movie Ticket Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Book Now
          </button>
        </div>
        <Link to={`/show/${id}`} className="btn btn-secondary">
          Back
        </Link>
      </form>
    </div>
  );
};

export default TicketBookingForm;
