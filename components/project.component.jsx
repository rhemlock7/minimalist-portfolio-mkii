import React from 'react'
import Image from 'next/image';
import CoolGuyRy from '../public/23-RH-PORTRAIT-EDIT-421 (2).jpg'

const Project = () => {
  return (
    <a href=''>
      <div className='my-8'>
        <Image src={CoolGuyRy} alt="cool ryan photo" />

        <div className='flex justify-between items-center'>
          <h3>Project</h3>
          <p>Project</p>
        </div>
      </div>
    </a>
  )
}

export default Project;
