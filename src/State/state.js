export const initialProductsState = {
  products: [],
  displayedProducts: [],
  searchedProducts: [],
  filterForSearchedProducts: null,
  filterForDisplayedProducts: {
    pageSize: 5,
    pageNumber: 1,
  },
  displayedProduct: null,
  displayedComments: null,
  displayedProperties: null,
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
  user: {},
  lastOrder: null,
};

export const initialInterfaceState = {
  welcomeSkipped: false,
  productsViewType: 'grid',
  singleProductScrolling: null,
  redirectToOrderAfterLogin: false,
};

export const initialCategoriesState = {
  categories: [],
  selectedCategory: null,
};

export const initialCartState = {
  cart: [],
  paymentMethods: [],
  selectedPaymentMethod: null,
  deliveryMethods: [],
  selectedDeliveryMethod: null,
};
