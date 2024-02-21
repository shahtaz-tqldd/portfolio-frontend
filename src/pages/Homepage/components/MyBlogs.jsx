import React from "react";
import SectionHead from "../../../ui/Heading/SectionHead";
import { useGetBlogsQuery } from "../../../feature/blogs/blogsApiSlice";
import BlogCard from "../../../components/Cards/BlogCard";

const MyBlogs = () => {
  const { data, isLoading, isSuccess } = useGetBlogsQuery(
    {},
    { refetchOnReconnect: true }
  );
  return (
    <div id="blogs" className="pt-12 mt-24">
      <SectionHead
        title={"Blogs and Aricles"}
        text={"Things I tried to share"}
        icon={"lyrrgrsl"}
      />
      <div className="flex flex-col gap-5">
        {data?.map((blog, index) => (
          <BlogCard key={index} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
