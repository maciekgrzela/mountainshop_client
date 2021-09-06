import React, { useState } from 'react';
import { Form as FinalForm } from 'react-final-form';
import OrderDetailsDeliveryForm from './OrderDetailsDeliveryForm';
import OrderDetailsInvoiceForm from './OrderDetailsInvoiceForm';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';
import httpClient from '../../API/httpClient';
import { clearCart } from '../../Actions/ActionCreators/Cart';
import { clearSelectedDelivery } from '../../Actions/ActionCreators/DeliveryMethods';
import { clearSelectedPayment } from '../../Actions/ActionCreators/PaymentMethods';

const OrderDetailsForm = ({ invoiceSelected, setInvoiceSelected }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const payment = useSelector((state) => state.cart.selectedPaymentMethod);
  const delivery = useSelector((state) => state.cart.selectedDeliveryMethod);
  const cart = useSelector((state) => state.cart.cart);

  const [orderSucceed, setOrderSucceed] = useState(false);
  const [paymentRequested, setPaymentRequested] = useState(false);

  const handleOrderDetails = async (data) => {
    let products = [];

    cart.forEach((product) => {
      products.push({
        productId: product.id,
        amount: product.orderedAmount,
      });
    });

    const orderBody = {
      ...data,
      userId: user.user.id,
      paymentMethodId: payment.id,
      deliveryMethodId: delivery.id,
      orderedProducts: products,
    };

    const orderCreated = await httpClient.orders.create(orderBody);
    if (orderCreated.status === 204) {
      if (payment.externalApi) {
        setPaymentRequested(true);
      } else {
        setOrderSucceed(true);
      }
      dispatch(clearCart());
      dispatch(clearSelectedDelivery());
      dispatch(clearSelectedPayment());
    }
  };

  let initialFormData = {
    firstname: user.user.firstName,
    lastname: user.user.lastName,
    country: 'Polska',
  };

  return (
    <>
      {orderSucceed ? (
        <Redirect to='/order/created/no/payment' />
      ) : (
        <>
          {paymentRequested ? (
            <Redirect
              to={{
                pathname: '/checkout/redirect',
                state: {
                  from: location,
                },
              }}
            />
          ) : (
            <div className='order-details-form'>
              <FinalForm
                initialValues={{
                  ...initialFormData,
                }}
                onSubmit={handleOrderDetails}
                render={({
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  values,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className='order-details-form__form'
                  >
                    <div className='order-details-form__delivery'>
                      <OrderDetailsDeliveryForm />
                    </div>
                    <div className='order-details-form__invoice'>
                      <OrderDetailsInvoiceForm
                        invoiceSelected={invoiceSelected}
                        setInvoiceSelected={setInvoiceSelected}
                      />
                    </div>
                    <div className='order-details-form__save-order-details'>
                      <Link to='/cart'>
                        <button className='order-details-form__cancel mr-1'>
                          <FiArrowLeft className='mr-1' />
                          Wróć do koszyka
                        </button>
                      </Link>
                      {payment.externalApi === true ? (
                        <button
                          type='submit'
                          className='order-details-form__save'
                        >
                          Przejdź do płatności
                          <FiArrowRight className='ml-1' />
                        </button>
                      ) : (
                        <button
                          type='submit'
                          className='order-details-form__save'
                        >
                          Potwierdź złożenie zamówienia
                          <FiArrowRight className='ml-1' />
                        </button>
                      )}
                    </div>
                  </form>
                )}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default OrderDetailsForm;
