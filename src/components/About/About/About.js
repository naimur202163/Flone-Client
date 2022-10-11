import React from 'react';
import { BsArrowRight } from 'react-icons/bs'


export default function About() {
  return (
    <div>

      <div className='flex justify-center py-[2rem] bg-zinc-100 font-semibold'>
        <p className='text-gray cursor-pointer'>HOME</p>
        <span className='px-[0.7rem]'>/</span>
        <p>ABOUT US</p>
      </div>

      <div className='text-center px-[1.3rem] md:px-[3.5rem] lg:px-[20rem] 
      py-[2rem] md:py-[4rem] lg:py-[6rem]'>
        <p className='font-semibold tracking-wide text-gray pb-2'>Who Are We</p>
        <h1 className='text-[2.2rem] font-medium pb-3 text-zinc-700 tracking-wide	'>Welcome To Flone</h1>
        <div className='mx-auto'>
          <p className='inline-block h-[3px] w-[4rem] bg-black my-2'></p>
        </div>
        <p className='py-4 text-gray text-zinc-600 text-[1.1rem] leading-loose '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure</p>
      </div>





      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-[2rem]
      gap-y-[2rem] px-[1.3rem] md:px-[3rem] lg:px-[5rem] '>

        <div className="bg-gradient-to-tr overflow-hidden relative h-[14rem]">
          <img
            className="transition duration-1000 hover:scale-125 w-full absolute mix-blend-overlay h-ull bg-center object-cover"
            src="https://i.ibb.co/V2DVhTR/banner-3.jpg"
            alt=""
          />
          <div className='p-[2rem]'>
            <div>
              <h3 className='text-3xl font-medium text-[#4f383b] tracking-wide leading-relaxed'>Sunglass</h3>
              <p className='text-[#212121] tracking-wide'>Starting at <span className='text-[#4f383b] text-[1.2rem] font-medium'>$99.00</span></p>

              <p className='mt-[3rem] text-[#4f383b] '><BsArrowRight /></p>

            </div>
          </div>
        </div>



        <div className="bg-gradient-to-tr overflow-hidden relative h-[14rem]">
          <img
            className="transition duration-1000 hover:scale-125 w-full absolute mix-blend-overlay h-ull bg-center object-cover"
            src="https://i.ibb.co/ygGf6K6/banner-2.jpg"
            alt=""
          />
          <div className='p-[2rem]'>
            <div>
              <h3 className='text-3xl font-medium text-[#4f383b] tracking-wide leading-relaxed'>Plo Bag</h3>
              <p className='text-[#212121] tracking-wide'>Starting at <span className='text-[#4f383b] text-[1.2rem] font-medium'>$79.00</span></p>
              <p className='mt-[3rem] text-[#4f383b] '><BsArrowRight /></p>
            </div>
          </div>
        </div>



        <div className="bg-gradient-to-tr overflow-hidden relative h-[14rem]">
          <img
            className="transition duration-1000 hover:scale-125 w-full absolute mix-blend-overlay h-ull bg-center object-cover"
            src="https://i.ibb.co/mH9xcM5/banner-1.jpg"
            alt=""
          />
          <div className='p-[2rem]'>
            <div>
              <h3 className='text-3xl font-medium text-[#4f383b] tracking-wide leading-relaxed'>Watches</h3>
              <p className='text-[#212121] tracking-wide'>Starting at <span className='text-[#4f383b] text-[1.2rem] font-medium'>$29.00</span></p>
              <p className='mt-[3rem] text-[#4f383b] '><BsArrowRight /></p>
            </div>
          </div>
        </div>




      </div>

    </div>
  )
}