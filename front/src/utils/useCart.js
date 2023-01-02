import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import {
    addcartApi,
    cartsApi,
    increaseproductcartApi,
    decreaseproductcartApi
} from '../api/cart'
import deletecartApi from '../api/cart/deletecartApi'
import useAuth from './useAuth'

const useCart = () => {
    const [carts, setCarts] = useState([])
    const [loading, setLoading] = useState(false)
    const { user } = useAuth();
    const guestUser = JSON.parse(window.localStorage.getItem('guest'))
    useEffect(() => {
        const userId = user?.id || guestUser;
        (async () => {

            // whether user authenticated or guest fetch related carts
            if (userId) {
                try {
                    const { data } = await cartsApi(userId);
                    setCarts(data)
                } catch (error) {
                    console.log(error)
                }
            }
        })()

    }, [])

    const addCart = async (cartData) => {
        try {
            // first check if user is authenticated 

            setLoading(true)
            if (!user) {
                let tmpId = ''
                // if there are guest user in local storage retrieve it
                tmpId = guestUser ? guestUser : ''

                // create tmp id for guest user 
                if (!guestUser) {
                    const randomNum = Math.round(Math.random() * 100)
                    tmpId = new Date().getTime().toString().slice(0, 4) + randomNum
                    window.localStorage.setItem('guest', JSON.stringify(tmpId))
                }

                cartData.user_id = tmpId

                // if product already added increase its quantity
                const existProduct = carts.findIndex((product) => product.product_id === cartData.product_id)
                if (existProduct >= 0) {

                    const { data: { data } } = await increaseproductcartApi(cartData.product_id, cartData.user_id)
                    setLoading(false)
                    setCarts(data)
                    toast.success('product increased successfully')
                } else {

                    const { data: { data } } = await addcartApi(cartData)
                    setLoading(false)
                    setCarts(data)
                    toast.success('product added successfully')
                }

            } else {
                // user is authenticated
                cartData.user_id = user.id
                // if product already added increase its quantity
                const existProduct = carts.findIndex((product) => product.product_id === cartData.product_id)

                if (existProduct >= 0) {
                    // increase quantity by ine
                    const { data: { data } } = await increaseproductcartApi(cartData.product_id, cartData.user_id)
                    setLoading(false)
                    setCarts(data)
                    toast.success('product increased successfully')
                } else {
                    const { data: { data } } = await addcartApi(cartData)
                    setLoading(false)
                    setCarts(data)
                    toast.success('product added successfully')
                }

            }
        } catch (error) {
            // invalid data
            if (error.response.status === 422) {
                for (error of Object.values(error.response.data.errors).flat()) {
                    toast.error(error)
                }
            } else {
                toast.error("error with server" + error.message + "")
            }
        }
    }

    const increaseProduct = async (productId, userId) => {
        try {
            const { data: { data } } = await increaseproductcartApi(productId, userId)
            setCarts(data)
        } catch (error) {
            console.log(error)
        }
    }

    const decreaseProduct = async (productId, userId) => {
        try {
            const { data: { data } } = await decreaseproductcartApi(productId, userId)
            setCarts(data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteCart = async (cartId) => {
        try {
            const { data: { data } } = await deletecartApi(cartId)
            setCarts(data)
        } catch (error) {
            console.log(error)
        }
    }
    return {
        addCart,
        carts,
        loading,
        increaseProduct,
        decreaseProduct,
        deleteCart
    }

}

export default useCart