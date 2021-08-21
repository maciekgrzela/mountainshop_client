import React from 'react';

const ProductsDetailsDescription = ({ properties, product }) => {
  return (
    <div className='product-content__description my-5'>
      <div
        className='my-2'
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></div>
      {properties !== undefined && (
        <div className='product-content__properties'>
          <table className='product-content__table'>
            <thead>
              <tr>
                <th>Właściwość</th>
                <th>Wartość</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr>
                  <td>{property.productsProperty.name}</td>
                  <td>{property.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductsDetailsDescription;
