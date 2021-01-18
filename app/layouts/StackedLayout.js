import React from "react";
import CardGrid from "../components/CardGrid";
import Header from "../components/Header";
import UserProfile from "../components/UserCard";

const StackedLayout = (props) => {
  return (
    <div class="min-h-screen ">
      <Header />

      <main class="-mt-24 pb-8">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            <div class="grid grid-cols-1 gap-4 lg:col-span-2">
              <UserProfile />

              {/* <CardGrid /> */}
            </div>

            <div class="grid grid-cols-1 gap-4">
              {/* <section aria-labelledby="recent-hires-title">
                <div class="rounded-lg bg-white overflow-hidden shadow">
                  <div class="p-6">
                    <h2
                      class="text-base font-medium text-gray-900"
                      id="recent-hires-title"
                    >
                      Recent Purchases
                    </h2>
                    <div class="flow-root mt-6">
                      <ul class="-my-5 divide-y divide-gray-200">
                        <li class="py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt=""
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Leonard Krasner
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                @leonardkrasner
                              </p>
                            </div>
                            <div>
                              <a
                                href="#"
                                class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                              >
                                View
                              </a>
                            </div>
                          </div>
                        </li>

                        <li class="py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt=""
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Floyd Miles
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                @floydmiles
                              </p>
                            </div>
                            <div>
                              <a
                                href="#"
                                class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                              >
                                View
                              </a>
                            </div>
                          </div>
                        </li>

                        <li class="py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt=""
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Emily Selman
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                @emilyselman
                              </p>
                            </div>
                            <div>
                              <a
                                href="#"
                                class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                              >
                                View
                              </a>
                            </div>
                          </div>
                        </li>

                        <li class="py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt=""
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Kristin Watson
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                @kristinwatson
                              </p>
                            </div>
                            <div>
                              <a
                                href="#"
                                class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                              >
                                View
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-6">
                      <a
                        href="#"
                        class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              </section> */}
            </div>
          </div>
        </div>
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {props.children}
        </div>
      </main>
      <footer>
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
            <span class="block sm:inline">&copy; 2021 Got Lah Inc.</span>{" "}
            <span class="block sm:inline">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StackedLayout;
