import routes from '../routes'
import instanceAxios from '../configApi'

const newArrivalApi = async () => {
    try {
        const response = await instanceAxios.get(routes.newArrival)
        return response
    } catch (error) {
        console.log(`sorry error with new Arrival`)
        return Promise.reject(error)
    }
}
export default newArrivalApi