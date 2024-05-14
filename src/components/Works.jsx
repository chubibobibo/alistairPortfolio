import React from "react";
import cooktionary from "../assets/cooktionary.png";
import jobtracker from "../assets/jobtracker.png";
import reservation from "../assets/reservation.png";
import ecommerce from "../assets/ecommerce.png";
import aperture from "../assets/aperture.png";
import dice from "../assets/dice.png";

import code from "../assets/code2.png";

const Works = () => {
  return (
    <div
      name='projects'
      className='w-full md:h-screen text-gray-300 bg-[#232f0a]'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500 mt-20'>
            PROJECTS
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}

          <div
            style={{ backgroundImage: `url(${cooktionary})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Cooktionary App
              </span>
              <p className='text-center'>
                A recipe sharing app developed using MongoDb, ExpressJs,
                ReactJs, NodeJs
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='https://cooktionaryapp.onrender.com
'
                >
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/chubibobibo/CooktionaryApp'>
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${jobtracker})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                JobTracker App
              </span>
              <p className='text-center'>
                I created this app to keep track of all my current job
                applications as a web developer. Developed using MERN stack
              </p>
              <div className='pt-8 text-center'>
                <a href='https://jobtrackerv2.onrender.com'>
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/chubibobibo/JobTracker
'
                >
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${reservation})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Restaurant Reservation App
              </span>
              <p className='text-center'>
                Allows users to make their reservations (limited tables) and
                consult the services being offered by the restaurant. Developed
                using MongoDb, ExpressJs, EJS, MYSQL
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='https://newquaiantique.onrender.com/main
'
                >
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/chubibobibo/resto_
quai_antique
'
                >
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ecommerce})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                E-Commerce Site
              </span>
              <p className='text-center'>
                E-commerce camera equipment shop that implements persistent data
                on client's cart, admin account manages products to be added and
                modified. Developed using MERN stack
              </p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/chubibobibo/CameraEshop'>
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/chubibobibo/CameraEshop'>
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${aperture})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Aperture App
              </span>
              <p className='text-center'>
                Photo sharing application that allows users to upload and
                interact with other user's photos (authorization). Developed
                using Javascript, EJS, HTML/CSS
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='https://aperturev2.onrender.com
'
                >
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/chubibobibo/apertureV2
'
                >
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${dice})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Dice Game/Pig Game
              </span>
              <p className='text-center'>
                My own version of the popular pig dice game. Developed using
                Javascript and html/css
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='https://project-dice-game.vercel.app
'
                >
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href=' https://github.com/chubibobibo/projectDiceGame'>
                  <button className='text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
