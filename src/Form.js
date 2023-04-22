import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [mobno,setmobno]=useState('');
  const [city,setCity]=useState('');
  const [ward,setward]=useState('');
  const [request,setRequest]=useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [category,setCategory]=useState('');
  const [pickup,setpickUp]=useState('');
  const [availableSlots, setAvailableSlots] = useState({
    slot1: 10,
    slot2: 10,
    slot3: 10,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);
    try {
      // submit form data here
      setSuccess(true);
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
    if (selectedSlot) {
        setAvailableSlots({
          ...availableSlots,
          [selectedSlot]: availableSlots[selectedSlot] - 1,
        });
      }
  };

  return (
    <div className='entire'>
    <form className="form" onSubmit={handleSubmit}>
      <center><h2 className="form-section">SLOT BOOKING</h2></center>
      <label className="form-label" htmlFor="name">
        Name <span className="form-label required">*</span>
      </label>
      <input
        className="form-input"
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label className="form-label" htmlFor="email">
        Email <span className="form-label required">*</span>
      </label>
      <input
        className="form-input"
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
<label className="form-label" htmlFor="mobno">
        Mobile Number <span className="form-label required">*</span>
      </label>
      <input
        className="form-input"
        type="text"
        id="mobno"
        name="mobno"
        value={mobno}
        onChange={(e) => setmobno(e.target.value)}
        required
      />
      <br></br>
      <label className="form-label" htmlFor="city">
        City <span className="form-label required">*</span>
      </label>
      <br></br>
      <textarea
        className="form-input"
        id="city"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      ></textarea>
      <br></br>
 <label className="form-label" htmlFor="ward">
        Ward No<span className="form-label required">*</span>
      </label>
      <input
        className="form-input"
        type="text"
        id="ward"
        name="ward"
        value={ward}
        onChange={(e) => setward(e.target.value)}
        required
      /><br></br>
      <label className=' form-label' htmlFor="slotavail">
        Select your preferred slot:
        <br/>
        <select className='form-x' value={selectedSlot} onChange={(event) => setSelectedSlot(event.target.value)}>
          <option value="">--Please choose an option--</option>
          <option value="slot1">Slot 1: 9am-11am ({availableSlots.slot1} available)</option>
          <option value="slot2">Slot 2: 11am-1pm ({availableSlots.slot2} available)</option>
          <option value="slot3">Slot 3: 1pm-3pm ({availableSlots.slot3} available)</option>
        </select>
      </label><br></br>
      <label className='form-label' htmlFor="category">
        Select your Category:
        <br/>
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="">--Please choose an option--</option>
          <option value="women">Women</option>
          <option value="senior citizen">Senior Citizen</option>
          <option value="Men">Men</option>
          <option value="Handicap">Handicap</option>
        </select>
      </label>
      <label className='form-label' htmlFor="category">
        Request for Convenience:
        <br/>
        <select value={request} onChange={(event) => setRequest(event.target.value)}>
          <option value="">--Please choose an option--</option>
          <option value="pickup">Pick Up</option>
          <option value="womenstaff">Women Staff</option>
          <option value="braille">Braille</option>
          <option value="Wheelchair">Wheel Chair</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="form-label" htmlFor="pickup">
        Pick up location (if requested)<span className="form-label required">*</span>
      </label>
      <input
        className="form-input"
        type="text"
        id="ward"
        name="ward"
        value={ward}
        onChange={(e) => setpickUp(e.target.value)}
        required
      />
      {error && <p className="form-input-error">{error}</p>
        }

{success && <p className="form-success">Booking Successfully Completed!</p>}

<button
  className={`form-submit-button${submitting ? ' form-submitting' : ''}`}
  type="submit"
  disabled={submitting}
>
  {submitting ? 'Submitting...' : 'Submit'}
</button>
</form>
</div>
  )
    }

    export default Form;
