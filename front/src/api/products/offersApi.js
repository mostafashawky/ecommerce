import routes from '../routes'
import instanceAxios from '../configApi'

const offersApi = async () => {
    try {
        const response = await instanceAxios.get(routes.offers)
        return response
    } catch (error) {
        console.log(`sorry error with new Arrival`)
        return Promise.reject(error)
    }
}
export default offersApi