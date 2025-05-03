// Hook'u doğru import edin
import React from 'react';
import { useFetchOrders } from '../../hooks/api'; // Burada hook'un doğru import edildiğinden emin olun
import OrdersTable from '../../components/table';

const OrdersComponent = () => {
  const { data, error, isLoading } = useFetchOrders();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }
console.log(data?.data?.list)
  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Orders List</h2>
        <OrdersTable ordersData={data?.data?.list} />
      </div>
    </div>
  );
};

export default OrdersComponent;
