"use client"
import React from 'react';
//import useFetch from '@/app/hooks/useFetch';
import { useParams } from 'next/navigation';
import useFetch from '@/app/hooks/useFetch';
import ReactMarkdown from 'react-markdown';
import RyanHeadshot from '../../../public/assets/ryan-photos/ryan-hemlock-headshot.jpg'
import Image from 'next/image';
import './project.styles.scss';

export default function BlogArticle() {
    // Id of the article that was clicked
    const { id } = useParams()
    console.log(id)

    const { loading, error, data } = useFetch(`https://portfolio-strapi-backend-6r1k.onrender.com/api/projects/${id}?populate=*`)

    // Loading and error handling
    if (loading) return <h1 className='my-24'>Loading...</h1>
    if (error) return <p>Uh oh... There's an error.</p>


    // If data exists, render the data
    if (data) {
        const projectData = data.data.attributes;
        const image = projectData.image.data.attributes.url

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

        const formattedDate = formatDate(projectData.publishedAt);

        // Body of the page
        return (
            <main className='my-24'>

                {/* Project Content Section */}
                <section className='lg:flex'>

                    {/* Container for image and title info */}
                    <div className='lg:w-2/3'>
                        <img className='rounded-lg' src={image} alt={projectData.title} />
                        <h1 className='mt-10'>{projectData.title}</h1>

                        <div className='flex mt-4 mb-12'>
                            <p className='mr-8'>{formattedDate}</p>
                        </div>

                        {/* Body text container */}
                        <div id='project-container'>
                            <ReactMarkdown className='w-10/12'>{projectData.body}</ReactMarkdown>
                        </div>
                    </div>

                    <div className='m-auto my-0 mt-12 lg:w-1/4 flex lg:flex-col items-center lg:items-start'>
                        <Image className='w-48 lg:mb-2' src={RyanHeadshot} />
                        <div className='ml-5 lg:ml-0'>
                            <h2>About Me</h2>
                            <p>Hey! My name is Ryan Hemlock. I've freelanced for years before becoming a web-developer. Today, my goal is to help SAAS companies build the best apps possible.</p>
                        </div>
                    </div>
                </section>

            </main>
        )
    }

}
