import React from 'react'
import AdminAllCategoriesCard from './AdminAllCategoriesCard'
import { Row } from 'react-bootstrap'

const AdminAllCategories = ({allCategories}) => {
    console.log("AdminAllCategories",allCategories);
    
  return (
     <div>
            <div className='admin-content-text'>ادارات</div>
            <Row className='justify-content-start'>
                {
                    allCategories ? (
                        allCategories.map((category, index) =>
                            <AdminAllCategoriesCard key={index} category={category} />)
                    ) : <h4>لا يوجد منتجات حتي الان</h4>
                }
            </Row>

        </div>
  )
}

export default AdminAllCategories
