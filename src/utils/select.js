import Cookies from 'js-cookie'

const TokenKey = 'value'

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}