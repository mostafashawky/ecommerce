import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import {
    ProductImage,
    ProductDetailsCart,
    ProductDescription,
} from '../components/productdetails'
import { ProductList } from '../components/shared'
import {
    productdetailsApi,
    relatedproductApi,
    recentproductviewApi,
    randomproductApi
} from '../api/products';
import { useRecentProductView } from '../utils';

const ProductDetailsPage = () => {

    const [productDetails, setProductDetails] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])
    const [randomProduct, setRandomProduct] = useState([])
    const [recentProductView, setRecentProductView] = useState([])
    const [loading, setLoading] = useState(true)

    const { addRecentViewProducts, recentViewId } = useRecentProductView()

    const { product: productId } = useParams()

    useEffect(() => {

        (async () => {
            try {
                const [
                    productDetails,
                    relatedProducts,
                    randomProducts,
                    recentviewProducts] = await Promise.all([
                        productdetailsApi(productId),
                        relatedproductApi(productId),
                        randomproductApi(),
                        recentViewId ? recentproductviewApi(recentViewId) : null
                    ]);

                setProductDetails(productDetails.data);
                setRelatedProducts(relatedProducts.data)
                setRandomProduct(randomProducts.data)

                if (recentviewProducts) {
                    setRecentProductView(recentviewProducts.data.filter((product) => product.id != Number(productId)))
                } else {
                    setRecentProductView([])
                }
                setLoading(false)

                addRecentViewProducts(productId)

            } catch (error) {
                console.log(error.message)
            }
        })()
        window.scrollTo(0, 0)
    }, [productId])

    if (loading) return '...loading';
    return (
        <>
            <Container fluid="lg" className="product-cart-wrapper">

                <Row>
                    <Col xs={12} sm={5} xl={4}>
                        <ProductImage
                            brandImg={productDetails?.image}
                            productImages={productDetails?.images}
                        />
                    </Col>
                    <Col xs={12} sm={5} xl={5}>
                        <ProductDetailsCart productDetails={productDetails} />
                    </Col>
                </Row>
                <ProductDescription />

                {relatedProducts.length ?
                    <ProductList
                        productListData={relatedProducts}
                        listTitle="Related Product"
                    /> : ''}

                {recentProductView.length ?
                    <ProductList
                        productListData={recentProductView}
                        listTitle="Viewd Recently"
                    /> : ''}
                <ProductList
                    productListData={randomProduct}
                    listTitle="You May Like"
                />

            </Container>

        </>
    )
}
export default ProductDetailsPage