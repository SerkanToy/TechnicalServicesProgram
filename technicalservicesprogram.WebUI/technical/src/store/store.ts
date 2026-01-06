import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import  personApi  from '../Pages/Person/Api/personApi'



const store = configureStore({
    reducer:{
        [personApi.reducerPath] : personApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(personApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store