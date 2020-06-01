import * as type from '../constants/action.type'

export const getRepo = name => {
    return { type: type.GET_USER_REPO, payload: name }
}

export const getRepoSuccess = repos => {
    return { type: type.GET_USER_REPO_SUCCESS, payload: repos }
}

export const getRepoFailed = errMsg => {
    return { type: type.GET_USER_REPO_FAILED, payload: errMsg }
}

export const refreshState = () => {
    return { type: type.REFRESH_STATE }
}