export const APP_CONFIG = {
  APP_NAME: 'Furnimart',
  APP_DESCRIPTION: 'Modern furniture store',
  CURRENCY: 'USD',
  DEFAULT_LOCALE: 'en-US',
} as const;

export const ROUTES = {
  HOME: '/',
  SHOP: '/shop',
  ABOUT: '/about',
  COLLECTIONS: '/collections',
  BLOG: '/blog',
  CONTACT: '/contact',
  CART: '/cart',
} as const;

export const API_ENDPOINTS = {
  PRODUCTS: '/api/products',
  CART: '/api/cart',
  SEARCH: '/api/search',
} as const;

export const UI_CONSTANTS = {
  NAVBAR_HEIGHT: 64,
  SEARCH_DEBOUNCE_MS: 300,
  ANIMATION_DURATION: 200,
} as const;