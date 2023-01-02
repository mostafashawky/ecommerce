import instanceAxios from './configApi'
import routes from './routes'

const subcategories = async (cat) => {
    try {
        const response = await instanceAxios.get(routes.subcategories(cat))
        return response
    } catch (error) {
        console.log(`sorry error with subcategories`)
        return Promise.reject(error)
    }
}
export default subcategories