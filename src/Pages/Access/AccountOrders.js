import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersOrders } from '../../Actions/ActionCreators/User';
import ListEmptyPlaceholder from '../../Components/Common/ListEmptyPlaceholder';
import Modal from '../../Components/Common/Modal';
import withLoading from '../../Components/withLoading';
import AccountOrdersDeliveryAddress from './AccountOrdersDeliveryAddress';
import AccountOrdersInvoiceAddress from './AccountOrdersInvoiceAddress';
import AccountOrdersProducts from './AccountOrdersProducts';
import AccountOrdersRow from './AccountOrdersRow';

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
            <AccountOrdersRow
              order={order}
              setDeliveryAddress={setDeliveryAddress}
              setInvoiceAddress={setInvoiceAddress}
              setOrderedProducts={setOrderedProducts}
            />
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
