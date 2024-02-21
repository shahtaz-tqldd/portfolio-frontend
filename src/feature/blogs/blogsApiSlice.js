import { apiSlice } from "../api/apiSlice";

export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => {
        return {
          url: `/blogs`,
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      providesTags: ["blogs"],
    }),
  }),
});

export const { useGetBlogsQuery } = blogsApiSlice;
