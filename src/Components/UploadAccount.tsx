import React from 'react'

export default function UploadAccount() {

  return (
    <div className="static brightness-50 hover:brightness-100 hover:duration-700  text-white bg-[url('/public/img/headphone.jpg')]  bg-cover  bg-center  bg-no-repeat">
      <div className="max-w-screen-xl px-2 py-10 mx-auto lg:items-center lg:flex">
        <div className="max-w-3xl mx-auto text-center">
          <span className="sm:block">
            <label className="inline-block mb-2 text-gray-500"></label>
            <div className="flex items-center justify-center w-full ">
              <label
                className="flex flex-col w-full h-60 hover:bg-gray-100 hover:border-gray-300">


              </label>
            </div>
          </span>
          <div className="absolute top-22 left-8 md:top-18 ml-2 w-64 text-center ">
            <div className="w-22">
              <img className="w-32 h-32 rounded-full absolute md:h-40 md:w-40 " src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
              <div className="w-32 h-32 md:h-40 md:w-40 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                <img className="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="upload image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

