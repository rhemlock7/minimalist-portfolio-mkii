import React from 'react'
import Image from 'next/image';
import CoolGuyRy from '../public/assets/ryan-photos/23-RH-PORTRAIT-EDIT-421 (2).jpg'

const Project = () => {
  return (
    <a href=''>
      <div className='my-8'>
        <Image src={CoolGuyRy} alt="cool ryan photo" />

        <div className='flex justify-between items-center'>
          <h3 className='text-base'>Project</h3>
          <h3 className='text-gray-500 text-base'>View</h3>
        </div>
      </div>
    </a>
  )
}

export default Project;
