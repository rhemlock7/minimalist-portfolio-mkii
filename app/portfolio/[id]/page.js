"use client"
import React from 'react';
//import useFetch from '@/app/hooks/useFetch';
import { useParams } from 'next/navigation';
import useFetch from '@/app/hooks/useFetch';
import ReactMarkdown from 'react-markdown';

export default function BlogArticle() {
    // Id of the article that was clicked
    const { id } = useParams()
    console.log( id )

    const { loading, error, data } = useFetch(`https://portfolio-strapi-backend-6r1k.onrender.com/api/projects/${id}?populate=*`)

    // Loading and error handling
    if (loading) return <h1 className='my-24'>Loading...</h1>
    if (error) return <p>Uh oh... There's an error.</p>


    // If data exists, render the data
    if (data) {
        const projectData = data.data.attributes;
        const image = projectData.image.data.attributes.url

        // Body of the page
        return (
            <main className='my-24'>

                {/* Project Content Section */}
                <section className='lg:flex'>

                    {/* Container for image and title info */}
                    <div className=''>
                        <img className='rounded-lg' src={image} alt={projectData.title} />

                        <h1 className='mt-10'>{projectData.title}</h1>

                        <div className='flex mt-4 mb-12'>
                            <p className='mr-8'>Published: {projectData.publishedAt}</p>
                        </div>

                        {/* Body text container */}
                        <ReactMarkdown className='w-10/12'>{projectData.body}</ReactMarkdown>
                    </div>
                </section>

            </main>
        )
    }

}
