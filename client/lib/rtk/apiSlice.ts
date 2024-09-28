// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { backendURL } from "../../constants";

// export interface Post {
//   id: number;
//   userId: number;
//   title: string;
//   content: string;
//   tags:string[];
//   created_at: number;
// }

// export interface Comment {
//   id: number;
//   userId: number;
//   postId: number;
//   content: string;
//   owner: string;
//   created_at: number;
// }

// export interface User {
//   id: number;
//   username: string;
//   password: string;
//   name: string;
//   dob: string;
//   created_at: number;
// }

// export const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: backendURL }),
//   reducerPath: "api",
//   tagTypes: ["Users", "Posts", "Comments"],
//   endpoints: (build) => ({
//     getPosts: build.query<Post[], string | void>({
//       query: (search) => ({
//         url: "/posts",
//         params: search ? { q: search } : {},
//       }),
//       providesTags: ["Posts"],
//     }),
//     getUsers: build.query<User[], void>({
//       query: () => "/users",
//       providesTags: ["Users"],
//     }),
//     getCommentsByPostId: build.query<Comment[], number>({
//       query: (postId) => `/comments/${postId}`, // Sử dụng postId trong URL
//       providesTags: ["Comments"],
//     }),
//   }),
// });

// export const {
//   useGetPostsQuery,
//   useGetCommentsByPostIdQuery,
//   useGetUsersQuery,
// } = api;
