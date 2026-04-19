import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import {  ToastContainer } from "react-toastify";
import AddSubCategoryLogic from "../../logic/subCategory/AddSubCategoryLogic";



const AdminAddSubCategory = () => {
   const [name,loading,isPress,dataCategory,onChangeName,handelEvent,handelSubmit] =AddSubCategoryLogic()

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
           value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            onChange={onChangeName}
            placeholder="اسم التصنيف الفرعي"
          />
          <select
            name="category"
            id="category"
            className="select mt-3 px-2"
            onChange={handelEvent}
          >
            <option value="0">chose</option>
            {dataCategory.data
              ? dataCategory.data.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2">
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
  );
};

export default AdminAddSubCategory;
