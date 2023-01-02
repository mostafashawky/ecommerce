import React from 'react';
import { RegisterForm } from '../components/register'
const RegisterPage = ({ setAuthUser, saveToken }) => {
    return (
        <RegisterForm setAuthUser={setAuthUser} saveToken={saveToken} />
    )
}


export default RegisterPage;