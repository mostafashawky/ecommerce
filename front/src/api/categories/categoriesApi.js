import instanceAxios from '../configApi'
import route from '../routes'

const categoriesApi = async () => {
    try {

        const response = await instanceAxios.get(route.categories);
        return response
    } catch (error) {
        console.log('error in fetching categoreis')
        return Promise.reject(error.message)
    }
}

export default categoriesApi