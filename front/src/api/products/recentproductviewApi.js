import routes from '../routes'
import instanceAxios from '../configApi'

const recentproductviewApi = async (productsId) => {
    try {
        const response = await instanceAxios.post(routes.recentView, { ids: productsId })
        return response
    } catch (error) {
        console.log(`sorry error with recent view`)
        return Promise.reject(error)
    }
}
export default recentproductviewApi