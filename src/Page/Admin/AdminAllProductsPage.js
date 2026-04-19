import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Uitily/Pagination'
import ViewAdminProductLogic from '../../logic/product/ViewAdminProductLogic'
const AdminAllProductsPage = () => {
    const [allProducts, pagination, onPagination] = ViewAdminProductLogic()

    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts products={allProducts} />
                    {
                        pagination >= 1 ? (<Pagination pagination={pagination} onPagination={onPagination} />) : null
                    }

                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
