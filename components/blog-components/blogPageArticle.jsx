import React from 'react'

function BlogPageArticle({blogName, readTime, publishedDate, image, altText, id}) {

    return (
        <a className='w-full my-8 flex justify-between items-center' href={`blog/${id}`}>
            <img src={image} alt={altText} />
            <div className='w-full ml-8'>
                <h2>{blogName}</h2>
                <div className='flex justify-start items-center'>
                    <p className='mr-12'>{publishedDate}</p>
                    <p>Read Time: {readTime} min</p>
                </div>
            </div>
            
        </a>
    )
}

export default BlogPageArticle
