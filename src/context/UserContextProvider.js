import React, { createContext, useReducer, useMemo } from 'react'
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
            //const { username } = action.payload;
            return {
                ...state,
                username: action.payload,
                isLoading: true
            }
        case type.GET_USER_REPO_SUCCESS:
            //const { repos } = action.payload;
            return {
                ...state,
                repos: action.payload,
                isLoaded: true,
                isLoading: false,
            }
        case type.GET_USER_REPO_FAILED:
            //const { errMsg } = action.payload;
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payload
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
    const value = useMemo(() => ({userState: state, userDispatch: dispatch}), [state])
    return (
        <UserStateContext.Provider value={value}>
            {children}
        </UserStateContext.Provider>
    )
}
