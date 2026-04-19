
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminEditCatogy from '../../Components/Admin/AdminEditCatogy'

const AdminEditCatogyPage = () => {
  return (
    <div>
         <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminEditCatogy />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AdminEditCatogyPage
