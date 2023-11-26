//imports
import React from 'react'
import Image from 'next/image';
//images
import CoolGuyRy from '../public/assets/ryan-photos/23-RH-PORTRAIT-EDIT-421 (2).jpg'

const Project = () => {
  return (
    <a href=''>
      <div className='project-container'>

        {/* Image */}
        <div className='img-container'>
          <Image src={CoolGuyRy} alt="cool ryan photo" id='project-photo'/>
        </div>

        {/* Text */}
        <div className='flex justify-between items-center mt-1'>
          <h3 className='text-base'>Project</h3>
          <h3 className='text-gray-500 text-base' id='view'>View</h3>          
        </div>

      </div>
    </a>
  )
}

export default Project;
