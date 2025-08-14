'use client';
import { useState } from 'react';

export default function ContactForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);


  const handleEmailChange = (e) => {
    const value = e.target.value.trim();
    setEmail(value);
    if (!value.includes('@') || !value.includes('.')) {
        setEmailError('Error: invalid email');
    } else {
        setEmailError('');
    }
  };


  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()){
        alert('Error: All fields must be filled');
        return;
    }

    if (emailError){
        alert('Error: Please enter a valid email');
        return;
    }

    setSent(true);
    
  };


  return(
    <form onSubmit={handleSubmit} className="space-y-2 my-4 max-w-lg">
        <div>
        <label className="block text-sm mb-1">Name:</label>
            <input className="w-full border rounded p-3"
            value={name}
            onChange={ (e) => setName(e.target.value)}
            />
        </div>

        <div>
        <label className="block text-sm mb-1">Email: </label>
            <input className="w-full border rounded p-3"
            value={email}
            onChange={handleEmailChange}
            type="email"/>
          {emailError && <p className="text-red-700 text-sm mt-1">{emailError}</p>}
        </div>


      
        <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
        className="w-full border rounded p-3"
        value={message}
        onChange={(e) => setMessage(e.target.value)}/>
        </div>

        <button type="submit" className="bg-green-500 text-white px-2 py-2 rounded hover:bg-green-700">
            Send
        </button>

        {sent && <p className="text-green-400 text-sm mt-3">Message was sent</p>}

    </form>
  );
}
