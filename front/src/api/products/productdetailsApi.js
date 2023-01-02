import routes from '../routes'
import instanceAxios from '../configApi'

const productDetailsApi = async (product) => {
    try {
        const response = await instanceAxios.get(routes.productDetails(product))
        return response
    } catch (error) {
        console.log(`sorry error with product details`)
        Promise.reject(error.message)
    }
}
export default productDetailsApi