import { Menu, Transition } from "@headlessui/react";
import { Link, Outlet } from "@tanstack/react-router";
import { Fragment } from "react";
import { classNames } from "../utils";

export const AppLayout = () => {
  return (
    <div>
      <header className="flex items-stretch bg-slate-100 h-16 px-20">
        <nav className="flex items-center">
          <Link to="/" className="font-semibold text-xl mr-10">
            HR Go
          </Link>

          <Link
            className="h-full hover:bg-slate-200 flex items-center px-4"
            to="/"
          >
            Home
          </Link>
          <Link
            className="h-full hover:bg-slate-200 flex items-center px-4"
            to="/employee"
          >
            Employee
          </Link>
          <Link
            className="h-full hover:bg-slate-200 flex items-center px-4"
            to="/hiring"
          >
            Hiring
          </Link>
          <Link
            className="h-full hover:bg-slate-200 flex items-center px-4"
            to="/report"
          >
            Report
          </Link>
        </nav>

        <div className="flex-1"></div>

        <div className="relative rounded-full w-64 h-full flex items-center px-4 py-2 pl-8 focus-within:shadow-outline">
          <svg
            className="absolute left-12 fill-current text-gray-500 h-4 w-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-1 pl-10 pr-4 bg-white rounded-full focus:outline-none focus:shadow-outline"
          />
        </div>
        <NavAvatar />
      </header>
      <Outlet />
    </div>
  );
};

function NavAvatar() {
  return (
    <Menu as="div" className="relative inline-block text-left self-center">
      <div>
        <Menu.Button className="inline-flex self-center items-center justify-center text-sm w-10 h-10 rounded-full border border-slate-200 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50">
          HR
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="account"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Account settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
