import instanceAxios from '../configApi'
import route from '../routes'

const LoginApi = async (credential) => {
    try {
        const response = await instanceAxios.post(route.login, credential);
        return response
    } catch (error) {
        console.log('error in login')
        return Promise.reject(error)
    }
}

export default LoginApi