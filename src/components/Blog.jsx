import React from "react";

import { blog } from "./../data/Blog";
import CardBlog from "./CardBlog";

const Blog = () => {
  return (
    <div className="w-full px-8 py-10">
      <h1 className="text-center text-lg md:text-2xl font-bold">
        Our Best Blog?
      </h1>
      <p className="text-center text-sm md:text-base text-gray-500 font-medium">
        From historical cities to natural specteculars.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-[1000px] mx-auto">
        {blog.map((item) => {
          return <CardBlog data={item} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
