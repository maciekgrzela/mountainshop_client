import React, { useState } from 'react';
import { FiCheckCircle, FiPackage } from 'react-icons/fi';
import { IoCloseCircleOutline } from 'react-icons/io5';

const ProductsDetailsAddToCart = () => {
  const [quantity, setQuantity] = useState(15);

  return (
    <div className='product-content__add-to-cart product-add-to-cart px-3'>
      <span className='product-add-to-cart__grossprice'>{`123.90zł`}</span>
      <span className='product-add-to-cart__netprice'>{`99.90zł (23% VAT)`}</span>
      <div className='product-add-to-cart__quantity'>
        <button>+</button>
        <input
          type='text'
          value='5 SZT'
          onChange={(e) => {
            e.preventDefault();
          }}
          placeholder='Ilość produktu'
        />
        <button>-</button>
      </div>
      <button className='product-add-to-cart__add-btn'>Dodaj do koszyka</button>
      {quantity > 0 ? (
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
        Pozostało 1 SZT
        <FiPackage className='ml-1' />
      </span>
      {quantity > 0 ? (
        <span className='product-add-to-cart__availability-comment product-add-to-cart__availability-comment--success'>
          Maksymalna liczba sztuk produktu jaką możesz zamówić to: 10 SZT
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductsDetailsAddToCart;
