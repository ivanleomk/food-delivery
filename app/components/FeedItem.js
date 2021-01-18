import React from "react";

const FeedItem = ({ update, time, last }) => {
  if (last) {
    return (
      <li>
        <div class="relative pb-8">
          <div class="relative flex space-x-3">
            <div>
              <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                <svg
                  class="h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
              <div>
                <p class="text-sm text-gray-500">{update}</p>
              </div>
              <div class="text-right text-sm whitespace-nowrap text-gray-500">
                <time datetime="2020-10-04">{time}</time>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li>
      <div class="relative pb-8">
        <span
          class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
              <svg
                class="h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
            <div>
              <p class="text-sm text-gray-500">{update}</p>
            </div>
            <div class="text-right text-sm whitespace-nowrap text-gray-500">
              <time datetime="2020-09-20">{time}</time>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FeedItem;
