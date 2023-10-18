import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar(navigation) {
  return (
    <Disclosure as="nav" className="bg-white-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 rag:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center rag:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-rag p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Large screen Navbar */}
              <div className="flex flex-4 items-center justify-center rag:items-stretch rag:justify-center">
                <div className="hidden rag:ml-6 rag:block">
                  <div className="flex space-x-12">
                    {navigation.prop.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={'bg-white-800 text-black shadow-lg hover:bg-black hover:text-white block rounded-xl px-3 py-2 text-base font-medium'}
                      >
                      {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Screen navbar */}
          <Disclosure.Panel className="rag:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.prop.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={'bg-white-800 text-black shadow-sm hover:bg-black hover:text-white block rounded-sm px-3 py-2 text-base font-medium'}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
