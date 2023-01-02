import routes from '../routes'
import instanceAxios from '../configApi'

const productDetails = async (registerData) => {
    try {
        const response = await instanceAxios.post(routes.register, registerData)
        return response
    } catch (error) {
        console.log(`sorry error with register`)
        return Promise.reject(error)
    }
}
export default productDetails