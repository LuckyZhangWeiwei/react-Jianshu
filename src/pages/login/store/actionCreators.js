import * as constants from './constants'

export const login = (account, password) => ({
    type: constants.GET_LOGIN,
    account,
    password,
})

export const logOut = () => ({
    type: constants.CHANGE_LOGOUT,
    isLogin: false,
})

export const changeLogin= () => ({
    type: constants.CHANGE_LOGIN,
    isLogin: true,
})