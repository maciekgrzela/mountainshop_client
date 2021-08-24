import React, { useEffect } from 'react';
import { FiTrash } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../Actions/ActionCreators/Cart';

const CartProductsTable = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleProductAddItem = (e, product) => {
    dispatch(addToCart(product, 1));
  };

  const handleProductRemoveItem = (e, product, removeAll = false) => {
    dispatch(removeFromCart(product, removeAll));
  };

  useEffect(() => {
    console.log(cart.cart);
  }, []);

  return (
    <div className='cart-page__table cart-products-table'>
      <table className='cart-products-table__table'>
        <thead>
          <tr>
            <th></th>
            <th>Produkt</th>
            <th>Liczba sztuk</th>
            <th>Kwota netto</th>
            <th>Podatek</th>
            <th>Kwota brutto</th>
          </tr>
        </thead>
        <tbody>
          {cart.cart
            .sort((a, b) => a.name.length - b.name.length)
            .map((product, index) => (
              <tr>
                <td width={'5%'}>{index + 1}</td>
                <td width={'50%'}>
                  <div className='cart-products-table__product-description'>
                    <img
                      className='cart-products-table__product-image'
                      src={product.image}
                      alt={product.name}
                    />
                    <div className='ml-1'>
                      <h4 className='cart-products-table__product-name'>
                        {product.name}
                      </h4>
                      <h5 className='cart-products-table__product-desc'>
                        {`${product.description.substr(0, 100)}...`}
                      </h5>
                    </div>
                  </div>
                </td>
                <td width={'20%'}>
                  <div className='cart-products-table__product-quantity'>
                    <button
                      disabled={
                        product.orderedAmount + 1 > product.amountInStorage
                      }
                      onClick={(e) => handleProductAddItem(e, product)}
                    >
                      +
                    </button>
                    <input
                      type='text'
                      value={`${product.orderedAmount} SZT`}
                      onChange={(e) => {
                        e.preventDefault();
                      }}
                    />
                    <button
                      disabled={product.orderedAmount - 1 === 0}
                      onClick={(e) => handleProductRemoveItem(e, product)}
                    >
                      -
                    </button>
                    <button
                      onClick={(e) => handleProductRemoveItem(e, product, true)}
                      className='ml-1 secondary'
                    >
                      <FiTrash />
                    </button>
                  </div>
                </td>
                <td width={'10%'}>
                  {product.percentageSale !== null ? (
                    <>
                      {(
                        product.orderedAmount *
                        (product.netPrice -
                          product.netPrice * (product.percentageSale / 100))
                      ).toFixed(2) + 'PLN'}
                    </>
                  ) : (
                    <>
                      {(product.orderedAmount * product.netPrice).toFixed(2) +
                        'PLN'}
                    </>
                  )}
                </td>
                <td width={'5%'}>{`${product.percentageTax.toFixed(2)}%`}</td>
                <td width={'10%'}>
                  <b>
                    {product.percentageSale !== null ? (
                      <>
                        {(
                          product.orderedAmount *
                          (product.grossPrice -
                            product.grossPrice * (product.percentageSale / 100))
                        ).toFixed(2) + 'PLN'}
                      </>
                    ) : (
                      <>
                        {(product.orderedAmount * product.grossPrice).toFixed(
                          2
                        ) + 'PLN'}
                      </>
                    )}
                  </b>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartProductsTable;
