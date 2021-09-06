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
  orders: [],
};

export const initialInterfaceState = {
  welcomeSkipped: false,
  productsViewType: 'grid',
  singleProductScrolling: null,
  redirectToOrderAfterLogin: false,
  collectionLoading: false,
  searchProductsError: false,
};

export const initialCategoriesState = {
  categories: [],
  filter: {
    pageSize: 10,
    pageNumber: 1,
  },
  totalPages: null,
  selectedCategory: null,
};

export const initialCartState = {
  cart: [],
  paymentMethods: [],
  selectedPaymentMethod: null,
  deliveryMethods: [],
  selectedDeliveryMethod: null,
};
