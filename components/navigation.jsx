"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

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
      
      <nav className='flex flex-col items-end justify-end'>
        <Hamburger toggled={open} toggle={setOpen} onClick={handleChange} />

      {/* If "open" is false, open menu */}
      <div>
        {open && <ul className='text-right'>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
          </ul>}

      </div>
        
      </nav>
    </header>
  )
}

export default Navigation
