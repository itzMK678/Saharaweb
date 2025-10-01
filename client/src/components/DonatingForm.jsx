import React, { useState } from 'react';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    amount: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can redirect to PayPal or handle your logic
    alert('Form submitted!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-md rounded-md px-8 py-10 border"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Online Donation Form</h2>

        {/* Full Name */}
        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-1/2 border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-1/2 border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <label className="block text-gray-700 font-medium mb-1">E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="ex: myname@example.com"
          className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Phone Number */}
        <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="(000) 000-0000"
          className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
          value={formData.phone}
          onChange={handleChange}
        />

        {/* Amount */}
        <label className="block text-gray-700 font-medium mb-1">Amount</label>
        <div className="flex items-center mb-1">
          <input
            type="number"
            name="amount"
            placeholder="Please enter a dollar amount (e.g. 50.00)"
            className="w-full border rounded-l-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <span className="bg-gray-100 border border-l-0 rounded-r-md px-3 py-2 text-gray-600">
            USD
          </span>
        </div>

        {/* Comments */}
        <label className="block text-gray-700 font-medium mb-1 mt-3">Comments</label>
        <textarea
          name="comments"
          rows="3"
          className="w-full border rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring focus:ring-blue-200"
          value={formData.comments}
          onChange={handleChange}
        />

        <p className="text-xs text-gray-500 mb-4">
          You will be directed to PayPal in a few seconds after clicking “Submit”, please complete
          all required information in PayPal.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
        >
          Submit (You’ll be directed to PayPal securely)
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
