import React from 'react';

const AccountOrdersDeliveryAddress = ({ deliveryAddress }) => {
  return (
    <ul className='account-orders-delivery-address'>
      <li>
        <span className='text-weight-700'>Adres (Linia 1):</span>
        {deliveryAddress.orderDetails.addressLineOne}
      </li>
      <li>
        <span className='text-weight-700'>Adres (Linia 2):</span>
        {deliveryAddress.orderDetails.postalCode}{' '}
        {deliveryAddress.orderDetails.place}
        {', '}
        {deliveryAddress.orderDetails.country}
      </li>
      <li>
        <span className='text-weight-700'>Numer telefonu:</span>
        {deliveryAddress.orderDetails.phoneNumber}
      </li>
    </ul>
  );
};

export default AccountOrdersDeliveryAddress;
