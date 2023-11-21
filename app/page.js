import Image from "next/image";
import Ryan from '../public/ryan-hemlock-headshot.jpg';
import Project from "@/components/project.component";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className='flex flex-col justify-between items-start border-b-2 pb-8 mb-0'>
        <Image src={Ryan} alt='ryan hemlock headshot' width={200} height={200}></Image>
        <h1 className='mt-6'>Software Developer</h1>
      </section>

      {/* About Section */}
      <section className='flex flex-col-reverse border-b-2 pb-8 mb-0'>
        <div className='my-3'>
          <h5>Experience</h5>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>

        <div className='mb-3 -mt-2'>
          <h5>About</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>

        <div>
          <Project />
          <Project />
          <Project />
        </div>
      </section>
      
    </div>
  )
}
