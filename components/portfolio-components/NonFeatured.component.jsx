//imports
import React from 'react'

const NonFeaturedProject = ({ projectName, image, id }) => {

    return (
        <a className='w-full my-8 flex justify-between items-center' href={`portfolio/${id}`}>
            <img src={image} alt={projectName} />
            <div className='w-full ml-8'>
                <h2 className='m-0'>{projectName}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...</p>
            </div>
        </a>
    )
}

export default NonFeaturedProject;
