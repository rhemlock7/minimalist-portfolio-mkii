"use client"
import React from 'react'
import useFetch from '@/app/hooks/useFetch'
import BlogPageArticle from './blogPageArticle'

function BlogPageArticles() {
    // Fetch for Blog API
    const { loading, error, data } = useFetch('https://portfolio-strapi-backend-6r1k.onrender.com/api/blogs?populate=*')

    // Loading and error handling
    if (loading) return <p>Loading...</p>
    if (error) return <p>Uh oh... There's an error.</p>

    // If data exists...
    if (data) {
        // Map through the data array and render Article components
        const articles = data.data.map((blog) => {
            const blogData = blog.attributes;
            const imageUrl = blogData.image?.data?.attributes?.formats?.thumbnail?.url;

            // Date formatter
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
    
            const formattedDate = formatDate(blogData.publishedAt);

            return (
                <BlogPageArticle
                    key={blog.id} // Unique key for each component
                    id={blog.id}
                    blogName={blogData.title}
                    readTime={blogData.readTime}
                    publishedDate={formattedDate}
                    image={imageUrl}
                    altText={blogData.altText}
                />
            );
        });

        return <div className="mt-12">

            {articles}
        </div>;
    }
}

export default BlogPageArticles
