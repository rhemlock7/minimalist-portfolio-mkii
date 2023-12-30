import FeaturedProjects from '@/components/portfolio-components/FeaturedProjects';
import NonFeaturedProjects from '@/components/portfolio-components/NonFeaturedProjects';
import React from 'react'

function Portfolio() {
  return (
    <div>
      <section className='mt-24'>
        <h1>Portfolio</h1>

        {/* Projects Section */}
        <section>
          <h2 className='mb-6'>Recent Projects</h2>

          <FeaturedProjects />
          <NonFeaturedProjects />

        </section>
      </section>
    </div>
  )
}

export default Portfolio;
