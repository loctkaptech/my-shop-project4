import React from 'react';
import AdminLayout from 'layouts/AdminLayout';
import AddProductTemplate from 'templates/admin/add-product';

const AddProduct = () => {
  return <AddProductTemplate />;
};

AddProduct.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AddProduct;
