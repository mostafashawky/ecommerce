import routes from '../routes'
import instanceAxios from '../configApi'

const remarkproductApi = async (remark) => {
    try {
        const response = await instanceAxios.get(routes.remarkProduct(remark))
        return response
    } catch (error) {
        console.log(`sorry error with remark product`)
        return Promise.reject(error.message)
    }
}
export default remarkproductApi