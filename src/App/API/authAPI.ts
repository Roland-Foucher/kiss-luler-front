import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { AuthState } from './auth-slice';
import { User } from '../entities/login';
import { prepare } from '../utils/token';

export interface Credentials{
    email:string;
    password:string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Post','user'], 
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_SERVER_URL +'/api/user', prepareHeaders: prepare}),
    endpoints: (builder) => ({

        getThisUser: builder.query<User, void>({
            query: ()=> '/account',
            providesTags: ['user']
        }),
        // getAllUsers: builder.query<Project[], void>({
        //     query:()=>({
        //         url: '/account/projects',
        //         method: 'GET'
        //     })
        // }),
        // getUserById: builder.query<User, number>({
        //     query: (id)=> ({
        //         url: '/' +id
        //     })
        // }),
        userLogin: builder.mutation<AuthState, User>({
            query:(body)=>({
                url: '/login',
                method: 'POST',
                body
            }),
            invalidatesTags:['user', 'Post']

        }),
        userRegister: builder.mutation<AuthState, FormData>({
            query: (body)=>({
                url:'/register',
                method: 'POST',
                body
            }),
            invalidatesTags:['user']
        })
    })
})

export const {useGetThisUserQuery, useUserLoginMutation, useUserRegisterMutation} = authApi