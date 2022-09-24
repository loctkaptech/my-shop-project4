import React from 'react';
import AdminLayout from 'layouts/AdminLayout';

const DashBroad = () => {
  return <div>DashBroad</div>;
};

DashBroad.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default DashBroad;
