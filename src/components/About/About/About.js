import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { FiShoppingBag } from 'react-icons/fi'
import { RiCupLine, RiLightbulbLine } from 'react-icons/ri'
import { BsEmojiSmile } from 'react-icons/bs'
import CountUp from 'react-countup';
import AboutSlider from '../AboutSlider/AboutSlider';



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





      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[2rem]
      gap-y-[1rem] px-[1.3rem] md:px-[3rem] lg:px-[5rem]'>

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

              <div>
                <p className='mt-[3rem] text-[#4f383b]'><BsArrowRight /></p>
              </div>

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



      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[2rem]
      gap-y-[1rem] px-[1.3rem] md:px-[3rem] lg:px-[5rem] my-[4.8rem]'>

        <div>
          <h1 className='text-2xl font-medium text-[#403d3d] pb-[1.2rem]'>Our Vision</h1>
          <p className='leading-relaxed text-[#2a2a2a]'>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
        </div>
        <div>
          <h1 className='text-2xl font-medium text-[#403d3d] pb-[1.2rem]'>Our Mission</h1>
          <p className='leading-relaxed text-[#2a2a2a]'>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth</p>
        </div>
        <div>
          <h1 className='text-2xl font-medium text-[#403d3d] pb-[1.2rem]'>Our Goal</h1>
          <p className='leading-relaxed text-[#2a2a2a]'>Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth</p>
        </div>
      </div>




      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[2rem]
      gap-y-[1rem] px-[1.3rem] md:px-[3rem] lg:px-[5rem] my-[4.8rem] bg-slate-100 text-center'>

        <div className='py-[5rem] mx-auto'>
          <p className='text-5xl text-[#3a3838] pl-[3rem]'><FiShoppingBag /></p>
          <h1 className='text-[#A749FF] text-4xl font-bold py-[1rem] tracking-wide'><CountUp start={10} end={360} /></h1>
          <h4 className='text-[#222121] text-2xl font-medium'>Project Done</h4>
        </div>

        <div className='py-[5rem] mx-auto'>
          <p className='text-5xl text-[#3a3838] pl-[3.5rem]'><RiCupLine /></p>
          <h1 className='text-[#A749FF] text-4xl font-bold py-[1rem] tracking-wide'><CountUp start={10} end={690} /></h1>
          <h4 className='text-[#222121] text-2xl font-medium'>Cups Of Coffee</h4>
        </div>

        <div className='py-[5rem] mx-auto'>
          <p className='text-5xl text-[#3a3838] pl-[2rem]'><RiLightbulbLine /></p>
          <h1 className='text-[#A749FF] text-4xl font-bold py-[1rem] tracking-wide'><CountUp start={10} end={100} /></h1>
          <h4 className='text-[#222121] text-2xl font-medium'>Branding</h4>
        </div>

        <div className='py-[5rem] mx-auto'>
          <p className='text-5xl text-[#3a3838] pl-[3rem]'><BsEmojiSmile /></p>
          <h1 className='text-[#A749FF] text-4xl font-bold py-[1rem] tracking-wide'><CountUp start={10} end={420} /></h1>
          <h4 className='text-[#222121] text-2xl font-medium'>Happy Clients</h4>
        </div>

      </div>




      <div className='text-center px-[1.3rem] md:px-[3.5rem] lg:px-[20rem] 
      py-[2rem] md:py-[4rem] lg:py-[2rem]'>
        <h1 className='text-3xl font-semibold leading-loose'>Team Members</h1>
        <div className='mx-auto'>
          <p className='inline-block h-[2px] w-[5rem] bg-black my-2'></p>
        </div>
        <p className='leading-loose font-medium text-[#454444] tracking-wide'>Lorem ipsum dolor sit amet conse ctetu.</p>
      </div>





      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[2rem]
      gap-y-[1rem] px-[1.3rem] md:px-[3rem] lg:px-[5rem] my-[4.8rem] text-center'>

        <div className='bg-slate-100'>
          <img className='w-full' src="https://i.ibb.co/52ZjS4s/team-4.jpg" alt="" />
          <div className='p-[1rem]'>
            <h3 className='text-[1.3rem] font-semibold leading-loose'>Mr.Peter Pan</h3>
            <p className='italic'>Developer</p>
          </div>
        </div>

        <div className='bg-slate-100'>
          <img className='w-full' src="https://i.ibb.co/qFzwVC3/team-3.jpg" alt="" />
          <div className='p-[1rem]'>
            <h3 className='text-[1.3rem] font-semibold leading-loose'>Mr.Mike Banding</h3>
            <p className='italic'>Manager</p>
          </div>
        </div>

        <div className='bg-slate-100'>
          <img className='w-full' src="https://i.ibb.co/gyWRmCH/team-2.jpg" alt="" />
          <div className='p-[1rem]'>
            <h3 className='text-[1.3rem] font-semibold leading-loose'>Ms.Sophia</h3>
            <p className='italic'>Designer</p>
          </div>
        </div>

        <div className='bg-slate-100'>
          <img className='w-full' src="https://i.ibb.co/sKDNk6z/team-1.jpg" alt="" />
          <div className='p-[1rem]'>
            <h3 className='text-[1.3rem] font-semibold leading-loose'>Mr.John Lee</h3>
            <p className='italic'>Chairman</p>
          </div>
        </div>

      </div>



      <AboutSlider />



    </div>
  )
}