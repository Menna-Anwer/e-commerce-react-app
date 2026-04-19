import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import HomeCategoryLogic from '../../logic/category/HomeCategoryLogic';

const HomeCategory = () => {

const  [dataCategory,loading,color] = HomeCategoryLogic()
    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading === false ? (
                        dataCategory.data ? (
                            dataCategory.data.slice(0, 5).map((item, index) => {
                                return (
                                <CategoryCard key={index}title={item.name} img={item.image} background={color[index]}  />
                            )
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) : <Spinner animation="border" variant="primary" />

                }

            </Row>
        </Container>
    )
}

export default HomeCategory
