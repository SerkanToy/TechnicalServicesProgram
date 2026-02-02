import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ENDPOINT_API, ENDPOINT_PERSON_CONTROLLER, ENDPOINT_PERSONS_TR,ENDPOINT_PERSONS_TR_DELETE, ENDPOINT_PERSONS_TR_UPDATE } from "../../../Models/ENDPOINT"
import personModel from "../Model/personModel"
 
const pause = () => {
    return new Promise((r) => {
        setTimeout(r,2000);
    })
}
 
const personApi = createApi({
    reducerPath:"personApi",
    baseQuery:fetchBaseQuery({
        baseUrl: `${ENDPOINT_API}/${ENDPOINT_PERSON_CONTROLLER}/`,
        fetchFn: async (...args) => {
            await pause();
            return fetch(...args);
        }
    }),
    tagTypes:["persons"],
    endpoints:(builder) => ({
        getPersons:builder.query({
            providesTags:['persons'],
            query:() => ({
                url:`${ENDPOINT_PERSONS_TR}`,
                method:'GET'
            })
        }),
        createPerson:builder.mutation({
            invalidatesTags:['persons'],
            query:(personModel:personModel) => ({
                url:`${ENDPOINT_PERSONS_TR}`,
                method:"POST",
                body:personModel
            })
        }),
        updatePerson:builder.mutation({
            invalidatesTags:['persons'],
            query:(personModel:personModel) => ({
                url:`${ENDPOINT_PERSONS_TR_UPDATE}/${personModel.id}`,
                method:"PUT",
                body:personModel
            })
        }),
        deletePerson:builder.mutation({
            query:(personModel:personModel) => ({
                url:`${ENDPOINT_PERSONS_TR_DELETE}/${personModel.id}`,
                method:'DELETE',
                body:personModel
            }),
            invalidatesTags:["persons"]
        })
    })
})

export const { useGetPersonsQuery, useCreatePersonMutation, useDeletePersonMutation, useUpdatePersonMutation } = personApi;
export default personApi