import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Project } from "../entities/project";





export const projectApi = createApi({

    reducerPath: 'projectApi',
    tagTypes: ['projectsList'],
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_SERVER_URL + '/api/project'}),
    endpoints: (builder) => ({

        getAllProjects: builder.query<Project[],void>({
            query: () => '/',
            providesTags: ['projectsList']
        }),

        getOneProject: builder.query<Project, number>({
            query:(id)=> '/'+ id,
            providesTags: ['projectsList']
        })
    })
})

export  const { useGetAllProjectsQuery, useGetOneProjectQuery } = projectApi;