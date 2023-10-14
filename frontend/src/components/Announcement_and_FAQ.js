import { useState } from 'react';
import { Fragment } from 'react'
import FAQcard from './FAQ'
import Announcement from './Annocements';
import { Menu, Transition } from '@headlessui/react'
import {IoIosArrowDown} from 'react-icons/io'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ (prop) {
  const [opt,setopt] = useState("options")

    return (
        <>
          <div className='flex ms-10'>
            <div className='w-full lg:w-4/5'>              
              <div className='flex lg:ms-10 mr-10 mt-5' style={{justifyContent:"space-between"}} >
                <p className='text-3xl lg:text-4xl text-darkblue'>Announcements</p>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex border-none w-full justify-center gap-x-1.5 rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm   hover:bg-gray-50">
                      {opt}
                      <IoIosArrowDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={()=>setopt("Important")}
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Important
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={()=>setopt("Latest")}
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Latest
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={()=>setopt("Old")}
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Old
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <Announcement prop = {prop}/>
              <div className='w-full block lg:hidden '>
                <FAQcard prop = {prop} />
              </div>
            </div>
            <div className='w-2/5 hidden lg:block '>
              <FAQcard prop = {prop} />
            </div>
          </div>
        </>
    )
}

