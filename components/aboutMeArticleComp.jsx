import React from 'react'
import RyanHeadshot from '../public/assets/ryan-photos/ryan-hemlock-headshot.jpg'
import Image from 'next/image';

function AboutMeArticleComp() {
    return (
        <div className='m-auto my-0 mt-12 lg:w-1/4 flex flex-col items-start'>
            <Image className='w-48 ml-5 mb-3 lg:ml-0 lg:mb-2' src={RyanHeadshot} />
            <div className='ml-5 lg:ml-0'>
                <h2>About Me</h2>
                <p>Hey! My name is Ryan Hemlock. I've freelanced for years before becoming a web-developer. Today, my goal is to help SAAS companies build the best apps possible.</p>
            </div>
        </div>
    )
}

export default AboutMeArticleComp
