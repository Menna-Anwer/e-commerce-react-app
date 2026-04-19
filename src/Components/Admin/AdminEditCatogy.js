import React from 'react'
import { Col, Row, Spinner, ToastContainer } from 'react-bootstrap'
import EditCategoryLogic from '../../logic/category/EditCategoryLogic'
import { useParams } from 'react-router-dom'

const AdminEditCatogy = () => {
      const {id} =useParams()
      const [name, img, loading, isPress, onChangeName, onChangeImage, handelSubmit] = EditCategoryLogic(id)
  return (
    <div>
        <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onChangeImage}
              id="upload-photo"
            />
          </div>
          <input
            onChange={onChangeName}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {
        isPress ? loading ? <Spinner animation="border" variant="primary" /> :
          <h3> Finish</h3> : null
      }
      <ToastContainer />
    </div>
  )
}

export default AdminEditCatogy
