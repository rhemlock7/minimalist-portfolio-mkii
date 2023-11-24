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



  // Navgiation Component
  return (
    <header className='h-16 flex items-center justify-between lg:pt-6'>
      <h2 className='text-lg' id='logo'>Ryan Hemlock</h2>
      
      <Hamburger toggled={open} toggle={setOpen} onClick={handleChange} id='hamburger-icon'/>
      {/* If "open" is false, open menu */}
        {open && 
        <nav className='nav-menu'>
        <ul className='nav-menu'>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>}
      {/* <nav className='nav-menu'>
          <ul className=''>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
      </nav> */}
    </header>
  )
}

export default Navigation
