import React from 'react';

const ProductsAsideGenderFilter = ({ setFilters }) => {
  const handleGenderFilter = (e, gender) => {
    if (e.target.checked) {
      setFilters((prev) => ({
        ...prev,
        genderFilter:
          prev.genderFilter !== undefined
            ? [...prev.genderFilter, gender]
            : [gender],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        genderFilter: prev.genderFilter.splice(
          prev.genderFilter.indexOf(gender),
          1
        ),
      }));
    }
  };

  return (
    <div className='filters__gender'>
      <h4>Przeznaczone:</h4>
      <form>
        <div>
          <input
            type='checkbox'
            id='male'
            name='male'
            value='male'
            onChange={(e) => handleGenderFilter(e, 'male')}
          />
          <label htmlFor='male'>Dla mężczyzn</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='female'
            name='female'
            value='female'
            onChange={(e) => handleGenderFilter(e, 'female')}
          />
          <label htmlFor='female'>Dla kobiet</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='unisex'
            name='unisex'
            value='unisex'
            onChange={(e) => handleGenderFilter(e, 'unisex')}
          />
          <label htmlFor='unisex'>Unisex</label>
        </div>
      </form>
    </div>
  );
};

export default ProductsAsideGenderFilter;
