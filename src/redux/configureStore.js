import { createStore, combineReducers } from 'redux';
// funciones reductoras mas simples
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';

// cuando alguien invoca a este configureStore configura mi redux store en la app
export const ConfigureStore = () => {
  const store = createStore(
    // combinamos nuestras funciones reductoras simples a un estado mas general mediante combineReducers
    combineReducers({ 
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders
    })
  );

  return store;
}
