import Multiselect from 'multiselect-react-dropdown';
import add from '../../images/add.png'
import { Col, Row, ToastContainer } from 'react-bootstrap';
import MultipleImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color';
import { useParams } from 'react-router-dom';
import EditProductLogic from './../../logic/product/EditProductLogic';

const AdminEditProducts = () => {
  const {id} =useParams()
   const [loading,images,setImages,productName,productDescription,priceBefore,priceAfter,
    categoryID,qty,seletedSubID,BrandID,options,colors,showColor,
    onChangeProductName,onChangeproductdDescription,onChangePriceBefor,onChangePriceAfter,onChangeQty,
    dataCategory,dataBrand,subCategory,onChangeCategory,onChangeBrand,onChangeColor,handelColor,
    ,removeColor,onSelect,onRemove,handelSubmit] = EditProductLogic(id)
  return (
    <div>
        <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> تعديل المنتج </div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>
                    <MultipleImageInput
                        images={images}
                        setImages={setImages}
                        max={4}
                        allowCrop={false}
                        theme={"light"}
                        cropConfig={{
                            cropShape: 'rect', // or 'round'
                            aspect: 4 / 3
                        }}
                    />

                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                        value={productName}
                        onChange={onChangeProductName}
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                        value={productDescription}
                        onChange={onChangeproductdDescription}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                        value={priceBefore}
                        onChange={onChangePriceBefor}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر بعد الخصم"
                        value={priceAfter}
                        onChange={onChangePriceAfter}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="سعر المنتج"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                        value={qty}
                        onChange={onChangeQty}
                    />
                    <select
                        name="category"
                        id="category"
                        value={categoryID}
                        className="select mt-3 px-2"
                        onChange={onChangeCategory}
                    >
                        <option value="0">التصنيف الرئيسي</option>
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

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="Brand"
                        id="Brand"
                         value={BrandID}
                        className="select mt-3 px-2"
                        onChange={onChangeBrand}
                    >
                        <option value="0">الماركة</option>
                        {dataBrand.data
                            ? dataBrand.data.map((item) => {
                                return (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
                                    </option>
                                );
                            })
                            : null}
                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        {
                            colors.length >= 1 ? (
                                colors.map((color, index) => {
                                    return (
                                        <div key={index}
                                            className="color ms-2 border  mt-1"
                                            onClick={() => removeColor(color)}
                                            style={{ backgroundColor: color }}>
                                        </div>
                                    )

                                })
                            ) : null
                        }

                        <img onClick={onChangeColor} src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} />
                        {showColor === true ? <CompactPicker onChangeComplete={handelColor} /> : null}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit}  className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer />
    </div>
  )
}

export default AdminEditProducts
