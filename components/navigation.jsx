"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Hamburger from 'hamburger-react';
import RyanPhoto from '../public/assets/ryan-photos/ryan-hemlock-headshot.jpg';
import './navigation.styles.scss';

function Navigation() {
  // Usestate for hamburger menu
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!open);
  }

// Menu component with conditional rendering
let menu;
let menuMask;

if (open) {
  menu = 
  <div className='nav-menu-container z-40'>
    
    {/* About Link */}
    <ul className='nav-menu'>
      <li>
        <a href="#">
          <div className='li-container'>
            <h3>About</h3>
            <Image src={RyanPhoto} width={100} alt='ryan hemlock portrait' className='hidden sm:block rounded-md' />
          </div>
        </a>
      </li>

      {/* Portfolio Link */}
      <li>
        <a href="#">
          <div className='li-container'>
            <h3>Portfolio</h3>
            <Image alt='project photo' className='hidden sm:block' />
          </div>
        </a>
      </li>

      {/* Blog Link */}
      <li>
        <a href="#">
          <div className='li-container'>
            <h3>Blog</h3>
            <Image alt='blog photo' className='hidden sm:block' />
          </div>
        </a>
      </li>
    </ul>
  </div>

  menuMask = 
  <div className='bg-white fixed top-0 h-full w-full z-40'>

  </div>
}



  // Navgiation Component
  return (
    <header className='sticky top-0'>
      <nav className='h-16 flex items-center justify-between lg:pt-6 z-50'>
        <div className='logo-wrapper'>
          <h2 className='text-lg' id='logo'>Ryan Hemlock</h2>
        </div>

        {/* <p>Dark mode?</p> */}
        
        <Hamburger toggled={open} toggle={setOpen} onClick={handleChange} id='hamburger-icon'/>
        
      </nav>

      {/* If "open" is false, open menu */}
      { menuMask }
      { menu }

    </header>
  )
}

export default Navigation
