import React from "react";

const UserProfile = () => {
  return (
    <section aria-labelledby="profile-overview-title">
      <div class="rounded-lg bg-white overflow-hidden shadow">
        <div class="bg-white p-6">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="sm:flex sm:space-x-5">
              <div class="flex-shrink-0">
                <img
                  class="mx-auto h-20 w-20 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
              </div>
              <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p class="text-sm font-medium text-gray-600">Welcome back,</p>
                <p class="text-xl font-bold text-gray-900 sm:text-2xl">
                  Ivan Leo
                </p>
              </div>
            </div>
            <div class="mt-5 flex justify-center sm:mt-0">
              <a
                href="#"
                class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
