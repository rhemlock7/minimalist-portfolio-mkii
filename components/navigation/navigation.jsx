"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Hamburger from 'hamburger-react';
import './navigation.styles.scss';

function Navigation() {
  // Usestate for hamburger menu
  const [open, setOpen] = useState(false);

  // Menu toggle function
  const handleChange = () => {
    setOpen(!open);

  }

  //Nav-Menu Animation
  const transition = useSpring({
    transform: open ? 'translateY(0%)' : 'translateY(100%)'
  });


  // Navgiation Component
  return (
    <header className=''>

      {/* PRIMARY NAVIGATION */}
      <nav className='h-16 flex items-center justify-between pt-12'>
        <Link href="/" className='logo-wrapper'>
          <h2 className='text-lg' id='logo'>Ryan Hemlock</h2>
        </Link>

        {/* Hamburger Menu */}
        <Hamburger toggled={open} toggle={setOpen} onClick={handleChange} id='hamburger-icon' />
      </nav>


      {/* -------------------------------------- */}
      {/* MENU that displays ONLY when toggled */}
      <animated.div style={transition} className='nav-menu-container'>

        <div id='hamburger-container'>
          <Hamburger toggled={open} toggle={setOpen} onClick={handleChange} id='hamburger-icon' />
        </div>


        {/* Home Link */}
        <ul className='nav-menu'>
          <li>
            <Link href="/" onClick={handleChange}>
              <div className='li-container'>
                <h3>Home</h3>
                {/* <Image width={80} alt='hemlock' className='hidden sm:block rounded-md' /> */}
              </div>
            </Link>
          </li>

          {/* About Link */}
          {/* <li>
            <Link href="/about" onClick={handleChange}>
              <div className='li-container'>
                <h3>About</h3>
                <Image src={RyanPhoto} width={80} alt='ryan hemlock portrait' className='hidden sm:block rounded-md' />
              </div>
            </Link>
          </li> */}

          {/* Portfolio Link */}
          <li>
            <Link href="/portfolio" onClick={handleChange}>
              <div className='li-container'>
                <h3>Portfolio</h3>
                {/* <Image alt='project photo' className='hidden sm:block' /> */}
              </div>
            </Link>
          </li>

          {/* Blog Link */}
          <li id='final-li-border'>
            <Link href="/blog" onClick={handleChange}>
              <div className='li-container'>
                <h3>Blog</h3>
                {/* <Image alt='blog photo' className='hidden sm:block' /> */}
              </div>
            </Link>
          </li>
        </ul>
      </animated.div>

    </header>
  )
}

export default Navigation
