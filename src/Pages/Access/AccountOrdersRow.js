import React from 'react';
import Moment from 'react-moment';

const AccountOrdersRow = ({
  order,
  setDeliveryAddress,
  setInvoiceAddress,
  setOrderedProducts,
}) => {
  return (
    <tr>
      <td>#{order.number}</td>
      <td>
        <span
          onClick={() => setDeliveryAddress(order)}
        >{`${order.orderDetails.addressLineOne} ${order.orderDetails.place}...`}</span>
      </td>
      <td>
        {order.orderDetails.companyName !== null ? (
          <span onClick={() => setInvoiceAddress(order)}>
            {`${order.orderDetails.companyName.substr(0, 20)}...`}
          </span>
        ) : (
          'Nie podano'
        )}
      </td>
      <td>{order.paymentMethod.name}</td>
      <td>{order.deliveryMethod.name}</td>
      <td>
        {order.orderedProducts.length > 0 ? (
          <span onClick={() => setOrderedProducts(order)}>Zobacz</span>
        ) : (
          'Brak produktów'
        )}
      </td>
      <td>{order.status === 'Paid' ? 'Opłacono' : 'Nie opłacone'}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{order.warrantyIsInForce}</Moment>
      </td>
      <td>
        <Moment format='DD/MM/YYYY'>{order.created}</Moment>
      </td>
    </tr>
  );
};

export default AccountOrdersRow;
