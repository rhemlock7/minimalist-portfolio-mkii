"use client"
import React from 'react'
import Article from './article';
import useFetch from "../app/hooks/useFetch";

function ArticleContainer() {
    // Fetch for Blog API
    const { loading, error, data } = useFetch('http://localhost:1337/api/blogs?populate=*')

    // Loading and error handling
    if (loading) return <p>Loading...</p>
    if (error) return <p>Uh oh... There's an error.</p>

    // If data exists...
    if (data) {
        // Map through the first three items in the data array and render Article components
        const articles = data.data.slice(0, 3).map((blog) => {
            const blogData = blog.attributes;
            const imageUrl = blogData.mainImage.data.attributes.formats.medium.url;
            return (
                <Article
                    key={blog.id} // Unique key for each component
                    id={blog.id}
                    blogName={blogData.blogName}
                    readTime={blogData.readTime}
                    publishedDate={blogData.publishedAt}
                    image={`http://localhost:1337${imageUrl}`}
                    altText={blogData.imgAltText}
                />
            );
        });

        return <div className="grid md:grid-cols-3 gap-6">{articles}</div>;
    }
}


export default ArticleContainer;
