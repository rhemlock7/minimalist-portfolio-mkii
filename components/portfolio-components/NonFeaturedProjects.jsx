"use client"
import React from 'react'
import useFetch from '@/app/hooks/useFetch'
import Project from './featuredProject.component'
import NonFeaturedProject from './NonFeatured.component'

function NonFeaturedProjects() {

    // Fetch for Blog API
    const { loading, error, data } = useFetch('https://portfolio-strapi-backend-6r1k.onrender.com/api/projects?populate=*')

    // Loading and error handling
    if (loading) return <p>Loading...</p>
    if (error) return <p>Uh oh... There's an error.</p>

    // If data exists...
    if (data) {
        // Filter through to only display the featured projects
        const featuredProjects = data.data.filter(
            (project) => project.attributes.isFeatured !== true
        );

        // Map through the first three items in the data array and render Article components
        const renderProjects = featuredProjects.map((project) => {
            const projectData = project.attributes;
            const imageUrl = projectData.image?.data?.attributes?.formats?.thumbnail?.url;
            return (
                <NonFeaturedProject
                    key={project.id} // Unique key for each component
                    id={project.id}
                    projectName={projectData.title}
                    image={imageUrl}
                />
            );
        });

        return <div className="mt-6">{renderProjects}</div>;
    }

}

export default NonFeaturedProjects
