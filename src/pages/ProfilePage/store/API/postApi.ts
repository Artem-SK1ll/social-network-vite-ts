import {creaeApi, fetchBaseQuery } from "@reduxjs/"

























export const postApi = creaeApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getPoints: builder
    })
})








