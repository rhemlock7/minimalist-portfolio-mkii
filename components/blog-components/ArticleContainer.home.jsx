"use client"
import React from 'react'
import Article from './article';
import useFetch from "../../app/hooks/useFetch";

function ArticleContainer() {
    // Fetch for Blog API
    const { loading, error, data } = useFetch('https://portfolio-strapi-backend-6r1k.onrender.com/api/blogs?populate=*')

    // Loading and error handling
    if (loading) return <p>Loading...</p>
    if (error) return <p>Uh oh... There's an error.</p>

    // If data exists...
    if (data) {
        // Map through the first three items in the data array and render Article components
        const articles = data.data.slice(0, 3).map((blog) => {
            const blogData = blog.attributes;
            const imageUrl = blogData.image?.data?.attributes?.url;
            return (
                <Article
                    key={blog.id} // Unique key for each component
                    id={blog.id}
                    blogName={blogData.title}
                    readTime={blogData.readTime}
                    publishedDate={blogData.publishedAt}
                    image={imageUrl}
                    altText={blogData.altText}
                />
            );
        });

        return <div className="grid md:grid-cols-3 gap-6">{articles}</div>;
    }
}


export default ArticleContainer;
