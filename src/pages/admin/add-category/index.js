import AdminLayout from "layouts/AdminLayout";
import React from "react";
import AddCategoryTemplate from "templates/admin/add-category";
const AddCategory = () => {
    return <AddCategoryTemplate />;
}
AddCategory.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>
}
export default AddCategory;