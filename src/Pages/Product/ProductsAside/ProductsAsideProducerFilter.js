import React from 'react';
import { useSelector } from 'react-redux';

const ProductsAsideProducerFilter = ({ setFilters }) => {
  const producers = useSelector((state) => state.producers);

  const handleProducersIdsFilter = (e, producer) => {
    if (e.target.checked) {
      setFilters((prev) => ({
        ...prev,
        producerIds:
          prev.producerIds !== undefined
            ? [...prev.producerIds, producer.id]
            : [producer.id],
      }));
    } else {
      setFilters((prev) => {
        if (prev.producerIds.length === 1) {
          return {
            ...prev,
            producerIds: undefined,
          };
        } else {
          return {
            ...prev,
            producerIds: [
              ...prev.producerIds.slice(
                0,
                prev.producerIds.indexOf(producer.id)
              ),
              ...prev.producerIds.slice(
                prev.producerIds.indexOf(producer.id) + 1
              ),
            ],
          };
        }
      });
    }
  };

  return (
    <div className='filters__producer'>
      <h4>Producent:</h4>
      <form>
        {producers.producers.map((producer) => (
          <div key={producer.id}>
            <input
              type='checkbox'
              id={producer.id}
              onChange={(e) => handleProducersIdsFilter(e, producer)}
              name={producer.id}
              value={producer.name}
            />
            <label htmlFor={producer.id}>{producer.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default ProductsAsideProducerFilter;
