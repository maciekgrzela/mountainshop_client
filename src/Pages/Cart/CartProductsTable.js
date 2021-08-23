import React, { useEffect } from 'react';
import plecakMock from '../../Assets/images/plecak_mock.jpg';
import { Button, Form } from 'react-bootstrap';
import { FiTrash } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const someProducts = [
  {
    name: 'Plecak Forclaz 50L',
    amount: 10,
    quantity: 4,
    netPrice: 123.9,
    tax: 23,
    image: plecakMock,
  },
  {
    name: 'Buty trekkingowe Quechua',
    amount: 10,
    quantity: 1,
    netPrice: 299.9,
    tax: 8,
    image: plecakMock,
  },
];

const CartProductsTable = () => {
  const cart = useSelector((state) => state.cart);

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
          {someProducts
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
                        Ullamco cupidatat laboris aliqua in do in et nostrud
                        exercitation ea aute tempor exercitation.Exercitation
                        Lorem eu deserunt consequat id aliquip.
                      </h5>
                    </div>
                  </div>
                </td>
                <td width={'20%'}>
                  <div className='cart-products-table__product-quantity'>
                    <button
                      disabled={product.quantity + 1 > product.amount}
                      onClick={(e) => {
                        if (product.quantity + 1 <= product.amount) {
                          // handleModifyProductQuantity(
                          //   product,
                          //   product.orderedQuantity + 1
                          // );
                        }
                      }}
                    >
                      +
                    </button>
                    <input
                      type='text'
                      value={`${product.quantity} SZT`}
                      onChange={(e) => {
                        e.preventDefault();
                      }}
                    />
                    <button
                      disabled={product.quantity - 1 === 0}
                      onClick={() => {
                        // handleModifyProductQuantity(
                        //   product,
                        //   product.orderedQuantity - 1
                        // );
                      }}
                    >
                      -
                    </button>
                    <button className='ml-1 secondary'>
                      <FiTrash />
                    </button>
                  </div>
                </td>
                <td width={'10%'}>
                  {`${(product.quantity * product.netPrice).toFixed(2)} PLN`}
                </td>
                <td width={'5%'}>{`${product.tax.toFixed(2)}%`}</td>
                <td width={'10%'}>
                  <b>{`${(
                    product.quantity *
                    (product.netPrice + (product.tax / 100) * product.netPrice)
                  ).toFixed(2)} PLN`}</b>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartProductsTable;
