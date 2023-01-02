import instanceAxios from '../configApi'
import route from '../routes'

const categoryproductsApi = async (category) => {
    try {
        const response = await instanceAxios.get(route.categoryProducts(category));
        return response
    } catch (error) {
        console.log('error in fetching categoreis products')
        return Promise.reject(error.message)
    }
}

export default categoryproductsApi