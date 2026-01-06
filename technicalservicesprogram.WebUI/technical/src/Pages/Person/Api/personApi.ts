import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ENDPOINT_API, ENDPOINT_PERSON_CONTROLLER, ENDPOINT_PERSONS_TR,ENDPOINT_PERSONS_TR_DELETE } from "../../../Models/ENDPOINT"
import personModel from "../Model/personModel"

const personApi = createApi({
    reducerPath:"personApi",
    baseQuery:fetchBaseQuery({
        baseUrl: `${ENDPOINT_API}/${ENDPOINT_PERSON_CONTROLLER}/`
    }),
    tagTypes:["persons"],
    endpoints:(builder) => ({
        getPersons:builder.query({
            query:() => ({
                url:`${ENDPOINT_PERSONS_TR}`,
                method:'GET'
            }),
            providesTags:["persons"]
        }),
        createPerson:builder.mutation({
            query:(personModel:personModel) => ({
                url:`${ENDPOINT_PERSONS_TR}`,
                method:"POST",
                body:personModel
            }),
            invalidatesTags:["persons"]
        }),
        deletePerson:builder.mutation({
            query:(personModel:personModel) => ({
                url:`${ENDPOINT_PERSONS_TR_DELETE}/${personModel.id}`,
                method:'DELETE',
                body:personModel
            })
        })
    })
})

export const { useGetPersonsQuery, useCreatePersonMutation, useDeletePersonMutation } = personApi;
export default personApi