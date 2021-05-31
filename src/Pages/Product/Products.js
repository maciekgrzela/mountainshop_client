import React from 'react';
import { FiGrid, FiList, FiShoppingCart, FiFilter } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductsViewType } from '../../Actions/ActionCreators/Interface';
import plecakMock from '../../Assets/images/plecak_mock.jpg';

const Products = () => {
  const productsViewType = useSelector(
    (state) => state.interface.productsViewType
  );

  const dispatch = useDispatch();

  const setGridView = () => {
    dispatch(changeProductsViewType('grid'));
  };

  const setListView = () => {
    dispatch(changeProductsViewType('list'));
  };

  return (
    <div className='products-page'>
      <div className='categories-list'>
        <h3 className='categories-list__header'>Wybierz kategorię</h3>
        <ul className='categories-list__items'>
          <li className='categories-list__item'>
            <span>Promocje</span>
          </li>
          <li className='categories-list__item'>
            <span>Nowości</span>
          </li>
          <li className='categories-list__item'>
            <span>Dla niego</span>
          </li>
          <li className='categories-list__item'>
            <span>Dla niej</span>
          </li>
          <li className='categories-list__item'>
            <span>Dla dziecka</span>
          </li>
          <li className='categories-list__item'>
            <span>Wyposażenie turystyczne</span>
          </li>
          <li className='categories-list__item'>
            <span>Narty</span>
          </li>
          <li className='categories-list__item'>
            <span>Kemping</span>
          </li>
          <li className='categories-list__item'>
            <span>Fitness</span>
          </li>
          <li className='categories-list__item'>
            <span>Wyprzedaż</span>
          </li>
        </ul>

        <div className='categories-list__filters filters'>
          <h3 className='categories-list__header'>Filtruj produkty</h3>
          <div className='filters__price'>
            <h4>Cena:</h4>
            <input
              type='text'
              name='price-from'
              className='filters__price-from'
              placeholder='Od...'
            />
            <input
              type='text'
              name='price-to'
              className='filters__price-to'
              placeholder='Do...'
            />
          </div>
          <div className='filters__producer'>
            <h4>Producent:</h4>
            <form>
              <div>
                <input
                  type='checkbox'
                  id='Decathlon'
                  name='Decathlon'
                  value='Decathlon'
                />
                <label for='Decathlon'>Decathlon</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='Quechua'
                  name='Quechua'
                  value='Quechua'
                />
                <label for='Quechua'>Quechua</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='Forclaz'
                  name='Forclaz'
                  value='Forclaz'
                />
                <label for='Forclaz'>Forclaz</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='Hi Mountain'
                  name='Hi Mountain'
                  value='Hi Mountain'
                />
                <label for='Hi Mountain'>Hi Mountain</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='Fjord Najsen'
                  name='Fjord Najsen'
                  value='Fjord Najsen'
                />
                <label for='Fjord Najsen'>Fjord Najsen</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='Bergson'
                  name='Bergson'
                  value='Bergson'
                />
                <label for='Bergson'>Bergson</label>
              </div>
            </form>
          </div>
          <div className='filters__gender'>
            <h4>Przeznaczone:</h4>
            <form>
              <div>
                <input type='checkbox' id='male' name='male' value='male' />
                <label for='male'>Dla mężczyzn</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='female'
                  name='female'
                  value='female'
                />
                <label for='female'>Dla kobiet</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='unisex'
                  name='unisex'
                  value='unisex'
                />
                <label for='unisex'>Unisex</label>
              </div>
            </form>
          </div>
          <button className='filters__apply-btn'>
            Filtruj produkty <FiFilter className='filters__filter-icon' />
          </button>
        </div>
      </div>
      <div className='products-view'>
        <div className='products-view__headline'>
          <h3 className='products-view__header'>
            Produkty z kategorii: {'{kategoria}'}
          </h3>
          <div className='products-view__controls'>
            <select name='sorting' className='products-view__sorting-select'>
              <option value='popular'>Popularność</option>
              <option value='brand_asc'>Marka A-Z</option>
              <option value='brand_desc'>Marka Z-A</option>
              <option value='price_asc'>Od najtańszego</option>
              <option value='price_desc'>Od najdroższego</option>
              <option value='rating'>Najlepiej oceniane</option>
              <option value='comments'>Liczba opinii</option>
            </select>
            <button
              onClick={setGridView}
              className={`products-view__view-btn ${
                productsViewType === 'grid' && 'products-view__view-btn--active'
              }`}
            >
              <FiGrid />
            </button>
            <button
              onClick={setListView}
              className={`products-view__view-btn ${
                productsViewType === 'list' && 'products-view__view-btn--active'
              }`}
            >
              <FiList />
            </button>
          </div>
        </div>
        <div
          className={`products-view__products products-view__products--${productsViewType}`}
        >
          <div
            className={`products-view__product product product--${productsViewType}`}
          >
            <img
              src={plecakMock}
              alt='ProductsName'
              className='product__image'
            />
            <div className='product__info'>
              <h3 className='product__name'>Nazwa Produktu</h3>
              <h5 className='product__price'>290.99PLN</h5>
              <p className='product__desc'>
                Cupidatat eu exercitation anim ex nulla duis aliqua minim nisi
                aliquip excepteur enim.Laboris commodo commodo exercitation et
                elit.
              </p>
            </div>
            <button className='product__add-to-cart'>
              Dodaj do koszyka <FiShoppingCart />
            </button>
          </div>
          <div
            className={`products-view__product product product--${productsViewType}`}
          >
            <img
              src={plecakMock}
              alt='ProductsName'
              className='product__image'
            />
            <div className='product__info'>
              <h3 className='product__name'>Nazwa Produktu</h3>
              <h5 className='product__price'>290.99PLN</h5>
              <p className='product__desc'>
                Cupidatat eu exercitation anim ex nulla duis aliqua minim nisi
                aliquip excepteur enim.Laboris commodo commodo exercitation et
                elit.
              </p>
            </div>
            <button className='product__add-to-cart'>
              Dodaj do koszyka <FiShoppingCart />
            </button>
          </div>
          <div
            className={`products-view__product product product--${productsViewType}`}
          >
            <img
              src={plecakMock}
              alt='ProductsName'
              className='product__image'
            />
            <div className='product__info'>
              <h3 className='product__name'>Nazwa Produktu</h3>
              <h5 className='product__price'>290.99PLN</h5>
              <p className='product__desc'>
                Cupidatat eu exercitation anim ex nulla duis aliqua minim nisi
                aliquip excepteur enim.Laboris commodo commodo exercitation et
                elit.
              </p>
            </div>
            <button className='product__add-to-cart'>
              Dodaj do koszyka <FiShoppingCart />
            </button>
          </div>
          <div
            className={`products-view__product product product--${productsViewType}`}
          >
            <img
              src={plecakMock}
              alt='ProductsName'
              className='product__image'
            />
            <div className='product__info'>
              <h3 className='product__name'>Nazwa Produktu</h3>
              <h5 className='product__price'>290.99PLN</h5>
              <p className='product__desc'>
                Cupidatat eu exercitation anim ex nulla duis aliqua minim nisi
                aliquip excepteur enim.Laboris commodo commodo exercitation et
                elit.
              </p>
            </div>
            <button className='product__add-to-cart'>
              Dodaj do koszyka <FiShoppingCart />
            </button>
          </div>
          <div
            className={`products-view__product product product--${productsViewType}`}
          >
            <img
              src={plecakMock}
              alt='ProductsName'
              className='product__image'
            />
            <div className='product__info'>
              <h3 className='product__name'>Nazwa Produktu</h3>
              <h5 className='product__price'>290.99PLN</h5>
              <p className='product__desc'>
                Cupidatat eu exercitation anim ex nulla duis aliqua minim nisi
                aliquip excepteur enim.Laboris commodo commodo exercitation et
                elit.
              </p>
            </div>
            <button className='product__add-to-cart'>
              Dodaj do koszyka <FiShoppingCart />
            </button>
          </div>
          <div
            className={`products-view__product product product--${productsViewType}`}
          >
            <img
              src={plecakMock}
              alt='ProductsName'
              className='product__image'
            />
            <div className='product__info'>
              <h3 className='product__name'>Nazwa Produktu</h3>
              <h5 className='product__price'>290.99PLN</h5>
              <p className='product__desc'>
                Cupidatat eu exercitation anim ex nulla duis aliqua minim nisi
                aliquip excepteur enim.Laboris commodo commodo exercitation et
                elit.
              </p>
            </div>
            <button className='product__add-to-cart'>
              Dodaj do koszyka <FiShoppingCart />
            </button>
          </div>
          <div
            className={`products-view__product product product--${productsViewType}`}
          >
            <img
              src={plecakMock}
              alt='ProductsName'
              className='product__image'
            />
            <div className='product__info'>
              <h3 className='product__name'>Nazwa Produktu</h3>
              <h5 className='product__price'>290.99PLN</h5>
              <p className='product__desc'>
                Cupidatat eu exercitation anim ex nulla duis aliqua minim nisi
                aliquip excepteur enim.Laboris commodo commodo exercitation et
                elit.
              </p>
            </div>
            <button className='product__add-to-cart'>
              Dodaj do koszyka <FiShoppingCart />
            </button>
          </div>
          <div
            className={`products-view__product product product--${productsViewType}`}
          >
            <img
              src={plecakMock}
              alt='ProductsName'
              className='product__image'
            />
            <div className='product__info'>
              <h3 className='product__name'>Nazwa Produktu</h3>
              <h5 className='product__price'>290.99PLN</h5>
              <p className='product__desc'>
                Cupidatat eu exercitation anim ex nulla duis aliqua minim nisi
                aliquip excepteur enim.Laboris commodo commodo exercitation et
                elit.
              </p>
            </div>
            <button className='product__add-to-cart'>
              Dodaj do koszyka <FiShoppingCart />
            </button>
          </div>
          <div
            className={`products-view__product product product--${productsViewType}`}
          >
            <img
              src={plecakMock}
              alt='ProductsName'
              className='product__image'
            />
            <div className='product__info'>
              <h3 className='product__name'>Nazwa Produktu</h3>
              <h5 className='product__price'>290.99PLN</h5>
              <p className='product__desc'>
                Cupidatat eu exercitation anim ex nulla duis aliqua minim nisi
                aliquip excepteur enim.Laboris commodo commodo exercitation et
                elit.
              </p>
            </div>
            <button className='product__add-to-cart'>
              Dodaj do koszyka <FiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
