import React from "react";

const MobileDropdown = ({ isOpen, setIsOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div class="md:hidden">
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5 sm:px-6">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">Tom Cook</div>
            <div class="text-sm font-medium text-gray-400">tom@example.com</div>
          </div>
        </div>
        <div class="mt-3 px-2 space-y-1 sm:px-3">
          <a
            href="/orders"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          >
            View Orders
          </a>
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          >
            Settings
          </a>
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileDropdown;
