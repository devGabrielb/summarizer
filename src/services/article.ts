import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

  export interface Article {
    url: string
    summary: string
}



export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
        method: "GET",
        prepareHeaders: (headers) => {
            
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
    
            return headers;
        }
      }),
    endpoints: (builder) => ({
        getSummary: builder.query<Article, string>({
            
            query: (articleUrl: string) => `/summarize?url=${encodeURI(articleUrl)}&length=3`,
        })
    })
});


export const {useLazyGetSummaryQuery} = articleApi;