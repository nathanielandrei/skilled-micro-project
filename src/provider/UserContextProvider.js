import React, { createContext, useReducer } from 'react'
import * as type from './constants/action.type'

const initialState = {
    username: null,
    repos: [],
    isLoading: false,
    isLoaded: false,
    errorMsg: null
}

const reducer = (state, action) => {
    
    switch(action.type) {
        case type.GET_USER_REPO:
            const { username } = action.payload;
            return {
                ...state,
                username: username,
                isLoading: true
            }
        case type.GET_USER_REPO_SUCCESS:
            const { repos } = action.payload;
            return {
                ...state,
                repos: repos,
                isLoaded: true,
                isLoading: false,
            }
        case type.GET_USER_REPO_FAILED:
            const { errMsg } = action.payload;
            return {
                ...state,
                isLoading: false,
                errorMsg: errMsg
            }
        case type.REFRESH_STATE:
            return initialState
        default:
            return state
    }
}

export const UserStateContext = createContext()

export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <UserStateContext.Provider value={{userState: state, userDispatch: dispatch}}>
            {children}
        </UserStateContext.Provider>
    )
}
