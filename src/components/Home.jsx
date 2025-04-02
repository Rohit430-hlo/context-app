import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
    const { setUser, setEmail, setContact, setBio, lightMode } = useContext(UserContext);
    
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
        toast.success("Form is submitted")
    }
    const options = {
        onOpen: () => console.log("open"),
        autoClose: 6000,
        type: "info",
        hideProgressBar: false,
        position: "top-left",
        pauseOnHover: true,
        progress: 0.2
        // and so on ...
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    
  return (
    <div className={`text-center ${lightMode ? 'bg-white text-black':'bg-slate-950 text-white'}`}>

        <div className='rounded-md w-[90%] h-screen mx-auto mt-10 bg-slate-200 p-4'>
             <Slider {...settings}>
                {[1,2,3,4,5,6,7].map((item, index)=>(
                        <div className='h-64 mx-2 bg-red-500 rounded-md flex items-center justify-center' key={index}>
                            <h1 className='text-9xl font-bold text-white'>{item}</h1>
                        </div>
                    )
)}
             </Slider>
        </div>



        <h1 className='text-2xl mb-6 text-center font-bold'>Home Page</h1>
        <p className='text-lg'>Welcome to the home page! This is where you can find the latest updates and news.</p>
        <p className='text-lg'>Feel free to explore the site and learn more about what we have to offer.</p>

        {/* basic form to get user data: name, email, bio, contact */}
        <form onSubmit={handleSubmit} className={`w-96 mx-auto p-4 ${lightMode ? 'bg-slate-50 text-slate-700': 'bg-slate-700 text-white'}`}>
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

        <button onClick={()=>toast.success("Hello", options) } className='text-white bg-blue-500 px-3 py-2'>Click Me</button>
    </div>
  )
}

export default Home