import React, { useState } from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import lottieAnimation from "../assets/lottie.json";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 

import 'react-toastify/dist/ReactToastify.css';  
export default function RegForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/jobapplications", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), 
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Application submitted:', result);
      
      toast.success('Application submitted successfully!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate('/applicants');
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          coverLetter: ''
        });
      }, 1000);

      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: ''
      });

    } else {
      console.error('Failed to submit the application');
      

      toast.error('Failed to submit the application. Please try again later.', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#2D1B69] p-4">
      <div className="max-w-6xl w-full mx-[4rem] grid lg:grid-cols-2 gap-[10rem] items-center">
        <div className="w-[42rem] backdrop-blur-sm bg-[#1a103f]/50 border border-purple-500/20 rounded-xl p-8">
          <div className="space-y-2 mb-8">
            <h1 className="text-purple-200 text-xl">
              Please fill out the form below to apply for available positions
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="h-[41.2rem]">
            <div className="space-y-[1.1rem]">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-100">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Mridul Dhamija"
                  className="w-full px-4 py-2.5 rounded-lg bg-purple-900 border border-purple-500/30 
                           text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 
                           focus:ring-purple-500/50 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-purple-100">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="mridul.jsx@gmail.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-purple-900 border border-purple-500/30 
                           text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 
                           focus:ring-purple-500/50 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-purple-100">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 6969-6969---"
                  className="w-full px-4 py-2.5 rounded-lg bg-purple-900 border border-purple-500/30 
                           text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 
                           focus:ring-purple-500/50 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="position" className="block text-sm font-medium text-purple-100">
                  Position
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-purple-900 border border-purple-500/30 
                           text-white focus:outline-none focus:ring-2 focus:ring-purple-500 
                           focus:border-transparent transition-all"
                >
                  <option value="" disabled>Select a position</option>
                  <option value="developer">Software Developer</option>
                  <option value="designer">UI/UX Designer</option>
                  <option value="manager">Project Manager</option>
                  <option value="marketing">Marketing Specialist</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="experience" className="block text-sm font-medium text-purple-100">
                  Years of Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-purple-900
                           border border-purple-500/30 
                           text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                           focus:border-transparent transition-all"
                >
                  <option value="" disabled>Select experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="coverLetter" className="block text-sm font-medium text-purple-100">
                  What makes you unique?
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  required
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us why you'd be a great fit for this position in our company"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-purple-900 border border-purple-500/30 
                           text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 
                           focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 
                           text-white font-medium transition-colors duration-200 ease-in-out
                           focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                           active:bg-purple-800"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:block w-[100rem]">
          <h1 className='text-slate-500 animate-pulse text-4xl ml-[37rem]'>Mridul Enterprises</h1>
          <Player
            autoplay
            loop
            src={lottieAnimation}
            style={{ height: "46rem", width: "48rem", marginLeft: '13rem' }}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
