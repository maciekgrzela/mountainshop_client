export const initialProductsState = {
  products: [],
  displayedProducts: [],
  filterForDisplayedProducts: {
    pageSize: 3,
    pageNumber: 1,
  },
  appendProductsToList: false,
  totalPages: null,
  totalItems: null,
};

export const initialProducersState = {
  producers: [],
  filterForProducers: {},
};

export const initialUserState = {
  isLogged: false,
  user: [],
};

export const initialInterfaceState = {
  welcomeSkipped: false,
  productsViewType: 'grid',
  singleProductScrolling: null,
};

export const initialCategoriesState = {
  categories: [],
  selectedCategory: null,
};

export const initialCartState = {
  cart: [],
  paymentMethods: [],
  deliveryMethods: [],
};
