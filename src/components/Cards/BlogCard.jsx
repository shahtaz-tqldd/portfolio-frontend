import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  const { _id, title, body, tags, img, date } = data;
  console.log(data);
  return (
    <Link to={`/blogs/${_id}`} className="rounded-xl md:p-4 p-0 hover:bg-slate-800 flex md:gap-6 gap-3 group tr">
      <div className="w-[30%]">
        <img src={img} className="md:h-36 h-20 w-full object-cover rounded-xl" />
      </div>
      <div className="w-[70%] flex flex-col justify-between">
        <div>
          <span className="text-xs opacity-70">
            {moment(date).format("DD MMMM YYYY")}
          </span>
          <h2 className="md:text-2xl text-md">{title}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="py-1 px-3 rounded-full text-xs bg-slate-800 group-hover:bg-slate-700 text-primary tr"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
