import Restaurant from '../views/pages/restaurant.js';
import Favorite from '../views/pages/favorite.js';

const routes = {
  '/': Restaurant,
  '/restaurant': Restaurant,
  '/favorite': Favorite,
};

export default routes;