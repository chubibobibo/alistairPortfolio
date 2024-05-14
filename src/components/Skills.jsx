import React from "react";

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#232f0a] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <div className=' w-full flex justify-center items-center flex-col mb-7 mt-20 '>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center mt-20 '>
              Skills
            </p>
            <p className='py-4 text-xl'>
              Here's a list of technologies I've worked with. I am currently
              learning Python for web development and automation.
            </p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <p className='my-4'>TAILWIND CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <p className='my-4'>EXPRESS JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <p className='my-4'>MONGO DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <p className='my-4'>MYSQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
