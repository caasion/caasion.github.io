import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='bg-gray-700 px-4'>
      <div className='flex justify-between'>
        <div className='footer-container'>
          <h2 className='font-semibold'>Isaac Ng</h2>
          <p>Graduated High School Student</p>
        </div>
        <div className='footer-container'>
          <h2 className='font-semibold'>Contacts</h2>
          <p><b>Email:</b> isaacngcaasi@gmail.com</p>
          <p><b>Discord:</b> caasi.bun</p>
        </div>
        <div className='footer-container'>
          <h2 className='font-semibold'>Socials</h2>
          <div className='flex items-center'>
            <a href="https://www.instagram.com/caasi.bun/">
            <button className='socials-button' type="button"><FaInstagram /></button>
            </a>
            <a href="https://github.com/caasion">
              <button className='socials-button' type="button"><FaGithub /></button>
            </a>
            <a href="https://www.linkedin.com/in/isaac-ng-239412343/">
              <button className='socials-button' type="button"><FaLinkedin /></button>
            </a>
            <a href="mailto:isaacngcaasi@gmail.com">
              <button className='socials-button' type="button"><MdEmail /></button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer