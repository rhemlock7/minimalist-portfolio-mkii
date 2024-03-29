import Image from "next/image";
import Link from "next/link";
// Images
import Ryan from '../public/assets/ryan-photos/23-RH-PORTRAIT-EDIT-293 - CROPPED.jpg';
import arrowImage from '../public/assets/icons/arrow-icon.svg';

// Imported components
import Project from "@/components/portfolio-components/featuredProject.component";
import ArticleContainer from "@/components/blog-components/ArticleContainer.home";
import FeaturedProjects from "@/components/portfolio-components/FeaturedProjects";


export default function Home() {

  // HTML Being rendered
  return (
    <div>
      {/* Hero Section */}
      <section className='flex flex-col justify-between items-start border-b-2 py-12 pt-18 mb-0 lg:flex-row lg:items-end lg:pt-28 lg:pb-12 2xl:pt-40 2xl:pb-16'>
        <Image src={Ryan} alt='ryan hemlock headshot' id="hero-headshot"></Image>
        <h1 className='mt-6'>Hey! I'm Ryan 👋<br></br>a Web Developer</h1>
      </section>

      {/* About Section */}
      <section className='flex flex-col-reverse border-b-2 py-8 pb-14 lg:flex-row lg:items-start lg:pb-20 2xl:pb-28 2xl:pt-20 '>

        {/* Experience Div */}
        <div className='my-3 mt-10 lg:w-1/2 lg:m-0'>
          <h2>Experience</h2>
          <ul>
            <li className='my-3'>
              <p className='text-base'>The Bema Team - Owner</p>
              <p className='text-sm text-slate-500'>March 2021 - Present</p>
            </li>
            <li className='my-3'>
              <p className='text-base'>Alcove Media - Photographer</p>
              <p className='text-sm text-slate-500'>January 2020 - February 2021</p>
            </li>
          </ul>
        </div>

        {/* About Bio Div */}
        <div className='mb-3 -mt-3 lg:w-3/5 lg:m-0'>
          <h2>About</h2>
          <p>Hey! My name is Ryan Hemlock. I'm a full-stack software developer specializing in JavaScript & the MERN stack.</p><br></br>
          <p>I'm also proficient in JQuery, SQL, GraphQL, HTML5, CSS3, Git/Github plus many other technologies and tools.</p><br></br>
          <p>Click below to view my resume 👇</p>
          <button>Download Resume</button>
        </div>
      </section>

      {/* Projects */}
      <section className='py-6'>
      <div className="flex justify-between items-center">
          <h2>Featured Projects</h2>
          <div className='flex'>
            <Link className='text-lg' href='/portfolio'>View All</Link>
            <Image className='w-5 mt-1 ml-2 fill-gray-500' src={arrowImage} />
          </div>
        </div>

        <FeaturedProjects />
      </section>

      {/* Blog Section -> Recent Articles */}
      <section className='border-t-2 py-16 lg:py-24'>
        {/* Title */}
        <div className="flex justify-between items-center">
          <h2>Recent Articles</h2>
          <div className='flex'>
            <Link className='text-lg' href='/blog'>View All</Link>
            <Image className='w-5 mt-1 ml-2 fill-gray-500' src={arrowImage} />
          </div>
        </div>

        <ArticleContainer />
      </section>

    </div>
  )
}
