//imports
import React from 'react'
import Image from 'next/image';
//images
import CoolGuyRy from '../public/assets/ryan-photos/23-RH-PORTRAIT-EDIT-421 (2).jpg'

const Project = (props) => {
  let projectTitle = props.title;
  let projectLink = props.projectLink

  return (
    <a href={projectLink}>
      <div className='project-container'>

        {/* Image */}
        <div className='img-container'>
          <Image src={CoolGuyRy} alt="cool ryan photo" id='project-photo'/>
        </div>

        {/* Text */}
        <div className='flex justify-between items-center mt-1'>
          <h3 className='text-base'>{projectTitle}</h3>
          <a className='text-gray-500 text-base' id='view' href={projectLink} >View</a>          
        </div>

      </div>
    </a>
  )
}

export default Project;
