import React, { useState } from 'react';
import { FiCheckCircle, FiPackage } from 'react-icons/fi';
import { IoCloseCircleOutline } from 'react-icons/io5';

const ProductsDetailsAddToCart = ({ product }) => {
  const [quantity, setQuantity] = useState(product.minimalOrderedAmount);

  const handleQuantityPlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityMinus = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className='product-content__add-to-cart product-add-to-cart px-3'>
      {product.percentageSale !== null ? (
        <span className='product-add-to-cart__grossprice'>
          {(
            (product.grossPrice -
              product.grossPrice * (product.percentageSale / 100)) *
            quantity
          ).toFixed(2) + 'zł'}
        </span>
      ) : (
        <span className='product-add-to-cart__grossprice'>{`${(
          product.grossPrice * quantity
        ).toFixed(2)}zł`}</span>
      )}
      {product.percentageSale !== null ? (
        <span className='product-add-to-cart__netprice'>{`${(
          (product.netPrice -
            product.netPrice * (product.percentageSale / 100)) *
          quantity
        ).toFixed(2)}zł`}</span>
      ) : (
        <span className='product-add-to-cart__netprice'>{`${(
          product.netPrice * quantity
        ).toFixed(2)}zł`}</span>
      )}
      <div className='product-add-to-cart__quantity'>
        <button
          onClick={handleQuantityPlus}
          disabled={quantity + 1 > product.amountInStorage}
        >
          +
        </button>
        <input
          type='text'
          value={`${quantity} SZT`}
          onChange={(e) => {
            e.preventDefault();
          }}
        />
        <button
          onClick={handleQuantityMinus}
          disabled={quantity - 1 < product.minimalOrderedAmount}
        >
          -
        </button>
      </div>
      <button className='product-add-to-cart__add-btn'>Dodaj do koszyka</button>
      {product.minimalOrderedAmount <= product.amountInStorage ? (
        <>
          <span className='product-add-to-cart__availability product-add-to-cart__availability--success'>
            <FiCheckCircle className='mr-1' /> Dostępny
          </span>
          <span className='product-add-to-cart__availability-comment product-add-to-cart__availability-comment--success'>
            Liczba wybranych sztuk jest mniejsza od maksymalnej dostępnej ilości
            produktu
          </span>
        </>
      ) : (
        <>
          <span className='product-add-to-cart__availability'>
            <IoCloseCircleOutline />
            Niedostępny
          </span>
          <span className='product-add-to-cart__availability-comment product-add-to-cart__availability-comment--danger'>
            Niestety, aktualnie nie ma tego towaru na stanie magazynowym.
            Obserwuj ten produkt, aby uzyskać informację o jego dostępności
          </span>
        </>
      )}
      <span className='product-add-to-cart__availability'>
        {`Pozostało ${product.amountInStorage - quantity} SZT`}
        <FiPackage className='ml-1' />
      </span>
      {quantity > 0 ? (
        <>
          <span className='product-add-to-cart__availability-comment product-add-to-cart__availability-comment--success'>
            {`Minimalna ilość produktu jaką możesz zamówić to: `}
            <b>{`${product.minimalOrderedAmount} SZT`}</b>
          </span>
          <span className='product-add-to-cart__availability-comment product-add-to-cart__availability-comment--success'>
            {`Maksymalna ilość produktu jaką możesz zamówić to: `}
            <b>{`${product.amountInStorage} SZT`}</b>
          </span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductsDetailsAddToCart;
