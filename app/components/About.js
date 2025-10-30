import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        
        <h2 className='text-center text-5xl font-Ovo'>
            About Me
        </h2>

        <div className='flex w-full flex col lg:flex-row items-center 
        gap-20 my-20'>
            <div className='w-64 sm-80 rounded-3xl max-w-none'>
                <Image src={assets.profile_image} alt='user' 
                className='w-full rounded 3xl'/>
            </div>

            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>
                    I am a fourth year studying Cognitive Science with a 
                    speciality in Design and Interaction at UCSD. I have lived 
                    in San Diego my whole life. I love hanging out with friends, 
                    exploring new places, studying at cafes, taking pilates 
                    classes, and sunset walks to Gliderport. I am working to 
                    become a user experience designer in the future. </p>

                    
            </div>
        </div>


    </div>
  )
}

export default About
