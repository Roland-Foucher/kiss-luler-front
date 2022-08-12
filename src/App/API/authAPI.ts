import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { AuthState } from './auth-slice';
import { LoginDTO, User } from '../entities/login';
import { prepare } from '../utils/token';
import { Project } from '../entities/project';


export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Post','User', 'Project'], 
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_SERVER_URL +'/api/user', prepareHeaders: prepare}),
    endpoints: (builder) => ({

        getUserProjects: builder.query<Project[], void>({
            query: ()=> '/account',
            providesTags: ['User']
        }),

        // getUserById: builder.query<User, number>({
        //     query: (id)=> ({
        //         url: '/' +id
        //     })
        // }),
        userLogin: builder.mutation<AuthState, LoginDTO>({
            query:(body)=>({
                url: '/login',
                method: 'POST',
                body
            }),
            invalidatesTags:['User', 'Post']

        }),
        userRegister: builder.mutation<AuthState, User>({
            query: (body)=>({
                url:'/',
                method: 'POST',
                body
            }),
            invalidatesTags:['User']
        }),
        getOneUserProject: builder.query<Project, number>({
          query:(id)=> '/account/project/'+ id,
          providesTags: ['Project']
      }),
    })
})

export const {useGetUserProjectsQuery, useUserLoginMutation, useUserRegisterMutation, useGetOneUserProjectQuery} = authApi