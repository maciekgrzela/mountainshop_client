import React, { useEffect, useState } from 'react';
import CartProductsTable from './CartProductsTable';
import CartPaymentAndDelivery from './CartPaymentAndDelivery';
import CartOrderSummary from './CartOrderSummary';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [grossSum, setGrossSum] = useState(0);
  const [deliveryAndPaymentSum, setDeliveryAndPaymentSum] = useState(0);

  const calculateCartSummary = () => {
    let gross = 0;
    cart.cart.forEach((item) => {
      let grossPrice = 0;
      if (item.percentageSale !== null) {
        grossPrice =
          item.orderedAmount *
          (item.grossPrice - item.grossPrice * (item.percentageSale / 100));
      } else {
        grossPrice = item.orderedAmount * item.grossPrice;
      }
      gross += grossPrice;
    });

    const deliverySum = cart.selectedDeliveryMethod.price;
    const paymentSum = cart.selectedPaymentMethod.price;

    setGrossSum(gross);
    setDeliveryAndPaymentSum(deliverySum + paymentSum);
  };

  useEffect(() => {
    if (
      cart.selectedDeliveryMethod !== null &&
      cart.selectedPaymentMethod !== null
    ) {
      calculateCartSummary();
    }
  }, [cart.cart, cart.selectedDeliveryMethod, cart.selectedPaymentMethod]);

  return (
    <div className='cart-page'>
      <h2 className='cart-page__title'>Zawartość Twojego koszyka</h2>
      <CartProductsTable />
      <div className='cart-page__details'>
        <CartPaymentAndDelivery />
        <CartOrderSummary
          grossSum={grossSum}
          deliveryAndPaymentSum={deliveryAndPaymentSum}
        />
      </div>
      <div className='cart-page__actions cart-actions'>
        <Link to='/'>
          <button className='cart-actions__back-to-store'>
            <FiArrowLeft /> Wróć do sklepu
          </button>
        </Link>
        <Link to='/order/details'>
          <button className='cart-actions__go-forward'>
            Przejdź dalej
            <FiArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
