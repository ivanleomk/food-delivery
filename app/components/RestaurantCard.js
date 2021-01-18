import React from "react";
import Tag from "./Tag";

const RestaurantCard = ({ item }) => {
  const { name, location, tags } = item;
  return (
    <div
      class="bg-white overflow-hidden shadow rounded-lg col-span-1"
      style={{ maxWidth: "500px" }}
    >
      <div class="px-4 py-5 sm:p-6">
        <dd class="mt-1 text-3xl font-semibold text-gray-900">{name}</dd>
        <dt class="text-sm font-medium text-gray-500 truncate">{location}</dt>

        {tags.map((item) => (
          <Tag tag={item} />
        ))}
        <div class="text-md my-4">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            {" "}
            See Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
