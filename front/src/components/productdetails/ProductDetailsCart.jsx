import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import { ProductQuantity } from '../shared'

const ProductDetailsCart = ({ productDetails }) => {

    const [selectOptionMenu, setSelectOptionMenu] = useState(false)
    const [choosenSize, setChoosenSize] = useState('')
    const [choosenColor, setChoosenColor] = useState('')
    const [currentQuantity, setCurrentQuantity] = useState(1)
    const [calcTotalPrice, setCalcTotalPrice] = useState(0)

    const cartsContext = useContext(CartContext)

    useEffect(() => {
        const currentPrice = productDetails.price_discount ? productDetails.price_discount : productDetails.price
        if (productDetails?.color) {
            setChoosenColor(productDetails.color.split(',')[0])
        }
        setCalcTotalPrice(currentPrice)
    }, [productDetails])

    const handleClickSize = (e) => {
        const choosenSize = e.target.getAttribute('data-value').trim()
        setChoosenSize(choosenSize)
    }
    const handleClickColor = (e) => {
        const choosenColor = e.target.getAttribute('data-value').trim()
        setChoosenColor(choosenColor)
        setSelectOptionMenu(false)
    }

    const handleIncreaseQuantity = () => {
        if (currentQuantity < productDetails.quantity) {

            const increaseQuantity = currentQuantity + 1
            const currentPrice = productDetails.price_discount ? productDetails.price_discount : productDetails.price
            setCurrentQuantity(increaseQuantity)
            setCalcTotalPrice(increaseQuantity * currentPrice)
        } else {
            toast.error(`Sorry There Are Only ${productDetails.quantity} Product in stock`)
        }
    }
    const handleDecreaseQuantity = () => {
        if (currentQuantity > 1) {
            const decreaseQuantity = currentQuantity - 1
            const currentPrice = productDetails.price_discount ? productDetails.price_discount : productDetails.price

            setCurrentQuantity(decreaseQuantity)
            setCalcTotalPrice(decreaseQuantity * currentPrice)

        } else {
            toast.error('Minmun product required')
        }
    }

    const getDiscountPercentage = (price_discount, price) => {
        const discountPercentage = Math.round((price_discount / price) * 100)
        return discountPercentage
    }

    const handleAddCart = () => {
        // check if user choose size
        if (!choosenSize.trim() && productDetails.size) {
            toast.error('please choose a size')
        } else {
            const cartData = {
                product_id: productDetails.id,
                size: choosenSize,
                color: choosenSize,
                quantity: currentQuantity,
                unit_price: productDetails.price_discount || productDetails.price,
                total_price: calcTotalPrice,
            }

            cartsContext.addCart(cartData)
        }
    }

    return (
        <div className="product-cart-details">
            {productDetails.price_discount &&
                (<div className="discount-percentage">
                    {getDiscountPercentage(productDetails.price_discount, productDetails.price)}% discount
                </div>)}
            <h3 className="product-title">{productDetails.product_name}</h3>
            <ul className="list-unstyled list">
                <li className="item brand">
                    <label className="title">Brand:</label>
                    <p className="content">{productDetails?.brand}</p>
                </li>
                <li className="item cat">
                    <label className="title">Categories:</label>
                    <p className="content">{productDetails?.category?.cat_name}</p>
                </li>
                <li className="item quantity" style={{ borderBottom: '1px solid #e1e1e1' }}>
                    <label className="title">Quantity:</label>
                    <p className="content">{productDetails?.quantity}</p>
                </li>
                {productDetails.size && (
                    <li className="size">
                        <label className="title">Size: </label>
                        {productDetails.size.split(',').map((size, i) => (
                            <button
                                onClick={handleClickSize}
                                data-value={size}
                                className={`size-btn ${size.trim() === choosenSize ? 'active' : ''}`}
                                key={i}>{size}
                            </button>
                        ))}
                    </li>
                )}
                {productDetails.color && (
                    <li className="color d-flex">
                        <label className="title">Colors: </label>
                        <div className="custom-select">
                            <label className="choosen-color-label" onClick={() => setSelectOptionMenu(!selectOptionMenu)}>{choosenColor}</label>
                            <div className={`option-wrapper ${selectOptionMenu ? 'active-menu' : ''}`}>
                                {productDetails.color.split(',').map((color, i) => (
                                    <p data-value={color} className="color-option" key={i} value={color} onClick={handleClickColor}>{color}</p>
                                ))}
                            </div>
                        </div>
                    </li>
                )}
            </ul>
            <div className="price-wrapper">
                <p className={`product-price ${productDetails.price_discount ? 'line-through' : ''}`}>
                    {productDetails.price}EGB
                </p>
                {productDetails.price_discount ?
                    (<p className="product-price bg">{productDetails.price_discount} EGB</p>)
                    : ''}
                <p className="total_price">Total Price: {calcTotalPrice}</p>

            </div>
            <div className="make-action d-flex">

                <ProductQuantity
                    currentQuantity={currentQuantity}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                />

                <button className="add-cart" onClick={handleAddCart}>
                    <i className="fa fa-bag-shopping"></i>
                    <span style={{ marginLeft: '5px' }}>{cartsContext.loading ? "Add to Cart..." : 'Add to Cart'} </span>
                </button>
                <button className="favourite">
                    <i className="fa fa-heart"></i>
                </button>
            </div>
            <ToastContainer />
        </div>
    )

}
export default ProductDetailsCart