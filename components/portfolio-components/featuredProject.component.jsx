//imports
import React from 'react'

const Project = ({ projectName, image, id }) => {

  return (
    <a href={`portfolio/${id}`}>
      <div className='project-container'>

        {/* Image */}
        <div className='img-container'>
          <img className=' w-full object-cover' src={image} alt={projectName} id='project-photo'/>
        </div>

        {/* Text */}
        <div className='flex flex-col justify-between items-start mt-1 md:flex-row'>
          <h3 className=''>{projectName}</h3>
          <div className='mt-2 md:mt-0'>
            <a className='text-gray-500 text-base' id='view' href={`portfolio/${id}`} >View</a>          
          </div>
        </div>

      </div>
    </a>
  )
}

export default Project;
