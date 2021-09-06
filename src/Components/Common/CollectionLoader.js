import React from 'react';
import Loader from 'react-loader-spinner';

const CollectionLoader = ({ text = null }) => {
  return (
    <div className='collection-loader'>
      <div className='collection-loader__window'>
        <Loader type='Puff' color='#012454' height={50} width={50} />
        {text !== null && <span className='text-weight-400'>{text}</span>}
      </div>
    </div>
  );
};

export default CollectionLoader;
