"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import './navigation.styles.scss';

function Navigation() {
  // Usestate for hamburger menu
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!open);
  }

// Menu component with conditional rendering
let menu;
if (open) {
  menu = 
  <div className='nav-menu-container'>
    <ul className='nav-menu'>
      <li><a href="#">About</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </div>
}


  // Navgiation Component
  return (
    <header className='sticky top-0'>
      <nav className='h-16 flex items-center justify-between lg:pt-6'>
        <h2 className='text-lg' id='logo'>Ryan Hemlock</h2>

        <p>Dark mode?</p>
        
        <Hamburger toggled={open} toggle={setOpen} onClick={handleChange} id='hamburger-icon'/>
        
      </nav>

      {/* If "open" is false, open menu */}
      { menu }

    </header>
  )
}

export default Navigation
