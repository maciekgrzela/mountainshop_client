export const initialProductsState = {
  products: [
    {
      name: 'Produkt',
      price: 9.9,
      description: 'Opis jakiegoś super produktu',
    },
  ],
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
};

export const initialCartState = {
  cart: [],
  paymentMethods: [],
  deliveryMethods: [],
};
