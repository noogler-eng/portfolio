import Image from "next/image";
import { socials } from "./social";
import Link from "next/link";
import TypingComponent from "./Typed";


export default function Home() {
  
  
  const socialIcons = socials.map((item, index)=>{
    const { Component, href, icon } = item;
    return <div key={index} className="flex flex-col text-sm justify-center items-center">
      <Link href={href}><Component size={30}/></Link>
      <p>{icon}</p>
    </div>
  })
  
  
  return <div className="flex items-center justify-center min-h-screen p-24">
    <div className="flex flex-col gap-3 items-center justify-center w-full">
      <div className="border p-2 rounded-full">
        <Image src='/me.jpeg' alt="sharad" width={350} height={350} className="rounded-full h-56 w-56 bg-blue-500 shadow-lg shadow-purple-500/50"/>
      </div>
      <div className="text-3xl font-mono">
        sharad poddar
      </div>
      <div className="flex gap-4">
        {socialIcons}
      </div>
    </div>
    <div className="flex flex-col w-full gap-3 items-center justify-center">
      <div className="flex gap-2 text-3xl font-mono justify-start w-full items-center">
        Hii, I'm sharad.A <div className='text-orange-600 font-bold font-sans'><TypingComponent/></div>
      </div>
      <ul className="text-xl flex gap-4 flex-col mt-8 font-mono list-disc">
        <li>
          Third-year Information Science student by day in <span className="text-orange-600 font-semibold">Dayananda Sagar of College of Enginnering</span>, 
          DSA enthusiast by night, and explorer of Bangalore's vibrant life in between.
        </li>
        <li>
          I used to work as a backend developer but now i'm more into web3 and blockchain. 
          I am developing my github and connections across web3 fields, looking for group that work on opensource.
        </li>
        <li>
          Open to work and eager to bring my expertise in modern web technologies and blockchain to your organization. 
          My tech stack includes Next.js, React, Tailwind CSS, Express, Node.js, PostgreSQL, Prisma, GraphQL, AWS, and more. 
          Ready to dive into challenging projects and contribute to innovative solutions.This is my 
          <a href={'/me.pdf'} download className="text-orange-600 font-semibold"> resume.</a>
        </li>
        <li>
          <span className="font-semibold">Note:</span> This site is still under construction. I'll work on it in my free time
        </li>
      </ul>
    </div>
  </div>  
}
