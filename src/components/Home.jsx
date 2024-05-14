import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/photo.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-[#232f0a]'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Web Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Entry level web developer full stack looking to break into the world
            of tech where I can share and improve my current set of skills.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, NodeJs, ExpressJs and Mongodb.
          </p>
          <div>
            <Link
              to='about'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-600 to-green-900 cursor-pointer'
            >
              About Me
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight size={25} className='ml-3' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={me}
            alt='my profile'
            className='rounded-2xl mx-auto w-2/3 md:w-fit mb-2'
          />
        </div>
      </div>
    </div>
  );
};
export default Home;