import React from 'react'

function BlogPageArticle(props) {
    const blogName = props.blogName;
    const readTime = props.readTime;
    const publishedDate = props.publishedDate;
    const image = props.image;
    const altText = props.altText;

    return (
        <a className='w-full my-8 flex justify-between items-center' href=''>
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
