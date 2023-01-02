import routes from '../routes'
import instanceAxios from '../configApi'

const increaseproductcartApi = async (productId, userId) => {
    try {
        const response = await instanceAxios.post(routes.increaseProductCart(productId, userId))
        return response
    } catch (error) {
        console.log('sorry error with increase carts')
        return Promise.reject(error)
    }
}
export default increaseproductcartApi