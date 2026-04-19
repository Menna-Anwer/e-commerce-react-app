import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteCategory } from '../../Redux/Actions/categoryAction';

const AdminAllCategoriesCard = ({ category }) => {

       const dispatch = useDispatch();
    
        const handelDelete = async () => {
            await dispatch(deleteCategory(category._id))
    
            window.location.reload();
        }
    
    return (
        <Col  xs="12" sm="6" md="5" lg="4" className="d-flex">
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>

                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div className="d-inline item-delete-edit"  onClick={handelDelete} >ازاله</div>
                        <Link to={`/admin/editcategory/${category._id}`} style={{ textDecoration: "none" }}>
                            <div className="d-inline item-delete-edit">تعديل</div>
                        </Link>
                    </Col>
                </Row>
                <Link to={`/products/${category._id}`} style={{ textDecoration: "none" }}>
                <div className="allCard mb-3 ">
                    <div className="categoty-card "  ></div>
                    <img alt="zcv" src={category.image} className="categoty-card-img" />
                    <p className="categoty-card-text my-2">{category.name}</p>
                </div>
                </Link>
            </Card>
        </Col >
    )
}

export default AdminAllCategoriesCard
