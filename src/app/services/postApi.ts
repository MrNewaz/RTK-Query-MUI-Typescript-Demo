import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostType } from 'types/PostType'

const apiHeaders = {
  'Content-type': 'application/json; charset=UTF-8',
}
const baseUrl = 'https://jsonplaceholder.typicode.com'

const createRequest = (url: string) => ({ url, headers: apiHeaders })

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<PostType[], void>({
      query: () => createRequest(`/posts`),
    }),

    getPost: builder.query<PostType, string >({
      query: (id) => createRequest(`posts/${id}`),
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),

    createPost: builder.mutation({
      query: (post) => ({
        url: `posts/`,
        method: 'POST',
        body: post,
        headers: apiHeaders,
      }),
    }),

    updatePost: builder.mutation({
      query: ({ id, newData }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: newData,
        headers: apiHeaders,
      }),
    }),
  }),
})

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useCreatePostMutation,
} = postApi
