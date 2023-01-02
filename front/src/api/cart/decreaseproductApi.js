import routes from '../routes'
import instanceAxios from '../configApi'

const decreaseproductcartApi = async (productId, userId) => {
    try {
        const response = await instanceAxios.post(routes.decreaseProductCart(productId, userId))
        return response
    } catch (error) {
        console.log('sorry error with decrease carts product')
        return Promise.reject(error)
    }
}
export default decreaseproductcartApi
