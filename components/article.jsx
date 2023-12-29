import React from 'react'

function Article(props) {
  const blogName = props.blogName;
  const readTime = props.readTime;
  const publishedDate = props.publishedDate;
  const image = props.image;
  const altText = props.altText;
  const blogID = props.key

  return (
    <a href={`http://localhost:3000/api/blogs/${blogID}?populate=*`}>
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
