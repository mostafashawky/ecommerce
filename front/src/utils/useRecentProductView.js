const useView = () => {

    const recentViewId = JSON.parse(window.localStorage.getItem('recentview'))


    const addRecentViewProducts = (product_id) => {
        if (recentViewId && Array.isArray(recentViewId)) {
            recentViewId.includes(product_id) || recentViewId.push(product_id)
            window.localStorage.setItem('recentview', JSON.stringify(recentViewId))
        } else {
            window.localStorage.setItem('recentview', JSON.stringify([product_id]))
        }
    }

    return {
        addRecentViewProducts,
        recentViewId
    }

}
export default useView