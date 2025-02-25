import React, { useState } from 'react'
import ContactCard from './ContactCard'
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import ContactUsImg from '../assets/images/Contact2.jpg'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }

    if (mobile.trim() === '' || mobile.length < 10) {
      setMobileError('Please enter a valid mobile number');
    } else {
      setMobileError('');
    }
  };
  return (
    <div>
      <section className="bg-fixed relative grid place-items-center h-96 uppercase text-5xl font-bold bg-[url(/src/assets/images/contact.png)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-gradient-to-b from-[#0084D6] to-black"></div>
        <h2 className=" text-white z-[2]">Contact Us</h2>
      </section>
      <div className="m-5 my-10 lg:px-20 p-5 grid lg:flex gap-10 lg:justify-around">
        <ContactCard
          title={"Physical Address"}
          logo={<FaLocationDot size={60} color='#6CB250' />}
          content={"3rd Floor, The Corenthum, India Accelerator, Sector 62, Noida, Uttar Pradesh 201301"}
        />
        <ContactCard
          title={"Email address"}
          logo={<HiOutlineMailOpen size={60} color='#6CB250' />}
          content={"tech@entrepreneurshipnetwork.net"}
        />
        <ContactCard
          title={"Phone Number"}
          logo={<FaPhoneAlt size={60} color='#6CB250' />}
          content={"+91  7498232799"}
        />
      </div>
      <div className="flex h-screen border-2 p-10 m-20  bg-[#EFECEC] color-white">
        <div className="w-5/12 bg-cover aspect-auto p-10 lg:px-10 m-10" >
          <img
            className="w-full  h-fit aspect-auto"
            src={ContactUsImg}
            alt="Contact us"
          />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#3470a1] text-left">Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label htmlFor="name" className="block mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full p-2 border-gray-300 rounded-md shadow-sm ${nameError ? 'border-red-500' : ''
                  }`}
              />
              {nameError && <p className="text-red-500 mt-1">{nameError}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2 border-gray-300 rounded-md shadow-sm ${emailError ? 'border-red-500' : ''
                  }`}
              />
              {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className={`w-full p-2 border-gray-300 rounded-md shadow-sm ${mobileError ? 'border-red-500' : ''
                  }`}
              />
              {mobileError && <p className="text-red-500 mt-1">{mobileError}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact