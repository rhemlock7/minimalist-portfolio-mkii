import BlogPageArticles from '@/components/blogArticles.blog';
import React from 'react'

function Blog() {
  return (
    <div>
      <section className='mt-24'>
        <h1>Blog</h1>

        {/* All Articles */}
        <BlogPageArticles />

      </section>
    </div>
  )
}

export default Blog;
