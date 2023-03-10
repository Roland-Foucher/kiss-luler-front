import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Project } from "../entities/project";
import { prepare } from "../utils/token";





export const projectApi = createApi({

    reducerPath: 'projectApi',
    tagTypes: ['projectsList'],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_URL + '/api/project',  prepareHeaders: prepare }),
    endpoints: (builder) => ({

        getAllProjects: builder.query<Project[], void>({
            query: () => '/',
            providesTags: ['projectsList']
        }),

        getOneProject: builder.query<Project, number>({
            query: (id) => '/' + id,
            providesTags: ['projectsList']
        }),

        addProject: builder.mutation<any, FormData>({
            query: (body) => ({
                url: '/account/project',
                method: 'POST',
                body,
                
            }),
            invalidatesTags: ['projectsList']
        }),

        deleteProject: builder.mutation<any,number>({
            query: (id) => ({
                url: '/delete/'+ id,
                method: 'DELETE',
                
            }),
            invalidatesTags: ['projectsList']
        }),
        buyConsiderationProject : builder.mutation<void , number>({
            query : (id) => ({
                url : '/buy-consideration/' + id , 
                method : 'POST',
            }),
            invalidatesTags : ['projectsList']
        })
    })
})

export const { useGetAllProjectsQuery, useGetOneProjectQuery, useAddProjectMutation, useDeleteProjectMutation, useBuyConsiderationProjectMutation } = projectApi;