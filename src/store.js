import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterReducer'

const store = configureStore( {
    reducer: {
        counter: counterReducer,
    },
} )

console.log( 'initial store:', store.getState() )

export default store
