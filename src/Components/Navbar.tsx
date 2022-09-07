
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import ModalLogin from './ModalLogin'
import { useAppDispatch, useAppSelector } from '../App/hooks'
import { logout } from '../App/API/auth-slice'
import { useNavigate } from 'react-router'


const navigation = [
  { name: 'Mulule', href: '#', current: true },

]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  let user = useAppSelector(state => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <Disclosure as="nav" className="bg-gray-600/20 border-b border-red-400">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">

                    <div className="block lg:hidden h-8 w-auto">
                      <div className="flex items-center -space-x-8 hover:space-x-1">
                        <button
                          className="z-10 block p-4 text-green-700 transition-all bg-[#f25c54] border-red-400 border-2  rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
                          type="button"
                        >
                          <p className='w-4 h-4'></p>
                        </button>

                        <button
                          className="z-20 block p-4 text-blue-700 transition-all bg-[#f4845f] border-orange-400 border-2  rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                          type="button"
                        >
                          <p className='w-4 h-4'></p>
                        </button>

                        <button
                          className="z-30 block p-4 text-red-700 transition-all bg-[#f7b267] border-yellow-300/40 border-2 rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                          type="button"
                        >
                          <p className='w-4 h-4'></p>
                        </button>
                      </div>
                    </div>

                    <div className="hidden lg:block h-8 w-auto">
                      <div className="flex items-center -space-x-8 hover:space-x-1">
                        <button
                          className="z-10 block p-4 text-green-700 transition-all bg-[#f25c54] border-red-400 border-2  rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
                          type="button"
                        >
                          <p className='w-4 h-4'></p>
                        </button>

                        <button
                          className="z-20 block p-4 text-blue-700 transition-all bg-[#f4845f] border-orange-400 border-2  rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                          type="button"
                        >
                          <p className='w-4 h-4'></p>
                        </button>

                        <button
                          className="z-30 block p-4 text-red-700 transition-all bg-[#f7b267] border-yellow-300/40 border-2 rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                          type="button"
                        >
                          <p className='w-4 h-4'></p>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:mt-4">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={'/'}
                          className={classNames(
                            item.current ? 'bg-transparent text-orange-400 text-base font-medium hover:text-orange-600' : 'text-red-300 hover:bg-red-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>



                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                  {user ? <Menu as="div" className="ml-3 z-40 relative">
                    <div>
                      <Menu.Button className="p-2   text-white rounded-md  flex text-lg hover:bg-gray-600/30  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellowBull/30 focus:ring-orangeBull/20">
                        <span className="sr-only">Open user menu</span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="text-white/70 w-6 h-6 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-redBull to-yellowBull tracking-widest font-newFont font-bold">
                          {user?.firstName + " " + user?.lastName}
                        </span>


                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/account"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Mon Compte
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => { dispatch(logout()); navigate('/') }}
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Déconnexion
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> : <ModalLogin />}

                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
