import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersOrders } from '../../Actions/ActionCreators/User';
import ListEmptyPlaceholder from '../../Components/Common/ListEmptyPlaceholder';
import Modal from '../../Components/Common/Modal';
import withLoading from '../../Components/withLoading';
import AccountOrdersDeliveryAddress from './AccountOrdersDeliveryAddress';
import AccountOrdersInvoiceAddress from './AccountOrdersInvoiceAddress';
import AccountOrdersProducts from './AccountOrdersProducts';

const AccountOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.user.orders);

  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [invoiceAddress, setInvoiceAddress] = useState(null);
  const [orderedProducts, setOrderedProducts] = useState(null);

  useEffect(() => {
    dispatch(fetchUsersOrders());
  }, []);

  if (orders.length === 0) {
    return <ListEmptyPlaceholder />;
  }

  return (
    <div className='users-orders'>
      <table className='users-orders__table'>
        <thead>
          <tr>
            <th>Numer zamówienia</th>
            <th>Adres dostawy</th>
            <th>Dane do faktury</th>
            <th>Metoda płatności</th>
            <th>Sposób dostawy</th>
            <th>Zamówione produkty</th>
            <th>Status zamówienia</th>
            <th>Gwarancja</th>
            <th>Utworzono</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
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
          ))}
        </tbody>
      </table>
      {deliveryAddress !== null && (
        <Modal
          open={true}
          handleClose={() => setDeliveryAddress(null)}
          title={`Adres dostawy dla zamówienia #${deliveryAddress.number}`}
          content={
            <AccountOrdersDeliveryAddress deliveryAddress={deliveryAddress} />
          }
        />
      )}
      {invoiceAddress !== null && (
        <Modal
          open={true}
          handleClose={() => setInvoiceAddress(null)}
          title={`Dane faktury dla zamówienia #${invoiceAddress.number}`}
          content={
            <AccountOrdersInvoiceAddress invoiceAddress={invoiceAddress} />
          }
        />
      )}
      {orderedProducts !== null && (
        <Modal
          open={true}
          handleClose={() => setOrderedProducts(null)}
          title={`Produkty dla zamówienia #${orderedProducts.number}`}
          content={
            <AccountOrdersProducts products={orderedProducts.orderedProducts} />
          }
        />
      )}
    </div>
  );
};

export default withLoading(AccountOrders, 'Ładowanie listy zamówień');
