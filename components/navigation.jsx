"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Hamburger from 'hamburger-react';
import RyanPhoto from '../public/assets/ryan-photos/ryan-hemlock-headshot.jpg';
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
    // opacity: open ? 1 : 0,
    transform: open ? 'translateY(0%)' : 'translateY(100%)'
    
    // from: { opacity: 0, transform: 'translateX(-100%)' },
    // enter: { opacity: 1, transform: 'translateX(0%)' },
    // leave: { opacity: 0, transform: 'translateX(-100%)' },
});


  // Navgiation Component
  return (
    <header className=''>

      {/* PRIMARY NAVIGATION */}
      <nav className='h-16 flex items-center justify-between pt-12'>
        <div className='logo-wrapper'>
          <h2 className='text-lg' id='logo'>Ryan Hemlock</h2>
        </div>
        {/* <p>Dark mode?</p> */}
        <Hamburger toggled={open} toggle={setOpen} onClick={handleChange} id='hamburger-icon' />
      </nav>

      {/* -------------------------------------- */}
      {/* MOBILE MENU that displays when toggled */}
        <animated.div style={transition} className='nav-menu-container'>

          <div className='absolute right-4 md:right-14 top-8'>
            <Hamburger toggled={open} toggle={setOpen} onClick={handleChange} id='hamburger-icon' />
          </div>

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
            <li id='final-li-border'>
              <a href="#">
                <div className='li-container'>
                  <h3>Blog</h3>
                  <Image alt='blog photo' className='hidden sm:block' />
                </div>
              </a>
            </li>
          </ul>
      </animated.div>

    </header>
  )
}

export default Navigation
