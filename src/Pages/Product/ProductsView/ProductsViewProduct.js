import React from 'react';
import { FiShoppingCart, FiTag } from 'react-icons/fi';
import Magnifier from 'react-magnifier';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../Actions/ActionCreators/Cart';

const ProductsViewProduct = ({ product, viewType }) => {
  const dispatch = useDispatch();

  return (
    <div className={`products-view__product product product--${viewType}`}>
      {product.percentageSale !== null && (
        <div className='product__sale'>{`-${product.percentageSale}%`}</div>
      )}
      {new Date().toISOString().substr(0, 7) ===
        product.created.substr(0, 7) && (
        <div className='product__the-new'>
          <FiTag /> NEW
        </div>
      )}
      <Magnifier src={product.image} className='product__image' />
      <div className='product__info'>
        <Link to={`/products/${product.id}`}>
          <h3 className='product__name'>{product.name}</h3>
        </Link>
        <h5 className='product__price'>
          {product.percentageSale ? (
            <>
              <span className='product__price-after-sale'>
                {`${(
                  product.minimalOrderedAmount *
                  (product.grossPrice -
                    product.grossPrice * (product.percentageSale / 100))
                ).toFixed(2)} PLN`}
              </span>
              <span className='product__price-before-sale'>
                {`${product.minimalOrderedAmount * product.grossPrice} PLN`}
              </span>
            </>
          ) : (
            <>{`${(product.minimalOrderedAmount * product.grossPrice).toFixed(
              2
            )} PLN`}</>
          )}
          {product.minimalOrderedAmount > 1 && (
            <span className='product__minimal-amount'>
              Za {product.minimalOrderedAmount} SZT
            </span>
          )}
        </h5>
        <p className='product__desc'>{`${product.description.substr(
          0,
          150
        )}...`}</p>
      </div>
      <button
        onClick={() =>
          dispatch(addToCart(product, product.minimalOrderedAmount))
        }
        className='product__add-to-cart'
      >
        Dodaj do koszyka <FiShoppingCart />
      </button>
    </div>
  );
};

export default ProductsViewProduct;
