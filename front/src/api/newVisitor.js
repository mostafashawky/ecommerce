import routes from './routes'
import instanceAxios from './configApi'

const newUser = async () => {
    try {
        const { data } = await instanceAxios.get(routes.newVisitor)
        return data
    } catch (e) {
        console.log(`sorry error with visitor ${e.message}`)
    }
}
export default newUser