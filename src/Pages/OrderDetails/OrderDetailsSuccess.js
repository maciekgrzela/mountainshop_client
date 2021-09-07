import React, { useEffect, useState } from 'react';
import {
  FiAlertCircle,
  FiPackage,
  FiShoppingBag,
  FiUser,
} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { fetchLastUsersOrder } from '../../Actions/ActionCreators/User';
import { GrDocumentMissing } from 'react-icons/gr';
import { sendRequestLastOrderPaid } from '../../Actions/ActionCreators/Order';
import { skipWelcome } from '../../Actions/ActionCreators/Interface';
import httpClient from '../../API/httpClient';

const OrderDetailsSuccess = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const skipped = useSelector((state) => state.interface.welcomeSkipped);
  const history = useHistory();

  const [grossSum, setGrossSum] = useState(0);
  const [deliveryAndPaymentSum, setDeliveryAndPaymentSum] = useState(0);
  const [paymentErrorMessage, setPaymentErrorMessage] = useState(false);

  const calculateOrderSummary = () => {
    let gross = 0;
    user.lastOrder.orderedProducts.forEach((item) => {
      let grossPrice = 0;
      if (item.percentageSale !== null) {
        grossPrice =
          item.amount *
          (item.grossPrice - item.grossPrice * (item.percentageSale / 100));
      } else {
        grossPrice = item.amount * item.grossPrice;
      }
      gross += grossPrice;
    });

    const deliverySum = user.lastOrder.deliveryMethod.price;
    const paymentSum = user.lastOrder.paymentMethod.price;

    setGrossSum(gross);
    setDeliveryAndPaymentSum(deliverySum + paymentSum);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (
      query.get('stripe_redirect') === null ||
      (query.get('stripe_redirect') !== 'true' &&
        query.get('stripe_redirect') !== 'false') ||
      window.localStorage.getItem('jwt') === null
    ) {
      history.push('/');
    }
    if (!skipped) {
      dispatch(skipWelcome());
    }
  }, []);

  useEffect(() => {
    if (user.lastOrder !== null) {
      const query = new URLSearchParams(location.search);
      if (query.get('stripe_redirect') === 'true') {
        dispatch(sendRequestLastOrderPaid());
      } else {
        setPaymentErrorMessage(true);
      }
      calculateOrderSummary();
    }
  }, [user.lastOrder]);

  useEffect(() => {
    const validateCheckoutSessionId = async (id) => {
      try {
        const sessionValidate = await httpClient.checkout.validateSession(id);
        return sessionValidate.status === 200;
      } catch (e) {
        return false;
      }
    };

    const validate = async () => {
      const query = new URLSearchParams(location.search);

      if (query.get('session') !== null) {
        let valid = await validateCheckoutSessionId(query.get('session'));

        if (valid) {
          dispatch(fetchLastUsersOrder());
        } else {
          history.push('/');
        }
      } else {
        history.push('/');
      }
    };

    if (user.isLogged) {
      validate();
    }
  }, [user.isLogged]);

  return (
    <>
      {user.lastOrder !== null && (
        <div className='order-success-page'>
          {paymentErrorMessage === true && (
            <div className='order-success-page__payment-error'>
              <FiAlertCircle />
              <span>
                Płatność nie została zrealizowana. Skontaktuj się z pracownikiem
                sklepu w celu opłacenia zamówienia.
              </span>
            </div>
          )}
          <FiPackage className='order-success-page__package' />
          <h2 className='order-success-page__title'>
            Zamówienie:{' '}
            <span className='text-weight-bold'>{`#${user.lastOrder.number}`}</span>{' '}
            zostało utworzone pomyślnie
          </h2>
          <div className='order-success-page__delivery-and-payment'>
            <h3>
              Wybrana metoda płatności:{' '}
              <span className='text-weight-bold'>
                {user.lastOrder.paymentMethod.name}
              </span>
            </h3>
            <h3>
              Wybrana metoda dostawy:{' '}
              <span className='text-weight-bold'>
                {user.lastOrder.deliveryMethod.name}
              </span>
            </h3>
          </div>
          <div className='order-success-page__ordered-products'>
            <h3 className='text-weight-400'>Zawartość zamówienia:</h3>
            <ul
              className={
                'order-success-page__products-gallery ' +
                (user.lastOrder.orderedProducts.length < 3 &&
                  `order-success-page__products-gallery--${user.lastOrder.orderedProducts.length}`)
              }
            >
              {user.lastOrder.orderedProducts.map((product) => (
                <li>
                  <div>
                    <img src={product.image} alt={product.name} />
                    <h4 className='text-weight-500 mb-1'>{product.name}</h4>
                    <h5 className='text-weight-400 mt-0'>{`Zamówiono: ${product.amount} SZT`}</h5>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='order-success-page__order-info'>
            <div className='order-success-page__delivery-info'>
              <h3 className='text-weight-400 mt-0'>Dane dostawy:</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Klient:</td>
                    <td>{`${user.user.firstName} ${user.user.lastName}`}</td>
                  </tr>
                  <tr>
                    <td>Adres:</td>
                    <td>{user.lastOrder.orderDetails.addressLineOne}</td>
                  </tr>
                  <tr>
                    <td>Adres cd:</td>
                    <td>{`${user.lastOrder.orderDetails.postalCode} ${user.lastOrder.orderDetails.place}, ${user.lastOrder.orderDetails.country}`}</td>
                  </tr>
                  <tr>
                    <td>Nr telefonu:</td>
                    <td>{user.lastOrder.orderDetails.phoneNumber}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='order-success-page__invoice-info'>
              <h3 className='text-weight-400 mt-0'>Dane do faktury:</h3>
              {user.lastOrder.orderDetails.companyName !== null ? (
                <table>
                  <tbody>
                    <tr>
                      <td>Nazwa firmy:</td>
                      <td>{user.lastOrder.orderDetails.companyName}</td>
                    </tr>
                    <tr>
                      <td>NIP:</td>
                      <td>{user.lastOrder.orderDetails.companyNip}</td>
                    </tr>
                    <tr>
                      <td>Adres cd:</td>
                      <td>{`${user.lastOrder.orderDetails.companyPostalCode} ${user.lastOrder.orderDetails.companyPlace}, ${user.lastOrder.orderDetails.companyCountry}`}</td>
                    </tr>
                    <tr>
                      <td>Nr telefonu:</td>
                      <td>{user.lastOrder.orderDetails.companyPhoneNumber}</td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <div className='order-success-page__no-invoice'>
                  <GrDocumentMissing />
                  <span>Nie wprowadzono</span>
                </div>
              )}
            </div>
            <div className='order-success-page__summary'>
              <h3 className='text-weight-400 mt-0'>Podsumowanie:</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Zamówienie:</td>
                    <td>
                      {user.lastOrder.status === 'Paid' ? (
                        <span className='text-weight-bold'>Opłacone</span>
                      ) : (
                        <span className='text-weight-bold'>Nieopłacone</span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Wartość zamówienia:</td>
                    <td>{`${grossSum.toFixed(2)}zł`}</td>
                  </tr>
                  <tr>
                    <td>Koszty dostawy:</td>
                    <td>{`${deliveryAndPaymentSum.toFixed(2)}zł`}</td>
                  </tr>
                  <tr>
                    <td>Razem:</td>
                    <td className='text-weight-bold'>{`${(
                      grossSum + deliveryAndPaymentSum
                    ).toFixed(2)}zł`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='order-success-page__actions'>
            <Link to='/'>
              <button className='order-success-page__go-to-store'>
                <FiShoppingBag className='mr-1' />
                Powróć do sklepu
              </button>
            </Link>
            <Link to='/account'>
              <button className='order-success-page__go-to-account'>
                Przejdź do strony użytkownika
                <FiUser className='ml-1' />
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetailsSuccess;
