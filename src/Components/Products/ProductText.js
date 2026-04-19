import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ViewProductsDetalisLogic from '../../logic/product/ViewProductsDetalisLogic'

const ProductText = () => {
  const [item, images, oneCategory, oneBrand] = ViewProductsDetalisLogic()
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text"> {oneCategory.name}:</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
            تايم (برودكت) أحمر <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{oneBrand.name}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.availableColors ? (
            item.availableColors.map((color) => {
              return (
                <div
                  className="color ms-2 border"
                  style={{ backgroundColor: color }}>
                </div>
              )
            })

          ) : null}


        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {item.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{item.price} جنية</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductText
