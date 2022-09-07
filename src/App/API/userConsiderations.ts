import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { prepare } from "../utils/token";

export const userConsiderationApi = createApi({


    reducerPath: 'userConsiderationApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_SERVER_URL + '/api/user/consideration',  prepareHeaders: prepare}),
    endpoints: (builder) => ({

        addConsideration: builder.mutation<void, FormData>({
          query:(body)=>({
            url: body.get("file") ? '/add' : '/add-no-file',
            method: 'POST',
            body: body,
        }),
        }),

        editConsideration: builder.mutation<void, FormData>({
          query:(body)=>({
            url: body.get("file") ? '/edit' : '/edit-no-file',
            method: 'POST',
            body: body,
        }),
        }),

        deleteConsideration: builder.mutation<void, number> ({
          query:(id)=> ({
            url: `/delete/ ${id}`,
            method: 'DELETE',
          }),
        }),

        takeContributionReady:  builder.mutation<void, number> ({
          query:(id)=> ({
            url: `/status/${id}/ready`,
            method: 'PUT',
          }),
        }),

        takeContributionClosed:  builder.mutation<void, number> ({
          query:(id)=> ({
            url: `/status/${id}/closed`,
            method: 'PUT',
          }),
        }),
    })
})

export const { useAddConsiderationMutation, 
  useEditConsiderationMutation,
  useDeleteConsiderationMutation, 
  useTakeContributionClosedMutation, 
  useTakeContributionReadyMutation,  } = userConsiderationApi;
