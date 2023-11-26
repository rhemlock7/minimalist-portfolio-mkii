import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col mb-8 pt-10 border-t-2 lg:flex-row lg:justify-between lg:items-center'>
      <div className='flex flex-col py-4 lg:flex-row'>
        <a href='https://github.com/rhemlock7' target='blank' rel='noreferrer' className='footer-link'>Github</a>
        <a href='https://www.linkedin.com/in/ryan-hemlock/' target='blank' rel='noreferrer' className='footer-link'>LinkedIn</a>
      </div>

      <div className='py-4'>
        <h3>Want to work together?</h3>
        <p>Let’s connect: <span>ryan@ryanhemlock.com</span></p>
      </div>
    </footer>
  )
}

export default Footer;
