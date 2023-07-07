import React from 'react'
import nishant from '../assets/nishant.jpg'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import github from '../assets/github.png'
import website from '../assets/browser.png'
function About() {
  return (
    <>
        <div className='text-white flex justify-center'>
            <img src={nishant} className=' h-52 w-52 rounded-full' alt='Nishant' />
        </div>

        <span className= 'text-white block font-customMont font-semibold text-2xl flex justify-center'>Nishant Gaharwar</span>
        <div className='flex justify-center'>
        <p className='text-white text-center w-2/4 font-customMont mt-5'>As a fresh and highly motivated individual, I bring a strong technical background in web development and a passion for creating innovative solutions. With a Diploma in Computer Engineering and a Bachelor's degree in Information and Communication Technology, I have honed my skills in web development and bring a well-rounded perspective to any project. In my free time, I enjoy playing competitive FPS games and creating videos. I am excited to see where my passion for technology takes me and look forward to new challenges and opportunities.</p>
        </div>
        <div className='flex justify-center  mt-5 '>
        <a href='https://www.linkedin.com/in/iamnishantgaharwar/'><img src={linkedin} className='h-8 w-8 m-1' title='Linkedin' alt='Lindedin' /></a>
        <a href='https://twitter.com/iamnishant_G'><img src={twitter} className='h-8 w-8 m-1' title='Twitter' alt='Twitter'/></a>
        <a href='https://github.com/iamnishantgaharwar'><img src={github} className='h-8 w-8 m-1' title='Github' alt='GitHub' /></a>
        <a href='https://iamnishantgaharwar.wordpress.com/'><img src={website} className='h-8 w-8 m-1' title='Personal Website' alt='Website' /></a>
        </div>
        

    </>
  )
}

export default About