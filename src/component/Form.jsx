import  { useState } from 'react';
import '../style/from.css'

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <div className='flex flex-col w-full'>


    <h1 className='text-2xl font-semibold text-white text-center py-9 pt-20'>Contact US</h1>
    <form onSubmit={handleSubmit} className=' mx-auto flex justify-center flex-col w-1/2 '>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button type="submit" className=' w-1/2 hover:bg-black hover:text-white duration-700 hover:transition-linear border-xl mx-auto mt-7 py-3 font-semibold text-black bg-white' >Submit</button>
    </form>
    </div>
  );
}

export default ContactForm;