import React from "react";
import BrandCard from "./BrandCard";
import { Container, Row, Spinner } from "react-bootstrap";

const BrandContainer = ({ dataBrand, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-4">كل الماركات</div>
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          dataBrand ? (
            dataBrand.data.slice(0, 5).map((item, index) => {
              return (
                <BrandCard key={index} img={item.image} title={item.name} />
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default BrandContainer;
