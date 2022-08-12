import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { AuthState } from './auth-slice';
import { LoginDTO, User } from '../entities/login';
import { prepare } from '../utils/token';
import { Project } from '../entities/project';
import { UpdatePasswordUSerDTO, UpdateUserDTO } from '../entities/updateUser';


export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Post','User', 'Project'], 
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_SERVER_URL +'/api/user', prepareHeaders: prepare}),
    endpoints: (builder) => ({

        getUserProjects: builder.query<Project[], void>({
            query: ()=> '/account',
            providesTags: ['User']
        }),

        updateUserProfile: builder.mutation<User, UpdateUserDTO>({
            query: (body)=>({
                url:'/account/update',
                method: 'PATCH',
                body
            })
        }),
        updatePasswordUser: builder.mutation<void, UpdatePasswordUSerDTO>({
            query: (body)=>({
                url:'/account/password',
                method: 'PATCH',
                body
            })
        }),
        addPictureUser: builder.mutation<void , FormData>({
            query : (body)=>({
                url:'/account/picture',
                method: 'POST',
                body
            })
        }),

    
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

export const {useGetUserProjectsQuery, useAddPictureUserMutation, useUpdatePasswordUserMutation , useUpdateUserProfileMutation ,useUserLoginMutation, useUserRegisterMutation, useGetOneUserProjectQuery} = authApi