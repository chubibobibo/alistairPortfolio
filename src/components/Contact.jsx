import React from "react";

import { toast } from "react-toastify";

//formspree
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjeyqlw");
  if (state.succeeded) {
    return (
      // <p className='font-bold text-lg'>
      //   Thanks for the message! I will get back to you as soon as possible.
      // </p>
      toast.success(
        "Thanks for the message! I will get back to you as soon as possible."
      )
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div
        name='contact'
        className='w-full h-screen bg-[#232f0a] flex justify-center items-center p-4'
      >
        <div className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>
              Contact
            </p>
            <p className='text-gray-300 py-4'>Send me a message</p>
          </div>
          <input
            className='bg-[#ccd6f6] p-2'
            type='text'
            placeholder='Name'
            name='name'
          />
          <ValidationError prefix='Name' field='name' errors={state.errors} />
          <input
            className='my-4 p-2 bg-[#ccd6f6]'
            type='email'
            placeholder='Email'
            name='email'
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
          <textarea
            className='bg-[#ccd6f6] p-2'
            name='message'
            rows='10'
            placeholder='Message'
          ></textarea>
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
          <button
            className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'
            type='submit'
            disabled={state.submitting}
          >
            Let's Collaborate
          </button>
        </div>
      </div>
    </form>
  );
};
export default Contact;
