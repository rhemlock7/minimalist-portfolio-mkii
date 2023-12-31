"use client"
import React from 'react';
//import useFetch from '@/app/hooks/useFetch';
import { useParams } from 'next/navigation';
import useFetch from '@/app/hooks/useFetch';
import ReactMarkdown from 'react-markdown';
import './article.styles.scss';

export default function BlogArticle() {
    // Id of the article that was clicked
    const { id } = useParams()

    const { loading, error, data } = useFetch(`https://portfolio-strapi-backend-6r1k.onrender.com/api/blogs/${id}?populate=*`)

    // Loading and error handling
    if (loading) return <h1 className='my-24'>Loading...</h1>
    if (error) return <p>Uh oh... There's an error.</p>


    // If data exists, render the data
    if (data) {
        const articleData = data.data.attributes;
        const image = articleData.image.data.attributes.url

        // Body of the page
        return (
            <main className='my-24'>

                {/* Blog Content Section */}
                <section className='lg:flex'>

                    {/* Container for image and title info */}
                    <div className='lg:w-2/3'>
                        <img className='rounded-lg' src={image} alt={articleData.altText} />

                        <h1 className='mt-10'>{articleData.title}</h1>

                        <div className='flex mt-4 mb-12'>
                            <p className='mr-8'>Published: {articleData.publishedAt}</p>
                            <p>Read Time: {articleData.readTime} min</p>
                        </div>

                        {/* Body text container */}
                        <div id='article-container'>
                            <ReactMarkdown>{articleData.body}</ReactMarkdown>
                        </div>
                    </div>

                    {/* Side column with author info */}
                    <div className='hidden md:w-1/4'>
                        <p>Content Here</p>
                    </div>
                </section>

            </main>
        )
    }

}
