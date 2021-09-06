import React from 'react';
import { useSelector } from 'react-redux';
import CollectionLoader from './Common/CollectionLoader';

const withLoading =
  (WrappedComponent, message) =>
  ({ ...props }) => {
    const loading = useSelector((state) => state.interface.collectionLoading);

    return (
      <>
        {loading && <CollectionLoader text={message} />}
        <WrappedComponent {...props} />
      </>
    );
  };

export default withLoading;
