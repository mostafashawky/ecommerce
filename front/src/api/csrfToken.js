import instanceAxios from './configApi'
import route from './routes'

const csrfToken = async () => {
    try {
        const response = await instanceAxios.get(route.csrfToken);
        return response
    } catch (error) {
        console.log('error in fetching csrf token')
        return Promise.reject(error)
    }
}

export default csrfToken