//imports
import React from 'react'

const Project = ({ projectName, image, id }) => {

  return (
    <a href={`portfolio/${id}`}>
      <div className='project-container'>

        {/* Image */}
        <div className='img-container'>
          <img className='h-80 w-full object-cover' src={image} alt={projectName} id='project-photo'/>
        </div>

        {/* Text */}
        <div className='flex justify-between items-center mt-1'>
          <h3 className='text-base'>{projectName}</h3>
          <a className='text-gray-500 text-base' id='view' href={`portfolio/${id}`} >View</a>          
        </div>

      </div>
    </a>
  )
}

export default Project;
