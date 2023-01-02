import { useState, useEffect } from 'react'
const useToken = () => {

    const [token, setToken] = useState('')
    const saveToken = (token) => {
        const userToken = window.localStorage.setItem('token', JSON.stringify(token))
        setToken(userToken)

    }
    const removeToken = () => {
        window.localStorage.removeItem('token')
        setToken('')
    }
    useEffect(() => {
        window.localStorage.getItem('token') && setToken(window.localStorage.getItem('token'))
    }, [])

    return [token, saveToken, removeToken]

}


export default useToken