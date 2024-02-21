import { apiSlice } from "../api/apiSlice";

export const projectApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyProjects: builder.query({
      query: () => {
        return {
          url: `/projects`,
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      providesTags: ["skills"],
    }),
  }),
});

export const { useGetMyProjectsQuery } = projectApiSlice;
