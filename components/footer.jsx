import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col mb-8 pt-10 border-t-2 lg:flex-row lg:justify-between lg:items-center'>
      <div>
        <div>
          <a href='https://github.com/rhemlock7' target='blank' rel='noreferrer' className='footer-link'>Github</a>
          <a href='https://www.linkedin.com/in/ryan-hemlock/' target='blank' rel='noreferrer' className='footer-link'>LinkedIn</a>
        </div>

        <div className='flex'>
          <Link href="/" className='footer-link'>Home</Link>
          <Link href="about" className='footer-link'>About</Link>
          <Link href="/portfolio" className='footer-link'>Portfolio</Link>
          <Link href="/blog" className='footer-link'>Blog</Link>
        </div>
      </div>

      <div className='py-4'>
        <h3>Want to work together?</h3>
        <p>Let’s connect: <span>ryan@ryanhemlock.com</span></p>
      </div>
    </footer>
  )
}

export default Footer;
