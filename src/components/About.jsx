import React from "react";

const About = () => {
  return (
    <div
      name='about'
      id='about'
      className='w-full h-screen bg-[#232f0a] text-gray-300 '
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className=' py-16 rounded-md bg-[#606653] flex flex-col justify-center items-center self-center content-center w-4/6 h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4 content-startd'>
            <div className='mt-10 sm:text-right pb-10 pl-4 content-center origin-top '>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 self-center'>
                About
              </p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-2xl sm:text-right sm:text-5xl sm:mb-48 font-bold'>
              <p>
                Hi. I'm Alistair Abao, nice to meet you. Please take a look
                around.
              </p>
            </div>
            <div>
              <p className=' text-md sm:text-3xl'>
                Entry level web developer looking to break into the world of
                tech. I love to work on web applications using technologies like
                React, Tailwind, Typescript, NodeJs, ExpressJs, MySQL and
                Mongodb.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
