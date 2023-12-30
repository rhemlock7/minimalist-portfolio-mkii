import React from 'react'

function Article({blogName, readTime, publishedDate, image, altText, id}) {

  return (
    <a href={`blog/${id}`}>
      <img className='h-52 w-full object-cover rounded-md' src={image} alt={altText} />

      <div>
        <h4 className='my-2'>{blogName}</h4>
        <div className='flex justify-between text-gray-500'>
          <p className='text-sm'>Read time: {readTime} min</p>
          <p className='text-sm'>{publishedDate}</p>
        </div>
      </div>
    </a>
  )
}

export default Article;
