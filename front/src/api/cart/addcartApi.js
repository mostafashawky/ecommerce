import routes from '../routes'
import instanceAxios from '../configApi'

const addcartApi = async (cartData) => {
    try {
        const response = await instanceAxios.post(routes.addCarts, cartData)
        return response
    } catch (error) {
        console.log(`sorry error with add new cart `)
        return Promise.reject(error)
    }
}
export default addcartApi