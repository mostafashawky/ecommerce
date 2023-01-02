import routes from '../routes'
import instanceAxios from '../configApi'

const deletecartApi = async (cartId) => {
    try {
        const response = await instanceAxios.delete(routes.deleteCart(cartId))
        return response
    } catch (error) {
        console.log('sorry error with decrease carts product')
        return Promise.reject(error)
    }
}
export default deletecartApi
