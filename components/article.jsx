import React from 'react'

function Article() {
  return (
    <article>
        <a href=''>
            <img className='w-full h-60 md:80' src="https://images.pexels.com/photos/17567251/pexels-photo-17567251/free-photo-of-large-guild-in-riga.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

            <div>
                <h4>Blog Article</h4>
                <div className='flex justify-between text-gray-500'>
                    <p className='text-sm'>Read time: 4 minutes</p>
                    <p className='text-sm'>Nov. 26, 2023</p>
                </div>
            </div>
        </a>
    </article>
  )
}

export default Article;
