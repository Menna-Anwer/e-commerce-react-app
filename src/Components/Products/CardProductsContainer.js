import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'

const CardProductsContainer = ({ title, btntitle, pathText, product }) => {

    return (
        <Container>
            {product ? (
                <>
                    <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
                    <Row className='my-2 d-flex justify-content-between'>
                        {product ? (
                            product.map((item, index) => {
                                return (
                                    <ProductCard key={index} item={item} />
                                )
                            })
                        ) : null}

                    </Row>
                </>

            ) : null}

        </Container>
    )
}

export default CardProductsContainer
