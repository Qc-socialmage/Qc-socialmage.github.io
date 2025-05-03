import React, { useState } from 'react';

function ContactForm() {
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
});

const [status, setStatus] = useState(null);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Submitting...');

  try {
    const response = await fetch('https://api.sheetbest.com/sheets/594bdead-5d4f-47f4-ba2b-9cd1a6da2daf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), 
    });

    // console.console.log("first name", formData.firstName);

    if (response.ok) {
      setStatus('Submitted successfully!');
      setFormData({ firstName: '', lastName: '', email: '' });
    } else {
      setStatus('Submission failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    setStatus('An error occurred. Please try again.');
  }
};

return (
  <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-black shadow-md rounded">
    <p className="text-lg mb-8">Signup to get early access when we launch.</p>
    <h2 className="text-2xl font-bold mb-4">Join Our Pre-launch List</h2>
    <div className="mb-4">
      {/* <label className="block text-white-700">First Name</label> */}
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required placeholder="First Name"
        className="w-full px-3 py-2 border rounded-lg"
      />
    </div>
    <div className="mb-4">
      {/* <label className="block text-white-700">Last Name</label> */}
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required placeholder="Last Name"
        className="w-full px-3 py-2 border rounded-lg"
      />
    </div>
    <div className="mb-4">
      {/* <label className="block text-white-700">Email</label> */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required placeholder="Email"
        className="w-full px-3 py-2 border rounded-lg"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
    >
      Submit
    </button>
    {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
  </form>
);
}

export default ContactForm;