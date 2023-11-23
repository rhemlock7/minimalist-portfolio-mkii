import Image from "next/image";
import Ryan from '../public/ryan-hemlock-headshot.jpg';
import Project from "@/components/project.component";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className='flex flex-col justify-between items-start border-b-2 py-12 mb-0 lg:flex-row lg:items-end lg:pt-28 lg:pb-16 '>
        <Image src={Ryan} alt='ryan hemlock headshot' width={200} height={200}></Image>
        <h1 className='mt-6'>Software Developer</h1>
      </section>

      {/* About Section */}
      <section className='flex flex-col-reverse border-b-2 py-8 pb-14 lg:flex-row lg:items-start lg:pb-20'>

        {/* Experience Div */}
        <div className='my-3 mt-10 lg:w-1/2 lg:m-0'>
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>The Bema Team</h3>
              <p>Worked here forever my dude!</p>
            </li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>

        {/* About Bio Div */}
        <div className='mb-3 -mt-3 lg:w-3/5 lg:m-0'>
          <h2>About</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button>Download Resume</button>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className='mb-0' id="project-title">Recent Projects</h2>

        <div className='lg:grid lg:grid-cols-2 gap-x-8 gap-y-0'>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>
      
    </div>
  )
}
