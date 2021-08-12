import React from 'react';
import plecakMock from '../../../Assets/images/plecak_mock.jpg';

const ProductsDetailsImages = () => {
  return (
    <div className='product-content__images product-image-gallery'>
      <div className='product-image-gallery__thumbnails'>
        <img
          src={plecakMock}
          alt='Product img'
          className='product-image-gallery__thumbnail'
        />
        <img
          src={plecakMock}
          alt='Product img'
          className='product-image-gallery__thumbnail'
        />
        <img
          src={plecakMock}
          alt='Product img'
          className='product-image-gallery__thumbnail'
        />
      </div>
      <div className='product-image-gallery__full-view'>
        <img
          src={plecakMock}
          alt='Product img'
          className='product-image-gallery__full-img'
        />
      </div>
    </div>
  );
};

export default ProductsDetailsImages;
