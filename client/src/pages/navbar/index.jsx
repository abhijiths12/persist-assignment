import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Ongoing Startupathon', href: '#', current: false },
  { name: 'Completed Startupathon', href: '#', current: false },
  { name: 'Startupathon Guide', href: '#', current: false },
  { name: 'How to Win', href: '#', current: false },
  { name: 'Mentor Network', href: '#', current: false },
  { name: 'Apply For Fellowship', href: '#', current: true },

  

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[black]/80 sticky top-0 z-50">
      <div className="max-w-7xl sm:px-6">
        <div className="relative flex h-25 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex sm:hidden md:block lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset bg-[#7A56D6] rounded-[50%] w-[50px] h-[50px] mx-5 my-5">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start md:justify-center">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src='https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg'
                className="h-8 w-auto"
              />
            </div>

          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
            </button> */}

            {/* Profile dropdown */}
            <Menu as="div" className="flex justify-end ml-5">
              {/* <div> */}
                {/* <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  /></MenuButton> */}

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex justify-center items-end">
                    
                    {navigation.map((item) => (
                      <MenuButton className="relative flex focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
       
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'lg:block bg-gray-900 px-3 py-2 text-md font-medium applyforfellowship md:hidden lg:block' : 'text-gray-300 hover:text-[#7A56D6] md:hidden lg:block',
                          'rounded-md px-3 py-2 text-[17px]',
                        )}
                      >
                        {item.name}
                      </a>
                      </MenuButton>
                    ))}

                    {/* <a href='#' className='bg-gray-900 rounded-md px-3 py-2 text-md font-medium applyforfellowship'>Apply for Fellowship</a> */}

                  </div>

                  </div>
                

                {/* </MenuButton> */}
              {/* </div> */}
              
            </Menu> 
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden md:block">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-[#7A56D6]',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}













