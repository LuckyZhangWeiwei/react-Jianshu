import axios from 'axios'
import * as constants from './constants'

export const login = (account, password) => {
    return dispatch => {
        axios.get('/api/login.json',{
            account,
            password
        }).then(res => {
            const result =res.data.data
            if(result) {
               dispatch(changeLogin())
            } else {
                alert('failure')
            }
        })
    }
}

export const logOut = () => ({
    type: constants.CHANGE_LOGOUT,
    isLogin: false,
})

const changeLogin= () => ({
    type: constants.CHANGE_LOGIN,
    isLogin: true,
})