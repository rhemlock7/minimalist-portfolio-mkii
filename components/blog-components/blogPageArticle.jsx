import React from 'react'

function BlogPageArticle({blogName, readTime, publishedDate, image, altText, id}) {

    return (
        <a className='w-full my-8 flex flex-col lg:flex-row justify-between items-start lg:items-center' href={`blog/${id}`}>
            <img className='w-full lg:w-1/4' src={image} alt={altText} />
            <div className='w-full lg:ml-8'>
                <h2 className='text-lg lg:text-3xl'>{blogName}</h2>
                <div className='flex justify-between lg:justify-start items-center'>
                    <p className='mr-12'>{publishedDate}</p>
                    <p>Read Time: {readTime} min</p>
                </div>
            </div>
            
        </a>
    )
}

export default BlogPageArticle
