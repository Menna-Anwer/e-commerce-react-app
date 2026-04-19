import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'
import GetBrandsLogic from '../../logic/brand/GetBrandsLogic';
const AllBrand = () => {
    const [pagination,dataBrand,loading,onPagination] =GetBrandsLogic();
    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer  dataBrand={dataBrand} loading={loading}/>
            <Pagination pagination={pagination} onPagination={onPagination} />
        </div>
    )
}

export default AllBrand
