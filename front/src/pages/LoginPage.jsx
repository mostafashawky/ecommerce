import React, { useEffect } from 'react'
import { LoginForm } from "../components/login"
const LoginPage = ({ setAuthUser, saveToken }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <LoginForm saveToken={saveToken} setAuthUser={setAuthUser} />
    )
}
export default LoginPage