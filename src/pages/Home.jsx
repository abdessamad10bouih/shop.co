import React from 'react';
import NavBar from '../components/navBar';
import heroImg from '../assets/hero-img.png';
import spark from '../assets/Vector.png'

export default function Home(){
  return (
    <>
        <header className='w-full h-screen md:flex md:flex-col'>
              <NavBar />
              <section className='w-full h-full bg-[#F2F0F1] flex flex-col'>
                <div className='w-full h-full flex justify-center p-4 items-center'>
                    <div className='w-full h-full'>
                          <h1 className='text-4xl font-black'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                          <p className='mt-2'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                          <div href="" className='w-full h-14 bg-black mt-2 rounded-2xl flex items-center justify-center'><a href="" className='text-clr'>Shop Now</a></div>
                    </div>
                </div>
                <div className='w-full h-full flex justify-center relative items-center'>
                    <img src={spark} className='absolute right-2 bottom-72' alt="" />
                    <img src={spark} className='absolute left-4 w-14 bottom-52' alt="" />
                    <img src={heroImg} className='w-full h-full object-cover' alt="" />
                </div>
              </section>
        </header>    
    </>
  )
}


