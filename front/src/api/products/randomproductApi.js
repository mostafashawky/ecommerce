import routes from '../routes'
import instanceAxios from '../configApi'

const randomproductApi = async () => {
    try {
        const response = await instanceAxios.get(routes.randomProducts)
        return response
    } catch (error) {
        console.log(`sorry error with random product`)
        return Promise.reject(error)
    }
}
export default randomproductApi