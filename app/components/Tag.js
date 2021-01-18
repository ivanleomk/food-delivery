import React from "react";

const Tag = ({ tag }) => {
  return (
    <div class="inline-flex items-baseline px-2.5 py-0.5 my-2 mr-2 rounded-full text-sm font-medium bg-green-100 text-green-800 ">
      {tag}
    </div>
  );
};

export default Tag;
