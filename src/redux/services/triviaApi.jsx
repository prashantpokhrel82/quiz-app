import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const triviaApi = createApi({
  reducerPath: "triviaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://the-trivia-api.com/api/"
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({ query: () => "/categories" }),
    getRandomQuestions: builder.query({
      query: ({ categories, difficulty, limit }) =>
        {
            let tempQuery = `/questions?`;
            if(categories){
                tempQuery+=`categories=${categories}&`
            }
            if(difficulty){
                tempQuery+=`difficulty=${difficulty}&`
            }
            if(limit){
                tempQuery+=`limit=${limit}&`
            }
            return tempQuery;
        },
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetRandomQuestionsQuery } = triviaApi;
