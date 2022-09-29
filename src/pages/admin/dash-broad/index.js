import React from 'react';
import AdminLayout from 'layouts/AdminLayout';
import DashBroadTemplate from 'templates/admin/dash-broad';

const DashBroad = () => {
  return <DashBroadTemplate />;
};

DashBroad.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default DashBroad;
