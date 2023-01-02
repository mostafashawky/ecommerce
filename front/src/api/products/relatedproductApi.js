import routes from '../routes'
import instanceAxios from '../configApi'

const relatedproductApi = async (productId) => {
    try {
        const response = await instanceAxios.get(routes.relatedProduct(productId))
        return response
    } catch (error) {
        console.log(`sorry error with related product`)
        return Promise.reject(error)
    }
}
export default relatedproductApi