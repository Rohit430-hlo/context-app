import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';

const Home = () => {
    const { setUser, setEmail, setContact, setBio } = useContext(UserContext);
    
    // Local state for form values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
        contact: ''
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Update context state only on submit
        setUser(formData.name);
        setEmail(formData.email);
        setBio(formData.bio);
        setContact(formData.contact);
        
        // Optional: Reset form or show success message
        alert('Profile updated successfully!');
    }
    
  return (
    <div>
        <h1 className='text-2xl mb-6 text-center font-bold'>Home Page</h1>
        <p className='text-lg'>Welcome to the home page! This is where you can find the latest updates and news.</p>
        <p className='text-lg'>Feel free to explore the site and learn more about what we have to offer.</p>

        {/* basic form to get user data: name, email, bio, contact */}
        <form onSubmit={handleSubmit} className='w-96 mx-auto p-4 bg-slate-50'>
            <input 
                name="name"
                onChange={handleChange} 
                value={formData.name}
                type="text" 
                placeholder='Name' 
                className='border w-full p-3 bg-slate-200 mb-4'
            />
            <input 
                name="email"
                onChange={handleChange} 
                value={formData.email}
                type="email" 
                placeholder='Email' 
                className='border w-full p-3 bg-slate-200 mb-4'
            />
            <input 
                name="bio"
                onChange={handleChange} 
                value={formData.bio}
                type="text" 
                placeholder='Bio' 
                className='border w-full p-3 bg-slate-200 mb-4'
            />
            <input 
                name="contact"
                onChange={handleChange} 
                value={formData.contact}
                type="text" 
                placeholder='Contact' 
                className='border w-full p-3 bg-slate-200 mb-4'
            />
            <button type="submit" className='bg-blue-500 text-white text-center px-5 my-2 py-3 inline-block mx-auto'>Submit</button>
        </form>
    </div>
  )
}

export default Home