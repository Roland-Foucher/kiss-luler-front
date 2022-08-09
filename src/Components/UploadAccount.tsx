import React from 'react'

export default function UploadAccount() {

    return (
        <div className="static text-white bg-gray-900">
            <div className="max-w-screen-xl px-2 py-10 mx-auto lg:items-center lg:flex">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="sm:block">
                        <label className="inline-block mb-2 text-gray-500">File Upload</label>
                        <div className="flex items-center justify-center w-full">
                            <label
                                className="flex flex-col w-full h-32 hover:bg-gray-100 hover:border-gray-300">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Changer votre photo de bannière</p>
                                </div>
                                <input type="file" className="opacity-0" />
                            </label>
                        </div>
                    </span>
                    <div className="absolute top-22 left-8 md:top-18 ml-2 w-64 text-center ">
                        <div className="w-22">
                            <img className="w-32 h-32 rounded-full absolute md:h-40 md:w-40 " src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <div className="w-32 h-32 md:h-40 md:w-40 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                                <img className="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

