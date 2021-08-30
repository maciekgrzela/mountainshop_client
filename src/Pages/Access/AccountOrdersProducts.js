import React from 'react';

const AccountOrdersProducts = ({ products }) => {
  return (
    <div className='account-orders-products'>
      {products.map((product) => (
        <div className='account-orders-products__product'>
          <img
            className='account-orders-products__image'
            src={product.productImage}
            alt={product.productName}
          />
          <div className='account-orders-products__description'>
            <h2 className='account-orders-products__name'>
              {product.productName}
              <h4 className='account-orders-products__price'>
                {product.productPercentageSale !== null ? (
                  <>
                    {`${(
                      product.productGrossPrice -
                      product.productGrossPrice *
                        (product.productPercentageSale / 100)
                    ).toFixed(2)} PLN / Zamówiono: ${product.amount} SZT`}
                  </>
                ) : (
                  <>{`${product.productGrossPrice.toFixed(
                    2
                  )} PLN / Zamówiono: ${product.amount} SZT`}</>
                )}
              </h4>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountOrdersProducts;
