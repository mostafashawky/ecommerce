import React from 'react'
import { toast } from 'react-toastify';

const ProductQuantity = ({
    currentQuantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
}) => {

    return (
        <div className="product-quantity d-flex">
            <button className="increase btn" onClick={handleIncreaseQuantity}>
                <i className="fa fa-plus"></i>
            </button>
            <span className="quantity">{currentQuantity}</span>
            <button className="decrease btn" onClick={handleDecreaseQuantity}>
                <i className="fa fa-minus"></i>
            </button>
        </div>
    )
}
export default ProductQuantity