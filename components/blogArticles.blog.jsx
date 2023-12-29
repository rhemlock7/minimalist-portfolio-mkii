"use client"
import React from 'react'
import useFetch from '@/app/hooks/useFetch'
import BlogPageArticle from './blogPageArticle'

function BlogPageArticles() {
    // Fetch for Blog API
    const { loading, error, data } = useFetch('http://localhost:1337/api/blogs?populate=*')

    // Loading and error handling
    if (loading) return <p>Loading...</p>
    if (error) return <p>Uh oh... There's an error.</p>

    // If data exists...
    if (data) {
        // Map through the first three items in the data array and render Article components
        const articles = data.data.map((blog) => {
            const blogData = blog.attributes;
            const imageUrl = blogData.mainImage.data.attributes.formats.thumbnail.url;
            return (
                <BlogPageArticle
                    key={blog.id} // Unique key for each component
                    blogName={blogData.blogName}
                    readTime={blogData.readTime}
                    publishedDate={blogData.publishedAt}
                    image={`http://localhost:1337${imageUrl}`}
                    altText={blogData.imgAltText}
                />
            );
        });

        return <div className="mt-12">
            
            {articles}
        </div>;
    }
}

export default BlogPageArticles
