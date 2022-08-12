import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Considerations } from "../entities/considerations";
import { prepare } from "../utils/token";

export const userConsiderationApi = createApi({


    reducerPath: 'userConsiderationApi',
    tagTypes: ['Considerations'],
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_SERVER_URL + '/api/user/consideration',  prepareHeaders: prepare}),
    endpoints: (builder) => ({

        addConsideration: builder.mutation<void, FormData>({
          query:(body)=>({
            url: '/add',
            method: 'POST',
            body: body,
            
        }),
        invalidatesTags:['Considerations']
        }),

        editConsideration: builder.mutation<void, FormData>({
          query:(body)=>({
            url: '/edit',
            method: 'POST',
            body: body,
        }),
        invalidatesTags:['Considerations']
        }),
    })
})

export const { useAddConsiderationMutation, useEditConsiderationMutation } = userConsiderationApi;