const routes = {
    baseURL: 'http://127.0.0.1:8000',
    //Authentication
    login: '/api/login',
    register: '/api/register',
    csrfToken: '/sanctum/csrf-cookie',
    authCart: (userId) => `/api/carts/user/${userId}`,

    //Products
    productDetails: (product) => `/api/productdetails/${product}`,
    recentView: '/api/products/recentview',
    searchProduct: (product) => `/api/search?key=${product}`,
    newArrival: '/api/products/newarrival',
    relatedProduct: (productId) => `/api/products/${productId}/brand`,
    randomProducts: '/api/products/random',
    offers: '/api/products/offers',

    //Categories
    categories: '/api/categories',
    subcategories: (cat) => `/api/categories/${cat}/subcategories`,
    categoryProducts: (cat) => `/api/categories/${cat}`,

    //carts
    carts: (userId) => `/api/carts/user/${userId}`,
    addCarts: "/api/carts",
    increaseProductCart: (productId, userId) => `/api/carts/${productId}/users/${userId}/increase`,
    decreaseProductCart: (productId, userId) => `/api/carts/${productId}/users/${userId}/decrease`,
    deleteCart: (cartId) => `/api/carts/${cartId}`,
    newVisitor: '/api/visitors',
    sendMessage: '/api/contact',
    siteInfo: '/api/siteinfo',
}

export default routes