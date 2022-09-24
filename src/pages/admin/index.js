import AdminLayout from 'layouts/AdminLayout';
import AdminTemplate from 'templates/admin';

const Admin = () => {
  return <AdminTemplate />;
};

Admin.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Admin;
