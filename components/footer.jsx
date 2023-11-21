import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col mb-8 pt-10 border-t-2'>
      <div className='flex flex-col py-4'>
        <a href='https://github.com/rhemlock7' target='blank' rel='noreferrer'>Github</a>
        <a href='https://www.linkedin.com/in/ryan-hemlock/' target='blank' rel='noreferrer'>LinkedIn</a>
      </div>

      <div className='py-4'>
        <p>Let’s connect: <span>ryan@ryanhemlock.com</span></p>
      </div>
    </footer>
  )
}

export default Footer;
