import { configureStore } from '@reduxjs/toolkit'
import { messageReducer } from './slices'

// import messageReducer  from './slices'

const store = configureStore({
    reducer: {
        greeting: messageReducer,
    },
});

export default store;