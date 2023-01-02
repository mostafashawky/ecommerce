import React, { useRef, useState } from 'react'

const ProductImage = ({ brandImg, productImages }) => {

    const [image, setImage] = useState('')

    const imageWrapper = useRef(null)
    const img = useRef(null)
    const handleImagePreview = (e) => {
        if (imageWrapper.current.contains(e.target) && e.currentTarget !== e.target) {
            img.current.setAttribute('src', e.target.getAttribute('src'))
        }
    }
    return (
        <div className="product-image">
            <div className="image-brand text-center mb-4">
                <img src={brandImg} alt="brand-image" className="img-fluid" ref={img} />
            </div>
            <div className="d-flex img-preview" ref={imageWrapper} onClick={handleImagePreview}>
                {productImages?.map((image) => (
                    <img key={image.id} src={image.url} alt="img-preview" width="70" />

                ))}
            </div>
        </div >
    )
}
export default ProductImage