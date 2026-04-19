
import Pagination from "../../Components/Uitily/Pagination";
import AdminAllCategories from "../../Components/Admin/AdminAllCategories";
import ViewAdminCatogeryLogic from "../../logic/category/ViewAdminCatogeryLogic";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
const AdminAllCategoryPage = () => {
const [allCategories, pagination, onPagination] =ViewAdminCatogeryLogic()
console.log("AllCategoryPage",allCategories);
  return (
     <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllCategories allCategories={allCategories} />
                    {
                        pagination >= 1 ? (<Pagination pagination={pagination} onPagination={onPagination} />) : null
                    }

                </Col>
            </Row>
        </Container>
  );
};

export default AdminAllCategoryPage;