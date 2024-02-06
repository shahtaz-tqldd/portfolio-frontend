import { apiSlice } from "../api/apiSlice";

export const infoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: () => {
        return {
          url: `/skills`,
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

export const { useGetSkillsQuery } = infoApiSlice;
