import React, { useState, useEffect } from "react";
import "./BookingForm.css";

const BookingForm = ({ availableTimes = [], submitForm }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <div className="container">
      <div className="booking-page">
        <h2>Book a Table</h2>
        <p>at Little Lemon, Chicago</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            aria-label="Date"
            aria-required="true"
            min={minDate}
            required
          />
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <select
            id="time"
            value={formData.time}
            onChange={handleChange}
            aria-label="Time"
            aria-required="true"
            required
            disabled={!availableTimes.length}
          >
            <option value="" disabled>
              Select a time
            </option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            placeholder="1"
            min="1"
            max="12"
            value={formData.guests}
            onChange={handleChange}
            aria-label="Number of guests"
            aria-required="true"
            required
          />
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
            aria-label="Occasion"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Casual">Casual</option>
            <option value="Birthday">Birthday</option>
          </select>
        </div>

        <div>
          <button className="button" type="submit" aria-label="Book a Table">
            Book a Table
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
