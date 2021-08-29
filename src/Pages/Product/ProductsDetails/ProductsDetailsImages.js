import React, { useRef, useState } from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductsDetailsImages = ({ products, mainId }) => {
  const imagesContainerRef = useRef();
  const [topArrowVisible, setTopArrowVisible] = useState(false);
  const [downArrowVisible, setDownArrowVisible] = useState(true);

  const handleScrollUp = () => {
    console.log(imagesContainerRef.current.scrollTop);
    if (imagesContainerRef.current.scrollTop - 110 < 0) {
      setTopArrowVisible(false);
    }

    imagesContainerRef.current.scrollTo({
      top: imagesContainerRef.current.scrollTop - 110,
      behavior: 'smooth',
    });

    setDownArrowVisible(true);
  };

  const handleScrollDown = () => {
    imagesContainerRef.current.scrollTo({
      top: imagesContainerRef.current.scrollTop + 110,
      behavior: 'smooth',
    });

    if (
      imagesContainerRef.current.scrollHeight -
        (imagesContainerRef.current.scrollTop + 110) <=
      imagesContainerRef.current.clientHeight
    ) {
      setDownArrowVisible(false);
    }

    setTopArrowVisible(true);
    console.log(imagesContainerRef);
  };

  return (
    <div className='product-content__images product-image-gallery'>
      <div className='product-image-gallery__thumbnails'>
        <div className='product-image-gallery__arrow-up'>
          <FiArrowUp
            className={`product-image-gallery__icon-up ${
              topArrowVisible === false &&
              'product-image-gallery__icon-up--disabled'
            }`}
            onClick={topArrowVisible ? handleScrollUp : (e) => e.preventDefault}
          />
        </div>
        <div ref={imagesContainerRef} className='product-image-gallery__images'>
          <div className='product-image-gallery__current-thumbnail'>
            <img
              src={products.filter((p) => p.id === mainId)[0].image}
              alt='Product img'
              className='product-image-gallery__thumbnail product-image-gallery__thumbnail--disabled'
            />
          </div>

          {products
            .filter((p) => p.id !== mainId)
            .map((product) => (
              <div className='tooltip'>
                <Link to={`/products/${product.id}`} replace={true}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='product-image-gallery__thumbnail'
                  />
                </Link>
                <div className='content'>{`${product.name.substr(
                  0,
                  15
                )}...`}</div>
              </div>
            ))}
        </div>
        <div className='product-image-gallery__arrow-down'>
          <FiArrowDown
            className={`product-image-gallery__icon-down ${
              downArrowVisible === false &&
              'product-image-gallery__icon-down--disabled'
            }`}
            onClick={
              downArrowVisible ? handleScrollDown : (e) => e.preventDefault
            }
          />
        </div>
      </div>
      <div className='product-image-gallery__full-view'>
        <img
          src={products.filter((p) => p.id === mainId)[0].image}
          alt='Product img'
          className='product-image-gallery__full-img'
        />
      </div>
    </div>
  );
};

export default ProductsDetailsImages;
