import routes from '../routes'
import instanceAxios from '../configApi'

const searchProductApi = async (product) => {
    try {
        const response = await instanceAxios.get(routes.searchProduct(product))
        return response
    } catch (error) {
        console.log(`sorry error with search route `)
        return Promise.reject(error)
    }
}
export default searchProductApi