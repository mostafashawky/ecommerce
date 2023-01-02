import axios from 'axios'
import routes from './routes'
import instanceAxios from './configApi'

const siteInfo = async () => {
    try {
        const response = await instanceAxios.get(routes.siteInfo)
        return response
    } catch (error) {
        console.log(`sorry error with site info ${error.message}`)
        return Promise.reject(error)
    }
}
export default siteInfo