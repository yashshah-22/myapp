import React, { useState } from 'react';
import './RegisterForm.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [competition, setCompetition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Competition:', competition);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <label htmlFor="competition">Competition:</label>
      <select id="competition" name="competition" value={competition} onChange={(e) => setCompetition(e.target.value)} required>
        <option value="">Select a competition</option>
        <option value="Monolog">Monolog</option>
        <option value="Poster Making">Poster Making</option>
        <option value="Dub Smash">Dub Smash</option>
        <option value="Meme Making">Meme Making</option>
      </select>
      <label htmlFor="terms-checkbox">
  <input type="checkbox" id="terms-checkbox" name="terms-checkbox" required />
  I have read and agree to the <a href="/terms-and-conditions">Terms and Conditions</a>.
</label>

      <button  type="submit">Submit</button>
    </form>
  );
}

export default RegisterForm;
