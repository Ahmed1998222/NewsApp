import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENetworkApp} from '../utils/EApp';
import {  INews } from '../types';

export const newsService = createApi({
  reducerPath: 'newsService',
  baseQuery: fetchBaseQuery({
    baseUrl: ENetworkApp.BASE_URL,
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${ENetworkApp.Token}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    getNews: builder.mutation<{ articles: INews[] }, string>({
      query: searchKey => ({
        url: `top-headlines?${
          searchKey ? `q=${searchKey}&` : ''
        }country=us&pageSize=50`,
        method: 'GET',
      }),
    }),
  }),
});

export const stringifyError =  (error: any) =>{ 
  console.log('test ---- > ' , error)
  console.log('test ---- > ' , error.data)
  error.data.message};
export const { useGetNewsMutation } = newsService;
