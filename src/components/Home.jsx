import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        // alert('Profile updated successfully!');
        toast.success("Your Form is Successfully Submited")
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 1400,
        autoplay:true,
        autoplaySpeed:1400,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
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
        {/* <button className='text-white bg-blue-700 rounded-lg p-2'>Click Me</button> */}

        <div>
           <Slider {...settings}>
            {
                [1,2,3,4,5,6,7].map((item , index)=>(
                    <div key={index} className='w-[500px] bg-red-500 rounded-lg flex items-center'>
                        <h1 className='text-9xl font-extrabold'>{item}</h1>
                    </div>
                ))
            }

           </Slider>
        </div>
    </div>
  )
}

export default Home