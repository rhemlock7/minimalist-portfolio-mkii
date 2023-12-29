"use client"
import React from 'react';
import useFetch from '@/app/hooks/useFetch';

function BlogArticle() {
    // Fetch for Blog API
    const { loading, error, data } = useFetch('http://localhost:1337/api/blogs?populate=*')

    // Loading and error handling
    if (loading) return <p>Loading...</p>
    if (error) return <p>Uh oh... There's an error.</p>

    // If data exists...
    if (data) {
        // Map through the first three items in the data array and render Article components
        const article = (blog) => {
            const blogData = data.attributes;
            const imageUrl = blogData.mainImage.data.attributes.formats.thumbnail.url;
            return (
                <main>
                    <p>Test</p>
                </main>
            );
        };

        return <div className="mt-12">
            {article}
        </div>;
    }
}

export default BlogArticle
