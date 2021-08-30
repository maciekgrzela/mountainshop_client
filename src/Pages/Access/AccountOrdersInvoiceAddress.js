import React from 'react';

const AccountOrdersInvoiceAddress = ({ invoiceAddress }) => {
  return (
    <ul className='account-orders-invoice-address'>
      <li>
        <span className='text-weight-700'>Nazwa firmy:</span>
        {invoiceAddress.orderDetails.companyName}
      </li>
      <li>
        <span className='text-weight-700'>NIP:</span>
        {`${invoiceAddress.orderDetails.companyNip}`}
      </li>
      <li>
        <span className='text-weight-700'>Adres (Linia 1):</span>
        {`${invoiceAddress.orderDetails.companyAddressLineOne}`}
      </li>
      <li>
        <span className='text-weight-700'>Adres (Linia 2):</span>
        {`${invoiceAddress.orderDetails.companyPostalCode} ${invoiceAddress.orderDetails.companyPlace}, ${invoiceAddress.orderDetails.companyCountry}`}
      </li>
      <li>
        <span className='text-weight-700'>Numer telefonu:</span>
        {`${invoiceAddress.orderDetails.companyPhoneNumber}`}
      </li>
    </ul>
  );
};

export default AccountOrdersInvoiceAddress;
