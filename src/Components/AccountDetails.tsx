import React, { CSSProperties, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { authApi, useAddPictureUserMutation } from '../App/API/authAPI';
import { scrollToTop, useAppSelector } from "../App/hooks";





export default function AccountDetails() {

  const formData = new FormData();

  const dispatch = useDispatch();

  const [postPicture] = useAddPictureUserMutation();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    //  open file input box on click of other element
    inputRef.current?.click();
  };

  const handleFileChange = async (event: any) => {
    const imageFile = event.target.files && event.target.files[0];
    if (!imageFile) {
      return;
    }
    formData.append("file", imageFile, imageFile.name)
    try {
      await postPicture(formData).unwrap();
      dispatch(authApi.util.invalidateTags(["User"]));  // refresh le projet

    } catch (e) {
      console.error(e);
    }
  }


  return (
    <>
      <div className="flex flex-col">
        <div>
          {/**photo de couverture */}
          <div className="static  brightness-50 hover:brightness-100 hover:duration-700  text-white bg-[url('/public/img/headphone.jpg')]  bg-cover   bg-center  bg-no-repeat">
            <div className="lg:text-7xl lg:bg-white/40 p-3 lg:absolute lg:bottom-1/3 lg:left-2/3  text-white  ">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-redBull to-yellowBull tracking-widest font-newFont">
                {user?.firstName + " " + user?.lastName}
              </span>
            </div>

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


                {/**photo de profil */}
                <div className="absolute top-22 left-8 md:top-18 ml-2 w-64 text-center " onClick={handleClick}>
                  <input
                    style={{ display: 'none' }}
                    ref={inputRef}
                    type="file"
                    onChange={handleFileChange}
                  />
                  {user?.photo ? <div className="w-22">
                    <img className="w-32 h-32 rounded-full absolute md:h-40 md:w-40 object-cover" src={user.photo} alt="" />
                    <div className="w-32 h-32 md:h-40 md:w-40 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                      <img className="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
                    </div>
                  </div> : <div className="w-22">
                    <img className="w-32 h-32 rounded-full absolute md:h-40 md:w-40 object-cover" src={process.env.PUBLIC_URL + '/img/tourterelle.jpg'} alt="" />
                    <div className="w-32 h-32 md:h-40 md:w-40 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                      <img onClick={() => navigate('/profil/picture')} className="hidden group-hover:block w-12" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>











      {/* card user */}
      <section className='mx-28 mt-36 '>
        <div
          className="relative block p-10 m-10 rounded-lg border"

        >
          <span
            className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-gray-600/80 via-orange-400/60 to-red-600/60"
          ></span>


          <div className="justify-between sm:flex my-8 ">
            <div>
              <h5 className="text-4xl font-medium text-gray-900 font-newFont">
                {user?.firstName + ' ' + user?.lastName}
              </h5>
              <p className="mt-1 text-sm font-light text-gray-400">Inscrit depuis le : {user?.subscribeDate} </p>
            </div>

            <div className=" absolute  top-2 md:right-3  ">
              <button
                className='p-2 border-1 border-yellowBull rounded-md items-center inline-flex font-light hover:bg-yellowBull/20'
                onClick={() => { navigate('/account/profil'); scrollToTop() }}>Modifier
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 ml-2 h-4 ml-2" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </button>


            </div>
          </div>


          <article className='lg:flex lg:justify-evenly  flex-wrap '>
            <dl className="flex mt-6  ">
              <div className="flex flex-col-reverse">
                <dt className="text-lg font-medium text-gray-600 font-newFont"> Viticulteur </dt>
                <dd className="text-xs font-medium text-gray-500">Job</dd>
              </div>

              <div className="flex flex-col-reverse ml-3 sm:ml-6">
                <dt className="text-lg font-medium text-gray-600 font-newFont"> {user?.birthdate} </dt>
                <dd className="text-xs font-medium text-gray-500">Dâte de naissance</dd>
              </div>
            </dl>

            <dl className="flex mt-6 ">
              <div className="flex flex-col-reverse">
                <dt className="text-lg font-medium text-gray-600 font-newFont"> {user?.role}</dt>
                <dd className="text-xs font-medium text-gray-500">Rôle</dd>
              </div>

              <div className="flex flex-col-reverse ml-3 lg:ml-6">
                <dt className="text-lg font-medium text-gray-600 font-newFont"> {user?.email} </dt>
                <dd className="text-xs font-medium text-gray-500">Email</dd>
              </div>
            </dl>
            <div>

            </div>
          </article>

        </div>

      </section>

      {/* fin card user */}
    </>
  )
}

