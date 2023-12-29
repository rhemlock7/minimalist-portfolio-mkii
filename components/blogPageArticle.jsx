import React from 'react'

function BlogPageArticle(props) {
    const blogName = props.blogName;
    const readTime = props.readTime;
    const publishedDate = props.publishedDate;
    const image = props.image;
    const altText = props.altText;

    return (
        <a className='w-full py-16' href=''>
            <h3>{blogName}</h3>
            <img />
        </a>
    )
}

export default BlogPageArticle
