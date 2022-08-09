import React from 'react';
import { useAppSelector } from "../App/hooks";
import UploadAccount from "./UploadAccount";


export default function AccountDetails() {
  const user = useAppSelector(state => state.auth.user);

  return (
    <>
      <div className="flex flex-col">
        <div>
          <UploadAccount />
        </div>
        <div className="mt-28 mb:mt-48 lg:mt-50 ">
          <header className="font-light">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45 text-yellowBull" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
              <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
            </svg>
            <h2 className="ml-2 font-newFont text-xl ">Profil</h2>
          </header>
        </div>
      </div>

      {/* card user */}
      <div className=" p-8">
        <div className="grid grid-cols-1 md:grid-cols-5 mx-auto">
          <div className='p-4 sm:col-span-2 '>
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
              </div>
              <div className="w-full text-left">
                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                  <div className="p-3 text-left">
                    <span className="text-m font-bold block uppercase tracking-wide text-slate-500">projet suivi</span>
                    <span className="text-sm text-slate-400">{user?.email}</span>
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-m font-bold block uppercase tracking-wide text-slate-500">contribution</span>
                    <span className="text-sm text-slate-400"> {user?.job}</span>
                  </div>

                  <div className="p-3 text-center">
                    <span className="text-m font-bold block uppercase tracking-wide text-slate-500">financement</span>
                    <span className="text-sm text-slate-400">{user?.pseudo}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-2">
              <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{user?.firstName + "  "}{user?.lastName}</h3>
              <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>job:{user?.job}
              </div>
            </div>
            <div className="mt-6 py-6 border-t border-slate-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                  <p className="font-light leading-relaxed text-slate-600 mb-4">présentation?</p>
                  <a href="javascript:;" className="font-normal text-slate-700 hover:text-slate-400">Modifier mon profil</a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 col-span-2">
          </div>
        </div>
      </div>
      {/* fin card user */}
    </>
  )
};
