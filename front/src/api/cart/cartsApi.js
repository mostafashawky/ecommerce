import routes from '../routes'
import instanceAxios from '../configApi'

const cartsApi = async (userId) => {
    try {
        const response = await instanceAxios.get(routes.carts(userId))
        return response
    } catch (error) {
        console.log('sorry error with get carts')
        return Promise.reject(error)
    }
}
export default cartsApi