import { useState, useEffect } from 'react'
import { loginApi, registerApi, authcartApi } from '../api/auth'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const useAuth = (guard = "") => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const user = JSON.parse(window.localStorage.getItem('user')) || null;
    const guestUser = JSON.parse(window.localStorage.getItem('guest')) || null;
    useEffect(() => {
        if (guard === 'auth' && !user) navigate('/login');
        if (guard === 'guest' && user) navigate('/');
    }, [])

    const login = async (credential) => {
        try {
            const { data } = await loginApi(credential)
            window.localStorage.setItem('token', JSON.stringify(data.token))
            window.localStorage.setItem('user', JSON.stringify(data.user))

            // if there are guest user in local storage send request to server to update carts related to auth user
            if (guestUser) {
                const data = await authcartApi(guestUser)
                console.log(data)
                window.localStorage.removeItem('guest');
            }
            navigate('/')
        } catch (error) {
            // invalid credential
            if (error?.response?.status === 403) {
                toast.error('invalid Email or Password')
            } else {
                toast.error('error with server')
            }
        }

    }

    const register = async (userData) => {
        try {
            const { data } = await registerApi(userData);
            window.localStorage.setItem('token', JSON.stringify(data.token))
            window.localStorage.setItem('user', JSON.stringify(data.user))
            navigate('/')
        } catch (error) {
            // validation error
            if (error?.response?.status === 422) {
                for (error of Object.values(error.response.data.errors).flat()) {
                    toast.error(error)
                }
            }
        }
    }

    const logout = () => {
        window.localStorage.clear()
        navigate('/login')
    }

    return {
        login,
        logout,
        user,
        register
    }

}
export default useAuth
