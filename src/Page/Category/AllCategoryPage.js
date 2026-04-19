import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";
import GetCategoryLogic from "../../logic/category/GetCategoryLogic";
const AllCategoryPage = () => {
const [pagination,dataCategory,loading,onPagination] =GetCategoryLogic()
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer loading={loading} dataCategory={dataCategory.data} />
      <Pagination pagination={pagination} onPagination={onPagination} />
    </div>
  );
};

export default AllCategoryPage;
