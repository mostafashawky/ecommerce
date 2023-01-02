import instanceAxios from '../configApi'
import route from '../routes'
const authcartApi = async (userId) => {
    try {
        console.log(userId)
        // update resource
        const response = await instanceAxios.put(route.authCart(userId));
        return response
    } catch (error) {
        console.log('error in authcart')
        return Promise.reject(error)
    }
}

export default authcartApi