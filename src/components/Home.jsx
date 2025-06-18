import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/profilepic.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-[#232f0a]'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-start sm:justify-center h-full mt-48 sm:mt-5'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Web Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            An entry level web developer with experience in building personal
            projects using MongoDb, ExpressJs, ReactJs, Typescript, NodeJs,
            MySql.
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
        <div className='mb-48 sm:mb-30'>
          <img
            src={me}
            alt='my profile'
            className='rounded-2xl mx-auto w-2/3 md:w-fit mb-2 mt-20'
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
