"use client"
import React from 'react';
//import useFetch from '@/app/hooks/useFetch';
import { useParams } from 'next/navigation';
import useFetch from '@/app/hooks/useFetch';
import ReactMarkdown from 'react-markdown';

export default function BlogArticle() {
    // Id of the article that was clicked
    const { id } = useParams()

    const { loading, error, data } = useFetch(`http://localhost:1337/api/blogs/${id}?populate=*`)

    // Loading and error handling
    if (loading) return <h1 className='my-24'>Loading...</h1>
    if (error) return <p>Uh oh... There's an error.</p>


    // If data exists, render the data
    if (data) {
        const articleData = data.data.attributes;
        //console.log(articleData)
        const image = articleData.mainImage.data.attributes.url

        // Body of the page
        return (
            <main className='my-24'>

                {/* Blog Content Section */}
                <section className='lg:flex'>

                    {/* Container for image and title info */}
                    <div className='lg:w-2/3'>
                        <img className='rounded-lg' src={`http://localhost:1337${image}`} alt={articleData.imgAltText} />

                        <h1 className='mt-10'>{articleData.blogName}</h1>

                        <div className='flex mt-4 mb-12'>
                            <p className='mr-8'>Published: {articleData.publishedAt}</p>
                            <p>Read Time: {articleData.readTime} min</p>
                        </div>

                        {/* Body text container */}
                        <ReactMarkdown className='w-10/12'>{articleData.postBody}</ReactMarkdown>
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
