import React from 'react';
import { FiFrown } from 'react-icons/fi';

const ListEmptyPlaceholder = () => {
  return (
    <div className='list-empty'>
      <div className='list-empty__frame'>
        <FiFrown className='list-empty__icon' />
        <p className='list-empty__desc'>
          Wyświetlana lista elementów jest pusta
        </p>
      </div>
    </div>
  );
};

export default ListEmptyPlaceholder;
