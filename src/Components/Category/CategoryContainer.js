import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';

const CategoryContainer = ({dataCategory,loading}) => {
    return (
        <Container >
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
            {
                    loading === false ? (
                        dataCategory ? (
                            dataCategory.slice(0, 5).map((item, index) => {
                                return (<CategoryCard key={index} img={item.image} title={item.name} />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) : <Spinner animation="border" variant="primary" />

                }
            </Row>
        </Container>
    )
}

export default CategoryContainer
