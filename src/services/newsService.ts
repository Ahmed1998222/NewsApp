import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENetworkApp} from '../utils/EApp';
import { INew } from '../types';

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
    getNews: builder.mutation<{ articles: INew[] }, string>({
      query: searchKey => ({
        url: `top-headlines?${
          searchKey ? `q=${searchKey}&` : ''
        }country=us&pageSize=50`,
        method: 'GET',
      }),
    }),
  }),
});

export const stringifyError = (error: any) => error.data.message;
export const { useGetNewsMutation } = newsService;
