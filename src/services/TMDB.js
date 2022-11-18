import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/550?api_key=172436804d4091688aa4082df93414c9
const page = 1;
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    // Get Movies By Type
    getMovies: builder.query({
      query: ([genreIdOrCategoryName, page]) => {
        if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {

        }
        if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          
        }
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
      } 
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
