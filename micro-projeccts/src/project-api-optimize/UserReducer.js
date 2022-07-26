import { useReducer } from "react";

const initialState = {
    inputText: "",
    user: {
        id: "",
        firstName: "",
        lastName: "",
        username: "",
        email: ""
    },
    userExists: false,
    dataLoading: false,
    apiError: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_INPUT_TEXT": return {
            ...state,
            inputText: action.payload
        }
        case "SET_USER": return {
            ...state,
            user: action.payload,
            userExists: true
        }
        case "SET_NO_SUCH_USER": return {
            ...state,
            userExists: false
        }
        case "SET_LOADING": return {
            ...state,
            dataLoading: action.payload
        }
        case "SET_API_ERROR": return {
            ...state,
            apiError: action.payload
        }
        case "PREPARE_FETCH": return {
            ...state,
            dataLoading: true,
            apiError: ""
        }

        // case "RESET_USER": return {
        //     ...state,
        //     user: initialState.user,
        //     userExists: false
        // }
        default: return state;
    }
}

const useUserReducer = () => useReducer(reducer, initialState)

export default useUserReducer;