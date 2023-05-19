import { createSlice } from '@reduxjs/toolkit'

const counterReducer = createSlice({
    name: 'counter',
    initialState: {
        clicks: 0,
    },
    reducers: {
        clicked(state, action) {
            return action.payload
        },
    },
})

export const { clicked } = counterReducer.actions

export const sumOne = numberToSum => {
    return async dispatch => {
        const returnedValue = numberToSum + 1
        dispatch(clicked({ clicks: returnedValue }))
    }
}

export default counterReducer.reducer
