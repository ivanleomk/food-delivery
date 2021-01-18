import { Link } from "@chakra-ui/react";
import React, { useState } from "react";
import LinkButton from "./LinkButton";

const MobileTopbar = ({ isOpen, toggleOpen }) => {
  const mobileMenuStyling = isOpen
    ? "z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top lg:hidden transition ease-in duration-75 transform opacity-100 scale-100"
    : "transition ease-in duration-75 opacity-0 scale-0 hidden";

  return (
    <div class={mobileMenuStyling}>
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
        <div class="pt-3 pb-2">
          <div class="flex items-center justify-between px-4">
            <div class="text-2xl font-medium text-gray-900 py-5 flex-shrink-0 lg:static">
              Got Lah!
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                onClick={() => toggleOpen(!isOpen)}
              >
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <LinkButton link="/" text="Home" />
            <LinkButton link="/orders" text="Orders" />
            <LinkButton link="/menu" text="Menu" />
          </div>
        </div>
        <div class="pt-4 pb-2">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
            </div>
            <div class="ml-3 min-w-0 flex-1">
              <div class="text-base font-medium text-gray-800 truncate">
                Ivan Leo
              </div>
              <div class="text-sm font-medium text-gray-500 truncate">
                Logged in via Facebook
              </div>
            </div>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTopbar;
