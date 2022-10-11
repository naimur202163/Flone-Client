import React from 'react'

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

    </div>
  )
}
