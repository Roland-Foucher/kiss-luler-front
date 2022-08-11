import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Considerations } from "../entities/considerations";
import { prepare } from "../utils/token";

export const userConsiderationApi = createApi({

    reducerPath: 'userConsiderationApi',
    tagTypes: ['Considerations'],
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_SERVER_URL + '/api/user/consideration', prepareHeaders: prepare}),
    endpoints: (builder) => ({

        addConsideration: builder.mutation<void,Considerations>({
          query:(body)=>({
            url: '/add',
            method: 'POST',
            body
        }),
        invalidatesTags:['Considerations']
        }),

        editConsideration: builder.mutation<void, Considerations>({
          query:(body)=>({
            url: '/edit',
            method: 'POST',
            body
        }),
        invalidatesTags:['Considerations']
        }),
    })
})

export const { useAddConsiderationMutation, useEditConsiderationMutation } = userConsiderationApi;