import React, { useState } from "react";
import Header from "../app/components/Header";
import FoodCard from "../app/components/FoodCard";
import { Box, Center, Image } from "@chakra-ui/react";
import RestaurantCard from "../app/components/RestaurantCard";

const restaurants = [
  {
    id: "123",
    name: "Mala",
    tags: ["Spicy", "Chinese", "Asian"],
    location: "Finefoods",
  },
  {
    id: "123",
    name: "Noodles",
    tags: ["Noodles", "Chinese", "Asian"],
    location: "Finefoods",
  },
  {
    id: "123",
    name: "Noodles",
    tags: ["Noodles", "Chinese", "Asian"],
    location: "Finefoods",
  },
  {
    id: "123",
    name: "Noodles",
    tags: ["Noodles", "Chinese", "Asian"],
    location: "Finefoods",
  },
  {
    id: "123",
    name: "Noodles",
    tags: ["Noodles", "Chinese", "Asian"],
    location: "Finefoods",
  },
];

export default function Home(props) {
  return (
    <>
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="max-w-3xl mx-auto"></div>
        <h3 class=" text-4xl leading-8 font-extrabold mt-4 text-gray-700">
          Menu
        </h3>
        <p class="mt-4 text-lg text-gray-500">
          From UTown to your doorstep in just{" "}
          <span className="font-bold">30 minutes</span>.
        </p>

        {/* Categories */}
        <Center>
          <div class="max-w-xl w-full mt-4">
            <label for="search" class="sr-only">
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                class=" py-4 px-2 block w-full pl-10 pr-3  border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-md"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </Center>

        <h3 class=" text-2xl leading-8 font-extrabold text-gray-700 mt-6">
          Avaliable near you
        </h3>
        <ul className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2">
          {restaurants.map((item) => (
            <RestaurantCard item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}
