import React from "react";

const About = () => {
  return (
    <div
      name='about'
      id='about'
      className='w-full h-screen bg-[#232f0a] text-gray-300 '
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className=' py-16 rounded-md bg-[#606653] flex flex-col justify-center items-start self-center w-4/6 h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4 content-startd'>
            <div className='sm:text-right pb-10 pl-4 content-center origin-top'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 self-center'>
                About
              </p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
            <div className='sm:text-right sm:text-4xl font-bold'>
              <p>
                Hi. I'm Alistair Abao, nice to meet you. Please take a look
                around.
              </p>
            </div>
            <div>
              <p>
                A web developer with experience in building personal projects
                using MongoDb, ExpressJs, ReactJs, NodeJs, MySql.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
