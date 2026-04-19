import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import HomeBrandLogic from '../../logic/brand/HomeBrandLogic';

const BrandFeatured = ({ title, btntitle }) => {

  const  [dataBrand,loading] =HomeBrandLogic()

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
              
                {
                    loading === false ? (
                        dataBrand.data ? (
                            dataBrand.data.slice(0, 5).map((item, index) => {
                                return (
                                    <BrandCard  key={index} img={item.image} title={item.name}  />
                            )
                            })
                        ) : <h4>لا يوجد brands</h4>
                    ) : <Spinner animation="border" variant="primary" />

                }

            </Row>
        </Container>
    )
}

export default BrandFeatured
