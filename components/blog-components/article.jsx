import React from 'react'
import arrowImage from '../../public/assets/icons/arrow-icon.svg';
import Image from 'next/image';

function Article({ blogName, readTime, publishedDate, image, altText, id }) {

  function formatDate(inputDate) {
    // Create a new Date object from the input string
    const dateObject = new Date(inputDate);

    // Check if the input string is a valid date
    if (isNaN(dateObject.getTime())) {
      return 'Invalid Date';
    }

    // Define an array of month names
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get individual date components
    const monthName = monthNames[dateObject.getMonth()];
    const day = dateObject.getDate().toString();
    const year = dateObject.getFullYear();

    // Assemble the formatted date
    const formattedDate = `${monthName} ${day}, ${year}`;

    return formattedDate;
  }

  const formattedDate = formatDate(publishedDate);

  return (
    <a href={`blog/${id}`}>
      <img className='h-52 w-full object-cover rounded-md' src={image} alt={altText} />

      <div>
        <p className='text-sm text-gray-500 mt-3 mb-1'>{formattedDate}</p>
        <h4 className='text-xl mb-1'>{blogName}</h4>
        <hr className='mt-2 mb-3' />
        <div className='text-sm flex justify-between items-center'>
          <p className='text-gray-500'>Read time: {readTime} min</p>
          <div className='flex'>
            <a className='text-sm' href={`blog/${id}`}>Read More</a>
            <Image className='w-4 mt-0.5 ml-2 fill-gray-500' src={arrowImage} />
          </div>
        </div>
      </div>
    </a>
  )
}

export default Article;
