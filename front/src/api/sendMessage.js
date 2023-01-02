import routes from './routes'
import instanceAxios from './configApi'

const sendMessage = async (messageContent) => {
    try {
        const response = await instanceAxios.post(routes.sendMessage, messageContent)
        return response
    } catch (error) {
        console.log(`sorry error with contact ${error.message}`)
        return Promise.reject(error)
    }
}
export default sendMessage