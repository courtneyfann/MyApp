import {assets} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile} alt='' 
            className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Courtney Fann 
        </h3>

        <h1 className='text -3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            UI/UX Designer
        </h1> 

        <p className='max-w 2xl mx-auto font-Ovo'>
            Hi! I am a student in COGS 125 Advanced Interaction Design!
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt=4'>
            <a href="#contact" 
            className='px-10 py-3 border border-white rounded-full bg-black 
            text-white flex items-center gap-2'> 
            Contact Me<Image src={assets.right_arrow_white} alt='' 
            className='w-4'/></a>

            <a href="/sample-resume.pdf"
            className='px-10 py-3 border rounded-full boarder-gray-500 flex 
            items-center gap-2'> 
            My Resume (sample) <Image src={assets.download_icon} alt='' 
            className='w-4'/></a>
        </div>


    </div>
  )
}

export default Home
