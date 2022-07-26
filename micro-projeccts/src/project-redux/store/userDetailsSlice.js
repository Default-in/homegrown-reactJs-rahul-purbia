import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "Varun Sharma",
    age: 20,
    role: "Software Developer"
}

export const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        incrementAge: (state) => {
            return { ...state, age: state.age + 1 }
        }
    },
})

export const { incrementAge } = userDetailsSlice.actions

export default userDetailsSlice.reducer