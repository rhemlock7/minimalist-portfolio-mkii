import React from 'react'
import Image from 'next/image';
import CoolGuyRy from '../public/assets/ryan-photos/23-RH-PORTRAIT-EDIT-421 (2).jpg'
import Arrow from '../public/assets/icons/arrow-icon.svg';
import './project.styles.scss';

const Project = () => {
  return (
    <a href=''>
      <div className='project-container'>
        <div className='img-container'>
          <Image src={CoolGuyRy} alt="cool ryan photo" id='project-photo'/>
        </div>

        <div className='flex justify-between items-center mt-1'>
          <h3 className='text-base'>Project</h3>
          <div>
            <h3 className='text-gray-500 text-base' id='view'>View</h3>
            <image src={Arrow} width={100} alt='arrow' id='view-arrow' />
          </div>
        </div>
      </div>
    </a>
  )
}

export default Project;
